![alt text](<Github Actions - CI_CD-1.png>)

# CI-CD: GitHub Actions
![License](https://img.shields.io/badge/license-MIT-blue)

## Description
<span style="color: yellow;">**The CI/CD GitHub Actions**</span> pipeline automates the testing and deployment process of the <span style="color: yellow;">**Tech Quiz Test Suite**</span>, a full-stack web application. When a developer creates a pull request to the develop branch, GitHub Actions runs Cypress component tests to ensure code quality. Once the tests pass, the code can be merged. When the code is then pushed from develop to main, another GitHub Action automatically triggers a deployment to <span style="color: yellow;">**Render**</span>, keeping the application up-to-date with the latest features and bug fixes. This process ensures consistent code integration and seamless deployment for every update. 

## Table of Contents
- [Installation](#installation)
- [Test](#test)
- [Usage](#usage)
- [Mock-Up](#mock-up)
- [Deployed URL](#deployed-url)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

**Setting Up the Project**

Clone the repository:

- Open VS Code
- git clone <https://github.com/bertrandstanley/GitHub-Actions-CI-CD-Setup.git>

Install all necessary packages:

- Navigate to the project directory in your integrated terminal.
- Install all necessary dependencies by running:
- <span style="color: yellow;">**npm install**</span>
- <span style="color: yellow;">**npx cypress install**</span>
and any others that might be missing.

Build the application locally by running:

- <span style="color: yellow;">**npm run build**</span>

Start the app to test the server locally by running:

- <span style="color: yellow;">**npm run start**</span>


## Test

This project sets up a <span style="color: yellow;">**Continuous Integration (CI)**</span> and <span style="color: yellow;">**Continuous Deployment (CD)**</span> pipeline using GitHub Actions, ensuring that code quality is maintained and the application is automatically deployed to Render.

First, create a .github directory with two workflows: <span style="color: yellow;">**test.yml**</span> and <span style="color: yellow;">**deploy.yml**</span>, including all the necessary tests to ensure the proper functionality of the application.

- <span style="color: yellow;">**test.yml**</span>: This workflow is triggered when a pull request is made to the develop branch. It runs Cypress component tests to verify the application's functionality before merging the code into the main branch.

- <span style="color: yellow;">**deploy.yml**</span>: This workflow is triggered when code is merged into the main branch. It automatically deploys the updated application to <span style="color: yellow;">**Render**</span>, ensuring that the latest version is always live.

By integrating these workflows, the pipeline guarantees consistent testing and seamless deployment, leading to an efficient and automated development cycle.

## Usage
**How to Take the Quiz**

- Visit the [Deployed URL](#deployed-url) to take the quiz:

- Once the page loads, click the <span style="color: yellow;">**Start Quiz**</span> button.
- Answer all <span style="color: yellow;">**10 questions**</span>.
- After completing the quiz, your score will be displayed at the end.

Retake the quiz:

- Click the <span style="color: yellow;">**Take New Quiz**</span> button.

## Mock-Up

The following images show the <span style="color: yellow;">**CI/CD test workflows**</span> triggered during the pull requests and when the app is deployed on Render.

![alt text](<Screenshot 2025-03-16 at 4.49.06 PM.png>) 

![alt text](<Screenshot 2025-03-16 at 4.50.21 PM.png>)

![alt text](<Screenshot 2025-03-16 at 4.51.35 PM.png>)

![alt text](<Screenshot 2025-03-16 at 4.53.28 PM.png>) 

![alt text](<Screenshot 2025-03-16 at 4.55.53 PM.png>) 

![alt text](<Screenshot 2025-03-16 at 6.56.07 PM.png>)

The following images show the <span style="color: yellow;">**deployed application**</span>'s appearance and functionality:

![alt text](<Screenshot 2025-03-10 at 3.10.55 AM.png>) 

![alt text](<Screenshot 2025-03-10 at 3.10.41 AM.png>) 

![alt text](<Screenshot 2025-03-10 at 3.12.10 AM.png>)

## Deployed URL

[Click Here](https://github-actions-ci-cd-setup-7zya.onrender.com) to view the live version of the app. 

## License

This project is licensed under the MIT license. 

## Contributing
If you want to contribute, feel free to fork the repository, create a feature branch, make your changes, and submit a pull request.

## Questions
For questions, reach out to me on [GitHub](https://github.com/bertrandstanley) or email me at bertrandstanley@gmail.com.
