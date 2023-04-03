// TODO: Include packages needed for this application
// const genMark = require('generateMarkdown.js');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ['Do you want an installation section?', 'Do you want a usage section?', 'Do you want an questions section?' ];

inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'username',
    },
    {
      type: 'password',
      message: questions[1],
      name: 'password',
    },
    {
      type: 'password',
      message: questions[2],
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
