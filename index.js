#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter the sentence to find the no of words in it:"
    }]);
let sentenceToArr = (answer.sentence).trim();
let wordCount = 0;
sentenceToArr = (answer.sentence).split(" ");
for (let i = 0; i < sentenceToArr.length; i++) {
    wordCount++;
}
console.log(wordCount);
