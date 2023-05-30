#! /usr/bin/env node 
const readline = require("readline")
const fakeJson = require("./json_parse")

const args = process.argv;


const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestions = () => {
    readlineInterface.question("> ", param => {
        const parsedData = fakeJson(param)
        console.log(parsedData)
        askQuestions()
    });
}

askQuestions()


