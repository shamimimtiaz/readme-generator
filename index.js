// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

function promptUser(){
  return inquirer.prompt([
   // Ques 1
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      //Ques 2
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      //Ques 3
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
    }
  },
  //Ques 4
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('What is your project title?');
        return false;
      }
  }
},
//Ques 5
{
    type: 'input',
    name: 'description',
    message: 'Please write your project description!(Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please write your project description!');
        return false;
      }
  }
},
//Ques 6
{
    type: 'input',
    name: 'deployedlink',
    message: 'Please provide deployed link of your application if available!'
},
//Ques 7
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.!(Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please provide intallation instruction!');
        return false;
      }
  }
},
 
  //Ques 8
{
    type: 'input',
    name: 'instructions',
    message: 'Provide instructions and examples for use. Include screenshots as needed'
},
//Ques 9
{
    type: 'checkbox',
    name: 'languages',
    message: 'What did you this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
//Ques 10
{
    type: 'list',
    name: 'license',
    message: 'Please choose the correct license for the project. ',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
},


//Ques 11
{
    type: 'input',
    name: 'usage',
    message: 'Please provide the usage information for the project'
},
//Ques 12
{
    type: 'input',
    name: 'feature',
    message: 'Please provide the features for the project'
    },

  ]);
}
// Async function using util.promisify 
async function init() {
  try {
      // Ask user questions and generate responses
      const data = await promptUser();
      const generateContent = generateMarkdown(data);
      // Write new README.md to dist directory
      await writeFileAsync('./dist/README.md', generateContent);
      console.log('Successfully wrote to README.md');
  }   catch(err) {
      console.log(err);
  }
}
init();

