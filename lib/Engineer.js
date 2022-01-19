const inquirer = require('inquirer')
const Employee = require('./Employee.js')

const engiArr = [
    {
        type: 'input',
        message: "Engineer's Name:",
        name: 'name',
    },
    {
        type: 'input',
        message: "Engineer's Employee ID:",
        name: 'id',
    },
    {
        type: 'input',
        message: "Engineer's Email Address:",
        name: 'email',
    },
    {
        type: 'input',
        message: "Engineer's GitHub Username:",
        name: 'gitHub',
    },
    {
        type: 'list',
        message: 'Add Another Member?',
        choices: ['Engineer', 'Intern', 'No - Finish Setup'],
        name: 'next',
    },
]

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;
    }
    getRole() {
        return 'Engineer';
    }
    getGitHub() {
        return this.gitHub;
    }
}

function addEngi() {
    return inquirer.prompt(engiArr);
}

module.exports = {Engineer, addEngi};
