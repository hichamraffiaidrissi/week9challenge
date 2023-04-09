function generateMarkdown(userResponses, userInfo) {

 
  let draftToC = `## Table of Contents`;

  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${userResponses.title}
  
  ## Description 

  ${userResponses.description}
  `

  // License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  
  // Optional Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
  };
  
  
  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;