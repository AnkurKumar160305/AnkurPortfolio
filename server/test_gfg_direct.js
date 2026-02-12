import fetch from "node-fetch";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

async function testGfgScrape() {
    const username = "ankurcr7";
    const url = `https://www.geeksforgeeks.org/profile/${username}`;

    console.log(`Fetching ${url}...`);

    try {
        const res = await fetch(url, {
            agent: httpsAgent,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.9",
                "Cache-Control": "max-age=0",
                "Upgrade-Insecure-Requests": "1"
            }
        });

        console.log(`Status: ${res.status}`);
        const text = await res.text();

        // Look for __NEXT_DATA__
        const match = text.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
        if (match) {
            console.log("Found __NEXT_DATA__!");
            const data = JSON.parse(match[1]);
            // The path to solved counts in NEXT_DATA can vary, but let's try some common ones
            const userInfo = data.props?.pageProps?.userInfo || data.props?.pageProps?.data;
            if (userInfo) {
                console.log("User Info found:", JSON.stringify(userInfo).substring(0, 200));
                if (userInfo.solved_problem_count) {
                    console.log("Solved Problem Count:", userInfo.solved_problem_count);
                } else if (userInfo.school !== undefined) {
                    console.log("Stats found directly in userInfo:", {
                        school: userInfo.school,
                        basic: userInfo.basic,
                        easy: userInfo.easy,
                        medium: userInfo.medium,
                        hard: userInfo.hard
                    });
                }
            } else {
                console.log("User Info NOT found in pageProps. Keys:", Object.keys(data.props?.pageProps || {}));
            }
        } else {
            console.log("__NEXT_DATA__ not found in HTML.");
            // Check if it's just a simple HTML we can regex
            const countsMatch = text.match(/Solved Problems:.*?(\d+)/i);
            if (countsMatch) console.log("Found simple match:", countsMatch[0]);
        }

    } catch (err) {
        console.error("Error:", err.message);
    }
}

testGfgScrape();
