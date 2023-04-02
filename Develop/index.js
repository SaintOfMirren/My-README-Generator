const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contributing guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
