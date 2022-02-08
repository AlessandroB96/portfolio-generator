const inquirer = require('inquirer');

inquirer

  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

//const profileDataArgs = process.argv.slice(2, process.argv.length);

//const [name1, github] = profileDataArgs;

                                // const fs = require('fs');
                                // const generatePage = require('./src/page-template.js')
                                // const pageHTML = generatePage(name1, github);

                                // fs.writeFile('index.html', pageHTML, err => {
                                //     if(err) throw err;

                                //     console.log('Portfolio complete! Check out index.html to see the output!');
                                // });

// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//    // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => {
//     console.log(profileItem)
//   });

//   console.log('================');

//   //or this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);
