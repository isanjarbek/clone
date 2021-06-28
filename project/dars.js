#!/usr/bin/env node
"use strict"
var args = require("minimist")(process.argv.slice(2));

console.log(args);

// printHelp();

function printHelp() {
    console.log("ex1 usage: ")
    console.log(" ex1.js --help")
    console.log("")
    console.log("--help       print this help")
    console.log("")

}



// console.log("Hello world");
// console.log("Oops");

// node-ex1.js>dev 
// ./ex1.js 
// 