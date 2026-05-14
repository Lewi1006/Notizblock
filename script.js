// display notes:
// I need notes to display --> in an array

let notes = ['clean kitchen','book train ticket' ];

// trash array
let trashNotes = [];


// permanently delete from trash
let permanentlyDeleted = [];

// define where notes are displayed --> render notes in content div
// when are notes displayed

function renderNotes(){
let contentRef = document.getElementById('content');

contentRef.innerHTML = ""; 

for(let i = 0; i < notes.length; i++){
    contentRef.innerHTML += getNoteTemplate(i);
}
}



// function for trash --> render notes into trash-content div
function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for(let j = 0; j < trashNotes.length; j++){
        trashContentRef.innerHTML += getTrashNoteTemplate(j);
    }
}


// permanently delete note from trash function
function renderPermanentlyDeleted(){
    let permanentlyDeletedRef = document.getElementById('permanently_deleted');
    permanentlyDeletedRef.innerHTML = "";

    for(let k = 0; k < permanentlyDeleted.length; k++){
        permanentlyDeletedRef.innerHTML += getPermanentlyDeletedTemplate(j);
    }
}

// add notes
function getNoteTemplate(i){
    return `<p>+ ${notes[i]}  <button onclick="pushNoteToTrash(${i})">x</button> </p>`;
}

// add to trash 
function getTrashNoteTemplate(j){
    return `<p> + ${trashNotes[j]}<button onclick ="permanentlyDelete(${j})">x</button> </p>`;
}

// permanently delete
function getPermanentlyDeletedTemplate(k){
    return `<p> + ${permanentlyDeleted[k]}<button onclick ="permanentlyDelete(${k})">x</button> </p>`;
}


// add notes input field --> user defines input
// read input
// save input --> push input to notes array
// display input

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;  

    notes.push(noteInput);

    renderNotes();
    noteInputRef.value = "";
}




// push notes to trash
// which note must be deleted
// when must the note be deleted 
// update displayed notes
 
function pushNoteToTrash(i){
     let trashNote = notes.splice(i, 1);
     trashNotes.push(trashNote); 
     renderNotes(); 
     renderTrashNotes();
}

// permanently delete note 

function permanentlyDelete(k){
    let deletedNote = trashNotes.splice(k, 1);
    permanentlyDeleted.push(deletedNote);
    renderTrashNotes();
    renderPermanentlyDeleted();
}

// archive notes