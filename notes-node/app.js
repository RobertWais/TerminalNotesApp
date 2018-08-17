console.log("Starting app....");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');





var command = process.argv[2];
console.log("Command: ",command);

if (command === "add"){
    console.log("Adding new note...")
}else if(command === "list"){
    console.log("Listing all notes...")
}else if(command === "read"){
    console.log("Reading notes...")
}else if (command === "remove"){
    console.log("Remove note")
}else{
    console.log("Command not recognized...")
}






















// // fs.appendFile('greeting.txt', 'testing appending file', function (err) {
// //     if (err){
// //         console.log('Unable to write file')
// //     }
// // });
//
//
//
// // var user = os.userInfo();
// // console.log(user);
// var res = notes.addNote();
// console.log(`We have a ${res}`);
//
// console.log(_.isString("cools"));
// console.log(_.isString("Hello"));
// // console.log(module);
