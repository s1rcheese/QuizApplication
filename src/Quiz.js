const MCQ = require('./MCQ'); 
const input = require('readline-sync'); 
class Quiz {
    constructor() {
        this.questionPool = []; 
        this.selectedCategoryArray = []; 
        this.name; // to store user name
        this.categoryArray = ["Computing", "Mathematics", "Chemistry", "Geography"];
        this.questionPool.push(new MCQ("Question 1:\nWhat is RAM?", ["Random Access Memory", "A kind of Sheep", "Roughly force something into place", "None of the above"], 0, 1)); //1st question
        this.questionPool.push(new MCQ("Question 2:\nWhich of the following is true about solid state drive?", ["More expensive than hard drives", "SSDs use flash memory without moving parts and has faster access times", "Most often found in mobile devices and also found in high-performance desktops and servers", "All of the above"], 3, 1)); //2nd question
        this.questionPool.push(new MCQ("Question 3:\nWhat component of the computer provides it with a MAC address?", ["motherboard", "NIC", "CPU", "BIOS"], 1, 1)); //3rd question
        this.questionPool.push(new MCQ("Question 4:\nThe process where in the processor constantly checks the I/O device status flags is called ______________.", ["interrupts", "wait", "serial monitor", "polling"], 3, 1)); //4th question
        this.questionPool.push(new MCQ("Question 5:\nWhich one of the following CPU registers holds the address of the instructions (instructions in the program stored in memory) to be executed next?", ["IR (Instruction Register)", "PC (Program Counter)", "R0 (General Purpose Register)", "SP (Stack Pointer)"], 1, 1)); //5th question

        this.questionPool.push(new MCQ("Question 1:\nFind the sum of 111 + 222 + 333.", ["700", "666", "10", "100"], 1, 2));
        this.questionPool.push(new MCQ("Question 2:\nSubtract 457 from 832.", ["375", "57", "376", "970"], 0, 2));
        this.questionPool.push(new MCQ("Question 3:\n50 times 5 is equal to:", ["2500", "505", "500", "None of these"], 3, 2));
        this.questionPool.push(new MCQ("Question 4:\nSolve : 200 - (96 / 4).", ["105", "176", "26", "16"], 1, 2));
        this.questionPool.push(new MCQ("Question 5:\nFind the product of 72 x 3.", ["216", "7230", "106", "372"], 0, 2));

        this.questionPool.push(new MCQ("Question 1:\nWhat is the first element on the periodic table?", ["Sodium", "Nitrogen", "Neon", "Hydrogen"], 3, 3));
        this.questionPool.push(new MCQ("Question 2:\nWhat is the centre of an atom called?", ["Proton", "Nucleus", "Electron", "Neutron"], 1, 3));
        this.questionPool.push(new MCQ("Question 3:\nWhat is the main gas found in the air we breathe?", ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], 1, 3));
        this.questionPool.push(new MCQ("Question 4:\nAtoms of the same chemical element that have different atomic mass are known as?", ["Isotopes", "Proton", "Electron", "Hydrogen"], 0, 3));
        this.questionPool.push(new MCQ("Question 5:\nOne of the essential minerals in the human body is salt. How much salt (NaCl) is in the average adult human body?", ["1 kilogram", "500 grams", "250 grams", "practically none"], 1, 3));

        this.questionPool.push(new MCQ("Question 1:\nWhat is Earth's second largest continent by surface size?", ["Africa", "North America", "South America", "Europe"], 0, 4));
        this.questionPool.push(new MCQ("Question 2:\nWhat is the highest mountain on Earth (from sea level to the top)?", ["Matterhorn", "Mount Everest", "K2", "Kilimanjaro"], 1, 4));
        this.questionPool.push(new MCQ("Question 3:\nWhat country is the largest in South America by surface area?", ["Colombia", "Argentina", "Brazil", "Peru"], 2, 4));
        this.questionPool.push(new MCQ("Question 4:\nWhat is Earth's second largest continent by population?", ["Africa", "North America", "Europe", "South America"], 0, 4));
        this.questionPool.push(new MCQ("Question 5:\nWhat is Earth's largest ocean by surface size?", ["Arctic", "Pacific", "Atlantic", "Indian"], 1, 4));
    }

    getQuestions(quizCategory) { 
        for (let i = 0; i < this.questionPool.length; i++) {
            if (this.questionPool[i].category === quizCategory) {
                this.selectedCategoryArray.push(this.questionPool[i]);
            }
        }
        return this.selectedCategoryArray;
    }
    
    chooseCategory() { //Method to choose quiz Category
        console.log("-= Welcome to Quiz Application =-");
        this.name = input.question("Please enter your name: ");
        let validInput = false;
        let quizCategory;
        while (!validInput) { 
            quizCategory = input.question("\n" + "Hi " + this.name + ", please choose the quiz category you would like to attempt: \n(1) Computing\n(2) Mathematics\n(3) Chemistry\n(4) Geography\n>>");
            
           if (quizCategory === "1" || quizCategory === "2" || quizCategory === "3" || quizCategory === "4"){
                validInput = true;
                console.log(`[${this.categoryArray[quizCategory - 1]}] Category Selected.`);
           }
            
           else {
                console.log("Please choose your quiz category again.");
                continue;
            }

            return parseInt(quizCategory);
    }
}
   
    quizResults(){
      let scoreCount = 0;
      for (let i =0 ; i < this.selectedCategoryArray.length; i++){
        if (this.selectedCategoryArray[i].userAnswer-1 == this.selectedCategoryArray[i].answer){
          scoreCount+=1;
        }
      }
      return scoreCount;
}
}
module.exports = Quiz; 