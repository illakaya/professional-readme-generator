// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please provide the title of the project.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for the project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide the usage instructions for the project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide the collaborators of the project or parties that you would like to credit.',
        name: 'credit',
    },
    {
        type: 'list',
        message: 'Please choose the license you would like to use.',
        name: 'license',
        choices: [
            'Apache License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v3.0',
            'GNU General Public License v2.0',
            'MIT License',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Mozilla Public License 2.0',
            'The Unlicense',
            'None',
        ],
    },
    {
        type: 'input',
        message: 'Please provide guidelines on how others can contribute to the project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide test instructions for the project.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const md = `${genMd(data)}`;
    fs.writeFile(`./output/${fileName}.md`, md, (err) => {
        err ? console.error(err) : console.log('md file created, it can be found in the output directory.')
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the README.md generator, simplifying the markdown process.');
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What would you like to name the file?',
                    name: 'fileName',
                },
            ])
            .then((response) => writeToFile(response.fileName, answers));
    });
}

// Function call to initialize app
init();
