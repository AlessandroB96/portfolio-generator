const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js')
const { writeFile, copyFile } = require('./utils/generate-site.js');

const promptUser = () => {

return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name (Required)?',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
            } 
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username (Required)',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your Github username!')
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'confirmAbout',
          message: 'Would you like to enter some information about yourself for an "About" section?',
          default: true
        },
        {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:',
          when: ({ confirmAbout}) => confirmAbout
        }
      ]);
};

const promptProject = portfolioData => {

    console.log(`
  =================
  Add a New Project
  =================
  `);
  
  if (!portfolioData.projects) {
        portfolioData.projects = [];
    }


    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
              } else {
                console.log('Please enter the name of your project!');
                return false;
              } 
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
              } else {
                console.log('Please enter a description of the project!');
                return false;
              } 
          }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
              } else {
                console.log('Please enter the link to your Github repository!');
                return false;
              } 
          }
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
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
          } else {
            return portfolioData;
          }
        });
  };

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });


//const profileDataArgs = process.argv.slice(2, process.argv.length);

//const [name1, github] = profileDataArgs;

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
