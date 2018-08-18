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
    var note = notes.addNote(argv.title,argv.body);

    if (note){
        console.log(`Message Saved ${note.title}`)

    }else{
        console.log("Title already exists")
    }


}else if(command === "list"){
    var allNotes = notes.getAll();

    for(let i = 0; i < allNotes.length; i++){
        console.log("Title: ", allNotes[i].title);
        console.log("Body: ",allNotes[i].body);
    }
}else if(command === "read"){
    var note = notes.getNote(argv.title);

    if (note[0]){
        console.log("Title: ", note[0].title);
        console.log("Body: ", note[0].body);
    }else{
        console.log("Note does not exist")
    }
}else if (command === "remove"){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note did not exist'
    console.log(message)
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
