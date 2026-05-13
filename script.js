// display notes:
// I need notes to display --> in an array

let notes = ['clean kitchen','book train ticket' ];

// trash
let trashNotes = [];

// define where notes are displayed
// when are notes displayed

function renderNotes(){
let contentRef = document.getElementById('content');

contentRef.innerHTML = ""; 

for(let i = 0; i < notes.length; i++){
    contentRef.innerHTML += getNoteTemplate(i);
}
}



// function for trash
function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for(let j = 0; j < trashNotes.length; j++){
        trashContentRef.innerHTML += getNoteTemplate(j);
    }
}

// add notes
function getNoteTemplate(i){
    return `<p>+ ${notes[i]}  <button onclick="deleteNote(${i})">x</button> </p>`;
}

// add notes
// input field --> user defines input
// read input
// save input --> add input to notes array
// display input

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;  

    notes.push(noteInput);

    renderNotes();
    noteInputRef.value = "";
}




// delete notes
// which note must be deleted
// when must the note be deleted 
// update displayed notes
 
function deleteNote(i){
     notes.splice(i, 1);
     renderNotes(); 
}
// archive notes