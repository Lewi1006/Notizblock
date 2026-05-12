// display notes:
// I need notes to display --> in an array

let notes = ['clean kitchen','book train ticket' ];

// define where notes are displayed
// when are notes displayed

function renderNotes(){
let contentRef = document.getElementById('content');

contentRef.innerHTML = ""; 

for(let i = 0; i < notes.length; i++){
    const note = notes[i];
    contentRef.innerHTML += getNoteTemplate(note);

}
}

// add notes
function getNoteTemplate(note){
    return `<p>+ ${note}</p>`;
}

// delete notes

// archive notes