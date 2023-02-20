// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) { //this will give the badge of the licence selected
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    default:
      return "None";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markdown = 
  `
  # ${data.title} ${licenseBadge(data.license)}

  ## Description
  ${data.description}

  ## URL
  ${data.deploymentURL}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How-to-Contribute](#how-to-contribute)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ![alt text](assets/images/${data.screenshot})

  ## Credits
  ${data.credits}

  ## License
  ${licenseBadge(data.license)}

  ## How-to-Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  Github: <${data.github}> \n 
  Contact: <${data.email}>
`;

  return markdown;
}

module.exports = generateMarkdown;

