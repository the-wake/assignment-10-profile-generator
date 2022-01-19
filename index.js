// const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js')

function init() {
    addMngr()
    // console.log(manager)
    .then((answers) => {
        console.log(projManager);
        switch (answers.proceed) {
            case 'Complete Entry':
                break;
            case 'Add an Engineer':
                addEngi();
                break;
            case 'Add an Intern':
                addIntern();
                break;
        }
    })
}

init();
