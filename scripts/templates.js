
// add notes 
function getNoteTemplate(i){ 
    return `
    <div class ="note-card">
        <h3>${notesTitles[i]}</h3>
        <p>${notes[i]}</p>
        <div>
        <button onclick="pushNoteToTrash(${i})">x</button>

        </div>
    </div>
    `
    // return `<p>+ title: ${notesTitles[i]} --> ${notes[i]} <button onclick="pushNoteToTrash(${i})">x</button> </p>`;
}

// add to trash 
function getTrashNoteTemplate(j){
    return `
     <div class ="note-card">
        <h3>${trashNotesTitles[j]}</h3>
        <p>${trashNotes[j]}</p>
        <div>
        <button onclick ="permanentlyDelete(${j})">x</button>
        </div>
    </div>
    `
}

// permanently delete
function getPermanentlyDeletedTemplate(k){
    return `
     <div class ="note-card">
        <h3>${permanentlyDeleted[k]}</h3>
        <p>${permanentlyDeleted[k]}</p>
        <div>
        <button onclick ="permanentlyDelete(${k})">x</button> 
        </div>
    </div>
    `
}