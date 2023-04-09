
const inquirer = require('inquirer'); //nmp package 
const fs = require('fs'); // file system
const util = require('util');

// Internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("welcome to my README generator")
console.log("answer the following questions to generate a high quality README for your project")
// array of questions to ask the user
const questions = [

    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    //project description 
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "How do you install your project?",
        name: 'installation',
        default: 'Project installation',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Eenter the steps of installation to continue.");
            }
            return true;
        }
        
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
  
    },
    //licensing available
    {
        type: 'checkbox',
        message: "Choose a license for your project.",
        name: 'license',
        default: 'Project license',
        choices: ['MPL2.0','GNU','Apache','MIT'],
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Select a license for your project.");
            }
            return true;
        }
        
    },
];
//function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

