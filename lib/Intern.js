const inquirer = require('inquirer')
const Employee = require('./Employee.js')

const intArr = [
    {
        type: 'input',
        message: "Intern's Name:",
        name: 'name',
    },
    {
        type: 'input',
        message: "Intern's Employee ID:",
        name: 'id',
    },
    {
        type: 'input',
        message: "Intern's Email Address:",
        name: 'email',
    },
    {
        type: 'input',
        message: "Intern's School:",
        name: 'school',
    },
    {
        type: 'list',
        message: 'Add Another Member?',
        choices: ['Engineer', 'Intern', 'No - Finish Setup'],
        name: 'next',
    },
]

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

function addIntern() {
    return inquirer.prompt(intArr)
}

module.exports = {Intern, addIntern};
