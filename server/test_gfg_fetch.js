import fetch from "node-fetch";
import https from "https";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

async function testFetch() {
    const url = "https://www.geeksforgeeks.org/profile/ankurcr7";
    try {
        const res = await fetch(url, {
            agent: httpsAgent,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            }
        });
        const text = await res.text();
        console.log("HTML_LENGTH:", text.length);
        console.log("HTML_START:", text.substring(0, 2000));
        console.log("HTML_END:", text.substring(text.length - 2000));

        // Check for "userId"
        const userIdIndex = text.indexOf("userId");
        if (userIdIndex !== -1) {
            console.log("USERID_FOUND_AT:", userIdIndex);
            console.log("CONTEXT:", text.substring(userIdIndex - 50, userIdIndex + 200));
        } else {
            console.log("USERID_NOT_FOUND");
        }

        // Check for "user_id"
        const userIdIndex2 = text.indexOf("user_id");
        if (userIdIndex2 !== -1) {
            console.log("USER_ID_FOUND_AT:", userIdIndex2);
            console.log("CONTEXT:", text.substring(userIdIndex2 - 50, userIdIndex2 + 200));
        } else {
            console.log("USER_ID_NOT_FOUND");
        }

        // Check for "solved"
        const solvedIndex = text.indexOf("solved");
        if (solvedIndex !== -1) {
            console.log("SOLVED_FOUND_AT:", solvedIndex);
            console.log("CONTEXT:", text.substring(solvedIndex - 50, solvedIndex + 200));
        } else {
            console.log("SOLVED_NOT_FOUND");
        }

        // Check for "problem"
        const problemIndex = text.indexOf("problem");
        if (problemIndex !== -1) {
            console.log("PROBLEM_FOUND_AT:", problemIndex);
            console.log("CONTEXT:", text.substring(problemIndex - 50, problemIndex + 200));
        } else {
            console.log("PROBLEM_NOT_FOUND");
        }
    } catch (err) {
        console.error("Fetch Error:", err.message);
    }
}

testFetch();
