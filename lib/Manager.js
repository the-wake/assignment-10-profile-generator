const inquirer = require('inquirer')
const Employee = require('./Employee.js')

const mngrArr = [
    {
        type: 'input',
        message: "Manager's Name:",
        name: 'name',
    },
    {
        type: 'input',
        message: "Manager's Employee ID:",
        name: 'id',
    },
    {
        type: 'input',
        message: "Manager's Email Address:",
        name: 'email',
    },
    {
        type: 'input',
        message: "Manager's Employee ID:",
        name: 'office',
    },
    {
        type: 'list',
        message: 'Add Another Member?',
        choices: ['Engineer', 'Intern', 'No - Finish Setup'],
        name: 'next',
    },
]

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
    }
    getRole() {
        return 'manager';
    }
    getOfficeNumber() {
        return this.office;
    }
}

function addMngr() {
    inquirer
    .prompt(mngrArr)
    .then((answers) => {
        const projManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.office,
        )
        console.log(projManager);
    })
}

module.exports = [Manager, addMngr()];
