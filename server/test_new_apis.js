import fetch from "node-fetch";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

const urls = {
    gfg: "https://gfg-stats.tashif.codes/api/profile/ankurcr7",
    naukri: "https://www.naukri.com/code360/api/v3/public_section/profile/user_details?uuid=Ankurcrs"
};

const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.37 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.37",
    "Accept": "application/json"
};

async function testApis() {
    for (const [name, url] of Object.entries(urls)) {
        console.log(`\nTesting ${name}: ${url}`);
        try {
            const response = await fetch(url, {
                agent: httpsAgent,
                headers: headers
            });
            console.log(`Status: ${response.status} ${response.statusText}`);
            const text = await response.text();
            try {
                const json = JSON.parse(text);
                console.log(`✓ Valid JSON:`, JSON.stringify(json).substring(0, 100) + "...");
            } catch (e) {
                console.log(`✗ Invalid JSON. First 200 chars:`, text.substring(0, 200));
            }
        } catch (err) {
            console.error(`✗ Error:`, err.message);
        }
    }
}

testApis();
