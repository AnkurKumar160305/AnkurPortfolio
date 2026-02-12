import fetch from "node-fetch";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

async function scrapeGfg(handle) {
    const url = `https://www.geeksforgeeks.org/profile/${handle}`;
    try {
        const response = await fetch(url, {
            agent: httpsAgent,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            }
        });

        const html = await response.text();
        const stats = { school: 0, basic: 0, easy: 0, medium: 0, hard: 0, total: 0 };

        // Aggressive search for all patterns
        const keyMap = {
            "school": "school",
            "basic": "basic",
            "easy": "easy",
            "medium": "medium",
            "hard": "hard",
            "total_problems_solved": "total"
        };

        // Try finding in JSON-like structures (escaped or not)
        Object.keys(keyMap).forEach(key => {
            // Match \"key\":123 or "key":123
            const regex = new RegExp(`\\\\*\"${key}\\\\*\":\\s*(\\d+)`, 'i');
            const match = html.match(regex);
            if (match) {
                const val = parseInt(match[1]);
                stats[keyMap[key]] = val;
            }
        });

        // Fallback: search for visible labels like "EASY ( 22 )"
        const labels = ["SCHOOL", "BASIC", "EASY", "MEDIUM", "HARD"];
        labels.forEach(label => {
            if (stats[label.toLowerCase()] === 0) {
                // Match EASY ( 22 ) or EASY(22) or EASY : 22
                const regex = new RegExp(`${label}\\s*[\\(: ]*\\s*(\\d+)\\s*[\\)]?`, 'i');
                const match = html.match(regex);
                if (match) {
                    stats[label.toLowerCase()] = parseInt(match[1]);
                }
            }
        });

        // Calculate total if not found
        if (stats.total === 0) {
            stats.total = stats.school + stats.basic + stats.easy + stats.medium + stats.hard;
        }

        console.log("Final Scraped Data:", JSON.stringify(stats, null, 2));
        return stats;
    } catch (err) {
        console.error("Scrape Error:", err.message);
        return null;
    }
}

scrapeGfg("ankurcr7");
