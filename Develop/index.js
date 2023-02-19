// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: "TITLE: What's your project title?",
    },
    {
    type: 'input',
    name: 'description',
    message: 'DESCRIPTION: Write a description for your project',
    },
    {
    type: 'input',
    name: 'installation',
    message:
        'INSTALLATION: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'USAGE: Provide instructions and examples for use',
    },
    {
    type: 'input',
    name: 'license',
    message:
        'This lets other developers know what they can and cannot do with your project. If you need help choosing a license',
    },
    ];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', questions, data)
// }

// TODO: Create a function to initialize app
// function init() {}
// inquirer.prompt(questions)
// .then(data);
// writeToFile()


// Function call to initialize app
// init();

