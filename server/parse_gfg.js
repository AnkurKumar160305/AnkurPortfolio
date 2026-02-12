import fs from 'fs';

try {
    const html = fs.readFileSync('gfg_debug.html', 'utf8');
    const startTag = '<script id="__NEXT_DATA__" type="application/json">';
    const endTag = '</script>';

    const startIndex = html.lastIndexOf(startTag);
    if (startIndex === -1) {
        console.error("Could not find start tag");
        process.exit(1);
    }

    const dataStart = startIndex + startTag.length;
    const dataEnd = html.indexOf(endTag, dataStart);

    if (dataEnd === -1) {
        console.error("Could not find end tag");
        process.exit(1);
    }

    const jsonString = html.substring(dataStart, dataEnd);
    const data = JSON.parse(jsonString);

    // The data structure can be complex, let's search for typical GFG keys
    const userInfo = data.props?.pageProps?.userInfo;
    if (userInfo && userInfo.solved_problem_count) {
        console.log("FOUND STATS:");
        console.log(JSON.stringify(userInfo.solved_problem_count, null, 2));
    } else {
        console.log("Stats not found in standard location, searching deep...");

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

        const solvedStats = findKey(data, 'solved_problem_count');
        if (solvedStats) {
            console.log("FOUND STATS (deep search):");
            console.log(JSON.stringify(solvedStats, null, 2));
        } else {
            console.log("Stats NOT found in JSON.");
            // Log keys of pageProps to help debug
            if (data.props?.pageProps) {
                console.log("PageProps keys:", Object.keys(data.props.pageProps));
            }
        }
    }
} catch (err) {
    console.error("Error:", err.message);
}
