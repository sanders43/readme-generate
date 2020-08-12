// function to generate markdown for README
const generateMarkdown = data => {
  return `# <p>${data.title}<p>

## ${data.purpose}
## ${data.installation}
## ${data.usage}
## ${data.credits}
## ${data .liscense}


`;
}

module.exports = generateMarkdown;
