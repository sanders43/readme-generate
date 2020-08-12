const fs = require("fs")
const inquirer = require ("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "purpose",
            message: "What is the purpose of your project?"
        }
])};

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./NEWREADME.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            
        })
    })
})
};

// function to initialize program
function init() {

}

// function call to initialize program
//init();
questions()
.then(createMarkdown => {
    return generateMarkdown(createMarkdown)
})
.then(pageReadMe => {
    return writeFile(pageReadMe);
})