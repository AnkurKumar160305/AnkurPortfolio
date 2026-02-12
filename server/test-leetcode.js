import fetch from "node-fetch";

const username = "Ankur160305";

const query = `
  query userProblemsSolved($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        userAvatar
      }
    }
  }`;

async function testLeetCode() {
  try {
    console.log("Testing LeetCode API for username:", username);
    const response = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username } }),
    });

    const data = await response.json();
    console.log("\nResponse:", JSON.stringify(data, null, 2));

    if (data.data && data.data.matchedUser) {
      console.log("\n✓ Successfully fetched LeetCode data");
    } else {
      console.log("\n✗ matchedUser is null - username might not exist");
    }
  } catch (err) {
    console.error("\n✗ Error:", err.message);
  }
}

testLeetCode();
