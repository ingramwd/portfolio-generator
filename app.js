const fs = require('fs');

const generatePage = require('./page-template')

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

















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