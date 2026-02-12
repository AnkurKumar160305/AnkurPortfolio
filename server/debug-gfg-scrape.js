import fetch from "node-fetch";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

async function debugGfg() {
    const handle = "ankurcr7";
    const url = `https://www.geeksforgeeks.org/profile/${handle}`;

    console.log(`Fetching ${url}...`);
    try {
        const response = await fetch(url, {
            agent: httpsAgent,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.9",
                "Cache-Control": "max-age=0",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "none",
                "Sec-Fetch-User": "?1",
                "Upgrade-Insecure-Requests": "1"
            }
        });

        console.log(`Status: ${response.status} ${response.statusText}`);
        const html = await response.text();

        // Check if __NEXT_DATA__ exists
        const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
        if (match) {
            console.log("Found __NEXT_DATA__!");
            const data = JSON.parse(match[1]);
            // Navigate to solved counts
            const graphData = data.props?.pageProps?.userInfo?.solved_problem_count;
            console.log("Solved Stats:", JSON.stringify(graphData, null, 2));
        } else {
            console.log("Could NOT find __NEXT_DATA__. Checking for alternative structures...");
            // Try to find raw counts in the HTML using regex if NEXT_DATA is missing
            const schoolMatch = html.match(/SCHOOL\s*\(\s*(\d+)\s*\)/);
            const basicMatch = html.match(/BASIC\s*\(\s*(\d+)\s*\)/);
            const easyMatch = html.match(/EASY\s*\(\s*(\d+)\s*\)/);
            const mediumMatch = html.match(/MEDIUM\s*\(\s*(\d+)\s*\)/);
            const hardMatch = html.match(/HARD\s*\(\s*(\d+)\s*\)/);

            if (schoolMatch || basicMatch || easyMatch || mediumMatch || hardMatch) {
                console.log("Found stats via Regex!");
                const stats = {
                    school: schoolMatch ? parseInt(schoolMatch[1]) : 0,
                    basic: basicMatch ? parseInt(basicMatch[1]) : 0,
                    easy: easyMatch ? parseInt(easyMatch[1]) : 0,
                    medium: mediumMatch ? parseInt(mediumMatch[1]) : 0,
                    hard: hardMatch ? parseInt(hardMatch[1]) : 0
                };
                console.log("Scraped Stats:", stats);
            } else {
                console.log("Failed to extract stats. HTML snippet:", html.substring(0, 500));
            }
        }
    } catch (err) {
        console.error("Error:", err.message);
    }
}

debugGfg();
