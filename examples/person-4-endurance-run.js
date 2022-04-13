/*
  persona-4-endurance-run.js

  Description: The script below will download all the episodes for the Persona 4 Endurance Run.
  Required: Node
  How to Run: `node persona-4-endurance-run.js`
*/
const execSync = require("child_process").execSync;

// Replace `YOUR_API_KEY` with the key from https://www.giantbomb.com/api
const apiKey = "YOUR_API_KEY";

const showName = "Endurance Run";
const startingEpisodeNumber = 0;
const endingEpisode = 160;

for (let i = startingEpisodeNumber; i <= endingEpisode; i++) {
  try {
    execSync(
      `npx gb-dl --api-key ${apiKey} --show-name "${showName}" --video-number ${i} --video-number-reverse`,
      { stdio: "inherit" } // this will allow us to see the console output as it downloads
    );
  } catch (error) {
    console.error(error);
    console.log("Something happened! Moving onto the next video.");
  }
}
