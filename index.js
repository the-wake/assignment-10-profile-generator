const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const { Manager, addMngr } = require('./lib/Manager.js');
const { Engineer, addEngi } = require('./lib/Engineer.js');
const { Intern, addIntern} = require('./lib/Intern.js');
const teamGen = require('./page-template.js');

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
        nextQuestion(answers.next);
    })
}

function nextQuestion(next) {
    switch (next) {
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
                nextQuestion(answers.next)
            });
            break;
        case 'Intern':
            addIntern()
            .then((answers) => {
                let projIntern = new Intern (
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school,
                )
                teamArr.push(projIntern)
                nextQuestion(answers.next)
            });
            break;
        case 'No - Finish Setup':
            console.log(`
**Team Generated**\n
------------------------------------------------------\n
            `)
            console.log(teamArr)
            generateTeam(teamArr)
            break;
    }
}

function generateTeam(teamData) {
    var teamHtml = teamGen(teamData)
    fs.writeFile('./dist/team-page.html', teamHtml, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

init();
