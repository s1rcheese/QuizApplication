# Quiz Application 
A Simple Quiz Application (Vanilla JS). 

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

# Image of how the program roughly looks
![Quiz Application](https://user-images.githubusercontent.com/51396102/65371815-1bbdab00-dc9a-11e9-8f5a-095d1eb948f3.png)

# Getting Started
1. `git clone` this repository.
2. Open `Visual Studio Code`
3. From the menu, choose Debug --> Open Configuration, then select "node.js". Visual Studio Code will then open launch.json, which is the      configuration file for all your programs.

![launch.json](https://user-images.githubusercontent.com/51396102/65371982-4e68a300-dc9c-11e9-81c8-18b99723fb5d.png)

4. Add in `"console": "integratedTerminal"` below the `"program": ${file}"`. Now it should look like this.

![changedvers](https://user-images.githubusercontent.com/51396102/65372016-d77fda00-dc9c-11e9-9537-7aea98ad84af.png)

5. Debug the file named `main.js` with `Node.JS`.
6. You're ready!
