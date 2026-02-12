import fs from 'fs';

try {
    const html = fs.readFileSync('gfg_profile.html', 'utf8');
    const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
    if (match) {
        const data = JSON.parse(match[1]);
        console.log("SUCCESS: Data extracted");
        // Search for solved counts in the JSON
        const searchJson = (obj, key) => {
            let results = [];
            const search = (current) => {
                if (!current || typeof current !== 'object') return;
                if (current[key] !== undefined) results.push(current[key]);
                for (let k in current) search(current[k]);
            };
            search(obj);
            return results;
        };

        console.log("Solved Problems Stats:", JSON.stringify(data.props?.pageProps?.userInfo?.solved_problem_count || "Not found"));
        console.log("Full User InfoKeys:", Object.keys(data.props?.pageProps?.userInfo || {}));
    } else {
        console.log("ERROR: __NEXT_DATA__ not found");
    }
} catch (e) {
    console.error("ERROR:", e.message);
}
