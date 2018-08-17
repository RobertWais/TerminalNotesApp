console.log("Starting notes.js");


module.exports.adNote = () => {
    console.log("Function called")
    return 'New Note'
};

module.exports.addNote = function () {
    console.log("New function called")
    return 'New Updated Note'
};

