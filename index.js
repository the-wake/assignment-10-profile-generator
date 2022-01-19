const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

function init() {
    Manager.addMngr()
    .then((answers) => {
        console.log(answers);
        // Can destructure this
        let projManager = new Manager.Manager (
            answers.name,
            answers.id,
            answers.email,
            answers.office,
        )
        console.log(projManager);
        switch (answers.next) {
            case 'Engineer':
                Engineer.addEngi()
                .then((answers) => {
                    let projEngi = new Engineer.Engineer (
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.gitHub,
                    )
                    console.log(projEngi)
                });
                break;
            case 'Intern':
                Intern.addIntern()
                .then((answers) => {
                    let projIntern = new Intern.Intern (
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.gitHub,
                    )
                    console.log(projIntern);
                });
                break;
            case 'No - Finish Setup':
                break;
        }
    })
}

init();
