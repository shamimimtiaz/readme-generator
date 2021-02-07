
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />


  ## Description
  ${data.description}

  ## Table of Contents
  [deployed-link](#deployed-link)
  [Installation](#installation)
  [Instruction](#instruction)
  [Languages](#languages)
  [License](#liscense)
  [Usage](#usage)
  [Feature](#feature)
  [Contribution](#contribution)
  [Questions](#questions)

  
  ## Deployed-link if any
  ${data.deployedlink}
  
  ## Installation
  ${data.installation}

  ## Instruction
  ${data.instructions}

  ## Languages used
  ${data.languages}


  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 

  ## Usage
  ${data.usage}

  ## Features
  ${data.feature}

  ## Contribution
  ${data.contribution}


  ## Contact Information 
  **Contact Name** ${data.name}
  **Github Username:** ${data.github}
  **Github Profile:** www.github.com/${data.github}/
  
  **Email Address:** ${data.email}

  `;
}
  
  module.exports = generateMarkdown;
  
