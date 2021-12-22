const inquirer = require('inquirer');

// const fs = require('fs');

// const generatePage = require('./page-template')


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub account Name?'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    ==================
    Add a New Project
    ==================
    `)
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            input: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build in this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'BootStrap', 'Node.js']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another project?',
            default: false
        }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            }
            else {
                return portfolioData;
            }
        });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });





// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

















// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = profileDataArr => {
//     // This is the same
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log("================")

//     // is the same as this
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });

//     console.log("================")

//     // and that is the same as this
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// }



// printProfileData(profileDataArgs);