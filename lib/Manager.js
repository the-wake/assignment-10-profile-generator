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
        message: "Manager's Office #:",
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
        return 'Manager';
    }
    getOfficeNumber() {
        return this.office;
    }
}

function addMngr() {
    return inquirer.prompt(mngrArr)
}

module.exports = {Manager, addMngr}
