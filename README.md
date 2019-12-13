# Team-Profile-Generator
A team generator command line application.
build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

Live site here : https://amira07hafnaoui.github.io/Team-Profile-Generator/output/team.html

## User Story 
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles.

# Usage
1. Clone the repo locally
2. Run npm install to get required npm packages based on the package.json
3. Run using entry point app.js - node app.js
4. Answer the command line prompts
5. Select Exit from the menu when all employees have been entered
6. Open the team.html file to view the output
# Screenshots
![image](https://user-images.githubusercontent.com/55209230/70760103-31c58f80-1d0e-11ea-93c8-2cd959d7b2fc.png)

![image](https://user-images.githubusercontent.com/55209230/70760139-5588d580-1d0e-11ea-8a16-51c90b36e9e4.png)

![image](https://user-images.githubusercontent.com/55209230/70760558-9c2aff80-1d0f-11ea-8d77-09b908589999.png)

## Testing
Jest was used to for running the provided tests.
Use 'npm run test' to run the tests

## Directory structure
directory structure :
lib/           // classes and helper code
output/        // rendered HTML file
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application

## Licence 
MIT.

