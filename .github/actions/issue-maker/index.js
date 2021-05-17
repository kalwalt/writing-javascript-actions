const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    const octokit = new github.getOctokit(token);
    console.log('what is octokit?');
    console.log(octokit);
    console.log('what is github?');
    console.log(github);

    const newIssue = await octokit.issues.create({
      //repo: github.context.repo.repo,
      repo: 'writing-javascript-actions',
      //owner: github.context.repo.owner,
      owner: 'kalwalt',
      title: issueTitle,
      body: jokeBody
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();