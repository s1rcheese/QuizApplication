# Quiz Application 
A Simple Quiz Application. 

# Introduction
This application is written in `Javascript`. 

Credits to - https://www.npmjs.com/package/readline-sync which I'm using for accepting keyboard input from the user in the terminal.

# Currently Implemented Features 
- Able to run in VSC ``Visual Studio Code`` terminal when debugged using ``Node.JS``.

- Four `quiz categories` to choose from.

- Each category contains 5 MCQ `Multiple Choice Questions`.

- Once the last question (question-5) is answered, the program displays a `summary page` which shows all answers given by the users. 

- The user is allowed to `submit the quiz` or to go back to `retry any of the 5 questions`.

- A `navigation` function e.g. Enter `P` to go to previous question, `N` to go to next question (meaning user can choose to skip the question being displayed and come back to answer later). 

- A summary of the correct answers for the user to review.

# Image of how the program roughly looks
![Quiz Application](https://user-images.githubusercontent.com/51396102/65371815-1bbdab00-dc9a-11e9-8f5a-095d1eb948f3.png)

# Getting Started
1. `git clone` this repository.
2. Open `Visual Studio Code`
3. `npm i` to install dependencies.
4. From the menu, choose Debug --> Open Configuration, then select "node.js". Visual Studio Code will then open launch.json, which is the configuration file for all your programs.
----------------------------------------------------------------------------------------------------------------------------------------
![launch.json](https://user-images.githubusercontent.com/51396102/65371982-4e68a300-dc9c-11e9-81c8-18b99723fb5d.png)

5. Add in `"console": "integratedTerminal"` below the `"program": ${file}"`. Now it should look like this.
----------------------------------------------------------------------------------------------------------------------------------------
![changedvers](https://user-images.githubusercontent.com/51396102/65372016-d77fda00-dc9c-11e9-9537-7aea98ad84af.png)


6. Debug the file named `main.js` with `Node.JS`.
7. You're ready!

# Troubleshooting Guide
![Error](https://user-images.githubusercontent.com/51396102/65385240-f8106880-dd5e-11e9-9f63-1b4b7b9f54ee.png)

The error is saying that the path to your code was wrong.

VSCode defines the parent directory of its configuration file ".vscode/launch.json" as "${workspaceRoot}" or "${workspaceFolder}".

So, for example, if you want to run file "myproject/subfolder/main.js", you should configure your "myproject/.vscode/launch.json" as follows: 
"program": "${workspaceRoot}/subfolder/main.js"

Note that configuring 
"program": "${workspaceRoot}/myproject/subfolder/main.js"
is a mistake and will cause error "Attribute 'program' does not exist".

-Visual Example
When the error pops out, click open `launch.json`. You will arrive at here.
![Before](https://user-images.githubusercontent.com/51396102/65385252-28580700-dd5f-11e9-91cd-226482570ae1.png)

After fixing it:
![After](https://user-images.githubusercontent.com/51396102/65385289-9270ac00-dd5f-11e9-9c7d-1a9b2e0abb83.png)

You are good to go!
