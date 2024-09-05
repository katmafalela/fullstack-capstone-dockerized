# Capstone Project Expectations

## Primary Goals and Expectations

The capstone projects have three primary goals for your growth as a developer. These are simultaneously goals and expectations; failure to conduct yourself in a manner becoming of attaining these goals will affect the evaluation of your performance in the project.

In other words, you will be evaluated in this project exactly as you would be evaluated at a real developer job.

### 1. Understanding teamwork

In this project, you will be working on a codebase from scratch with 3-4 other teammates; you will have to deal with a common codebase, code reuse, merge conflicts, and intrateam communication.

### 2. Behaving professionally

- Do not miss or be tardy to meetings.
- Do not miss deadlines without communicating in advance to your team that there will be a delay.

### 3. Producing high-quality work

Attention to detail is a crucial aspect of distinguishing yourself as a developer. This means both code detail and design detail. View your work as an outsider would: does it look like professional work that you see in other sites?

---

## Tooling

### Github Workflow

We will use Github to collaborate, review, and manage the codebase of the projects. This workflow expects that there is already an issue created as a task to fix or implement something and that issue is assigned to you on GitHub by your team leader.

#### Steps to Implement an Issue and Create a Pull Request

1. Once the issue is created and assigned to yourself, head to VSCode.
2. Make sure you are on the `master` or `main` branch, and do a `git pull` to pull recent changes.
3. Use the GitHub Pull Request and Issues extension, look for your issue, and click the ➡️ icon when you want to start working on the issue. This will create a branch in the format `your_id/issueNumber` (e.g., `halitbatur/issue3`).
4. Commit your work regularly at each milestone.
5. Push the branch to GitHub using `git push -u origin [BRANCH_NAME]` (replace `[BRANCH_NAME]` with the actual branch name).
6. Create a pull request (PR) on GitHub and reference the issue number in the PR description (e.g., Fixes #3).
7. Assign the PR to a reviewer (someone from your team + team leader).
8. If changes are required, checkout the branch of the PR, make the changes, and push again to update the PR.

**Note:** For the capstone project, we are simplifying the workflow to use a single branch—`main`. All individual branches must be created from and merged into `main`. CI automation will run checks when a PR is opened into `main`.

### GitHub Project Management

GitHub project management helps project managers and developers coordinate, track, and update their work in one place. Projects remain transparent and on schedule.

### GitHub Actions

Continuous integration (CI) will be set up using GitHub Actions. This will run linting, formatting checks, and unit tests whenever a pull request is opened into the `main` branch. You will also have local CI setup with Husky to run pre-commit checks.

### Heroku

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. After 2-3 weeks of coding, your lead engineer will help set up a Heroku account with Git-based deployment.

### MongoDB Atlas

MongoDB Atlas is a fully-managed cloud database service. Your lead engineer will help deploy your MongoDB database in the cloud and connect it to your backend API.

### Other Tools

You will also use:

- Yarn
- ESLint
- Prettier
- Jest

---

## Repository Setup

### Backend Structure

Try to follow the MVC project hierarchy for your backend structure. Your folder structure should look like this:

```
├── src
    ├── controllers
        ├── users.js
        ├── posts.js
        ├── __tests__
            ├── users.test.js
    ├── models
        ├── users.js
        ├── posts.js
    ├── routes
        ├── users.js
        ├── posts.js
        ├── index.js
    ├── services
        ├── cronJobs.js
        ├── jobProcessor.js
    ├── utils
        ├── email.js
    ├── views
        ├── home.ejs
        ├── styles.css
```

### Frontend Structure

Follow the component pages pattern for your frontend structure. Use `TitleCase` for folder and file names, and your structure should look like this:

```
├── src
    ├── components
        ├── ProgressBar
            ├── ProgressBar.js
            ├── ProgressBar.scss
    ├── Pages
        ├── About
            ├── ContactForm.js
            ├── About.js
    ├── style
        ├── _variables.scss
```

---

## Git

### Pull Requests

All branches must be created from `main`, and all pull requests must be merged into `main`.

1. Create a new branch using `$ git checkout -b <working-branch-name>`.
2. Regularly pull changes from `main` using `$ git pull origin main`.
3. Follow the commit message guidelines below.

### Branch Naming

Use `kebab-case` when naming branches (e.g., `login-api`, `feature/login-api`).

### Commit Messages

A commit message should start with one of the following types:

- `Build`
- `CI`
- `Doc`
- `Feat`
- `Fix`
- `Perf`
- `Refactor`
- `Style`
- `Test`

Use imperative present tense in your commit messages (e.g., `add feature xyz`, not `added feature xyz`).

---

## Code Reviews

- Each piece of code must be reviewed by at least two reviewers: a trainer and a teammate.
- Feedback must be implemented within 1 business day.

---

## Bug Bash

Frequent bug bashes will be required during the later weeks of the project. This is where everyone meets to inspect the app and list bugs and fixes.

---

## Sprint Planning

Each team will have sprint planning meetings and retrospectives. Use GitHub project management for planning.

### Daily Standups

Standups will occur daily, with a focus on:

1. What you did yesterday
2. What you're doing today
3. Any blockers you’re facing

---

## Further Readings

- [Google Code Review Overview](https://google.github.io/eng-practices/review/)
- [Google Code Review Developer Guide](https://google.github.io/eng-practices/review/developer/)
- [Google Code Review Reviewer Guide](https://google.github.io/eng-practices/review/reviewer/)

---

## Bug Bash and Quality Standards

### What is a bug bash?

In the later weeks of the projects, as you've fleshed out a working project, frequent bug bashes will be required. A bug bash is what it sounds like: everyone meets (together), sits down to "bash" the application and records a list of bugs and fixes.

In a bug bash, you should be inspecting your application with immense detail. The evaluation should be quite harsh and focus on all the nitty-gritty and edge cases.

It should be noted that at a normal company a bug bash would be performed with all groups of people (product managers, designers, engineers, managers, etc.); in this case, the responsibility will fall upon you to objectively evaluate your app. Your lead engineer may join for some bug bashes.

### When do we bug bash?

It should be done at a minimum once a week during the two weeks approaching demo day. However, you may feel free to do it earlier in the project timeline or more frequently each week.

---

## Sprint Planning and Meeting Dynamic

The team with the lead engineer will have sprint planning at the beginning of the week, and a retrospective at the end of it. Use GitHub project management for sprint planning.

### Daily Standups

The team with the lead engineer will have daily standups, 2 calls, and 3 on slack. Each team is expected to meet outside of the regular meetings. The standups should be short and straightforward, answering these questions:

- What did you do yesterday?
- What are you working on today?
- What blockers are you facing?

The whole meeting is 10 minutes long, so you are expected to be on time.

### Logistics

Everyone should be in the daily standup call. If you are going to miss it, please send a message in advance in the project slack channel saying you won't be there and tag your team leader.

Any issue between team members must be communicated to the team leader and the person you have an issue with. We recommend checking out this resource on how to give good direct feedback.

If you think you aren't going to finish a task on time, it's good practice to communicate this to the team leader as soon as possible. At the end of the day, communication is everything and there is no such thing as over-communication.

Everyone must answer the daily stand-up note questions sent in the project slack channel or on your standup zoom call.

Always over-communicate, and ask for more clarification if something is unclear.
