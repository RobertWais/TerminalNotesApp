const fs = require('fs');


var fetchNotes = () =>  {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    }catch(e){
        //if fails it will create fill automatically
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => {
        return note.title === title
    });

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();

    var findNotes = notes.filter( (note) => {
        return note.title === title
    });

    return findNotes
};

var removeNote = (title) => {
    var notes = fetchNotes();

    var filteredNotes = notes.filter((note) => {
        return note.title !== title
    });
    saveNotes(filteredNotes);

    return notes.length != filteredNotes.length
};



module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote
};
