RAAMS Systems - GitHub Workflow Development



***Project:*** TimeIT

***Team***<i>:</i> RAAMS Systems

***Objective:*** Creating a consistent development process that supports code review, collaboration, and safe integration.



***1.) Branching Strategy***



The main branch is the shared integration branch, where team members should establish a separate branch for each feature, documentation, bug fix, or any other unit of work.



Branch naming conventions:

&#x09;- feature/short-description - new functionality

&#x09;- fix/short-description - bug fix

&#x09;- test/short-description - testing-related work

&#x09;- docs/short-description - documentation updates/changes



Examples to consider:

&#x09;- fix/login-validation

&#x09;- docs/github-workflow

&#x09;- feature/task-management



***2.) The Development Process***



&#x09;- Synchronization: Before beginning any new work, ensure the local main branch is updated with the latest changes from the remote repository, and the provided working tree is clean.

&#x09;- Create Branch: Make a task-specified branch from the latest main branch.

&#x09;- Developing: Make any necessary changes related to the task. Refrain from making unrelated modifications.

&#x09;- Review Updates: Ensure the changes made align with the task. Run applicable tests before committing to the branch.

&#x09;- Commit Messages: Provide descriptive commit messages that display a brief explanation of the changes made.

&#x09;- Push Updates: Publish the feature branch to the remote repository in GitHub.

&#x09;- Open Pull Request: Make a pull request targeting the main branch, describe the changes made, run tests, and prioritize any outstanding issues.

&#x09;- Review Code: Before merging, request review from a teammate and address feedback.

&#x09;- Merge Branch: Merge the pull request after the team finishes and agrees with the review and that the requirements are confirmed acceptable and ready to go.

&#x09;- Cleaning Up: After merging with the latest updated data, synchronize main, then remove completed local and remote feature branches when necessary.



***3.) Commit Updating/Pushing***



&#x09;Upon making any sort of commit to the designated branch, the commit messages should be brief and concise, describing the changes the teammate made.



&#x09;For instance, each document is rendered with the latest data, and the teammate leaves a message in the description consisting of the changes they made in the repository:



&#x09;- feat: "Add task creation interface."

&#x09;- fix: "Handle invalid task input:

&#x09;- docs: "Document GitHub development workflow."

&#x09;- test: "Add validation tests to the tasks."



&#x09;For each commit made, it must represent a reasonable, focused unit of work. No unrelated changes are to be made in the same commit.



***4.) Pull Requests***



&#x09;Pull Requests should include the following:

&#x09;	- Title and summary of the changes

&#x09;	- Testing/Verifications are performed

&#x09;	- Limitations or work

&#x09;	- Screenshots for user-interface changes

&#x09;	- Related user story or task



&#x09;Correctness, readability, and consistency are in order, as well as checking for possible regressions.



***5.) Testing \& Quality Checks***



&#x09;Before opening a pull request, run the tests and available project checks. Be sure to verify that the updates align with the assigned requirements, inspect for unintended changes, and confirm that sensitive information and local configuration files are not added.



&#x09;

***6.) Collaboration***



&#x09;- Shared files/interfaces with teammates responsible for related components

&#x09;- If merge problems happen, review both versions individually and contain intended changes

&#x09;- Ask teammate for clarification when conflict involves unnecessary requirements

&#x09;- Do not get rid of teammate's work without confirming that it is safe to do so.

&#x09;- Pull or fetch the latest updates regularly, as well as synchronizing safely before continuing new work.



***7.) GitHub Repository Safety***



&#x09;- Keep the main branch stable and refrain from direct commits that disrupt normal development

&#x09;- Avoid using force-pushing shared branches

&#x09;- Avoid committing irrelevant files or generative content

&#x09;- Open pull requests to make updates visible and reviewable before integrating.



***8.) Team Agreement***



RAAMS Systems should agree on approval expectations, testing requirements, reviewers, and methods of branch merging. The repository settings allow branch protection and automated checks are to be configured to support these types of practices. This document is created for the purpose of describing the team workflow. Settings and team agreements are in place so that the requirements are enforced.

