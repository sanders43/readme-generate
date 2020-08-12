// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

## Purpose/Goal
### ${data.purpose} 
## Installation
### ${data.installation}
## Usage
### ${data.usage}
## Credits
### ${data.credits}
## License
### ${data .license}


`;
}

module.exports = generateMarkdown;
