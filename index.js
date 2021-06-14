// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeGenerate = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributer', 
            message: 'Did you contribute on this project? If so, please enter your first and last name. If not, please skip this question.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is you Github username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your Github username.');
                    return false;
                }
            }
        
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a description of this project. (Required)', 
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered a description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter any installization instructions.',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project.',
            default: true
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What license did you use? ',
            choices: ['MIT', 'Apache', 'Eclipse Public License', 'Mozilla Public License 2.0']
        }
    ])
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => { 
    questions().then((response) => {
        //console.log(response)
        
        const answersString = readmeGenerate(response);


// Function call to initialize app
fs.writeFile('.README.md', answersString, err => {
    if (err) throw err;


    console.log('ReadMe Generated!');
})
})
}

init()