# Team Profile Generator

## Description
This is a back-end team profile generator run via the command line.

## Installation
This application requires both fs and inquirer. To install, run the following in the command line:
```
npm i
```

## Usage
To use the team profile generator, install Node. Then open the application's parent directory in the terminal and run:
```
node index.js
```

When the application runs, the user will be prompted to add the project Manager's name, employee ID, email address, and office number. Once these have been entered, the user will be given the opportunity to add an Enginner or an to the project. Different types of team members will take slighly different information.

At the end of each entry, the user will be asked if they wish to add another team member, taking them through the process of adding a new Engineer or Intern, or if they're finished with entries.

Once the user is finished, the script will use the *fs.writeFile* method to render an HTML file with the collected data in the /dist directory. The HTML file will link to a CSS sheet in the same directory.

[Click for a video demonstrating usage and functionality.](https://user-images.githubusercontent.com/56139228/150442241-aa7a447e-867e-4bbe-bb45-37f397bebfd2.mp4)

## Tools Used
* JavaScript
* Node.js
* NPM
* Inquirer
* fs
* GitHub
* GitBash
* Video captured with screencastify
* Coded in VS Code

## Future Functionality
* Fill later
