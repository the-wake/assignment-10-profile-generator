const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const { Manager, addMngr } = require('./lib/Manager.js');
const { Engineer, addEngi } = require('./lib/Engineer.js');
const { Intern, addIntern} = require('./lib/Intern.js');
const generator = require('./page-template.js');

var teamArr = [];

function init() {
    addMngr()
    .then((answers) => {
        let projManager = new Manager (
            answers.name,
            answers.id,
            answers.email,
            answers.office,
        )
        teamArr.push(projManager);
        switch (answers.next) {
            case 'Engineer':
                addEngi()
                .then((answers) => {
                    let projEngi = new Engineer (
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.github,
                    )
                    teamArr.push(projEngi)
                });
                break;
            case 'Intern':
                addIntern()
                .then((answers) => {
                    let projIntern = new Intern (
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.github,
                    )
                    teamArr.push(projIntern);
                });
                break;
            case 'No - Finish Setup':
                console.log(teamArr);
                // run generateTeam() to create the team object.
                // use fs.write to generate HTML with the return of the 'team' module export.
                break;
        }
    })
}

init();
