console.log("Starting app....");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');




const argv = yargs.argv;
var command = argv._[0];
console.log("Command: ",command);

//prints entire object
// console.log("Yargs", argv);
if (command === "add"){
    notes.addNote(argv.title,argv.body);
}else if(command === "list"){
    notes.getAll();
}else if(command === "read"){
    notes.getNote(argv.title)
}else if (command === "remove"){
    notes.removeNote(argv.title)
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
