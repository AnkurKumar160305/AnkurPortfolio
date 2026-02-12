import fs from 'fs';

const html = fs.readFileSync('gfg_profile_debug.html', 'utf8');
const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);

if (match) {
    const data = JSON.parse(match[1]);
    // Find the solve counts in the JSON
    // Common paths: data.props.pageProps.userInfo.solved_problem_count
    const userInfo = data.props?.pageProps?.userInfo || data.props?.pageProps?.data?.userInfo;
    if (userInfo && userInfo.solved_problem_count) {
        console.log("FOUND_STATS:", JSON.stringify(userInfo.solved_problem_count));
    } else {
        console.log("STATS_NOT_FOUND_IN_USER_INFO");
        // Search deep in the object if needed
        const findKey = (obj, key) => {
            if (obj && typeof obj === 'object') {
                if (obj[key] !== undefined) return obj[key];
                for (let k in obj) {
                    const result = findKey(obj[k], key);
                    if (result !== undefined) return result;
                }
            }
            return undefined;
        };
        const solved = findKey(data, 'solved_problem_count');
        if (solved) {
            console.log("FOUND_STATS_DEEP:", JSON.stringify(solved));
        } else {
            console.log("COMPLETELY_NOT_FOUND");
        }
    }
} else {
    console.log("NEXT_DATA_SCRIPT_NOT_FOUND");
}
