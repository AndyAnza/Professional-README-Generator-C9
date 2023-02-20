// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: "TITLE: What's your project title? ➡ ",
    },
    {
    type: 'input',
    name: 'description',
    message: 'DESCRIPTION: Write a description for your project ➡ ',
    },
    {
    type: 'input',
    name: 'deploymentURL',
    message:'DEPLOYMENT: Enter your project deplopyment link ➡ ',
    },
    {
    type: 'input',
    name: 'installation',
    message:'INSTALLATION: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running ➡ ',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'USAGE: Provide instructions and examples for use ➡ ',
    },
    {
    type: 'input',
    name: 'screenshot',
    message: 'SCREENSHOT: Screenshot name (it should be stored in this path: assets/images/). Example: image.png ➡ ',
    },
    {
    type: 'input',
    name: 'credits',
    message:'CREDITS: List your collaborators, if any, with links to their GitHub profiles. If you followed tutorials, include links to those here as well ➡ ',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose your license  ➡ ',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3', 'NONE'],
    },
    {
    type: 'input',
    name: 'contribute',
    message:`CONTRIBUTE: If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer ➡ `,
    },
    {
    type: 'input',
    name: 'tests',
    message:'TESTS: Go the extra mile and write tests for your application. Then provide examples on how to run them here ➡ ',
    },
    {
    type: 'input',
    name: 'github',
    message:'GITHUB: Enter your github account so that people contact you if they have questions about your project ➡ ',
    },
    {
    type: 'input',
    name: 'email',
    message:
    'EMAIL: Enter your email ➡ ',
    },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
        console.error(err);
        } else {
        console.log(`\n----- README file has been generated ✅ -----\n`);
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        writeToFile('template-README.md', answers);
    });
}


// Function call to initialize app
init();

