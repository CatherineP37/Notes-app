let notes = []
const displayAddInput = document.querySelector('.display-add-input');
const addInputContainer = document.querySelector('.add-input-container');
const addInput = document.getElementById('add_input');
const editInputContainer = document.querySelector('.edit-input-container');
const editInput = document.getElementById('edit_input');
const editButton = document.getElementById('edit_button');
const notesContainer = document.getElementById('notes_container');

function addNote() {
  displayAddInput.style.display = 'none';
  let addInputValue = addInput.value;
  if(addInputValue) {
    notes.push(addInputValue);
    displayNotes();
    addInput.value = '';
    addInputContainer.style.display = 'none';
    displayAddInput.style.display = 'block';
  } 
}

function deleteNote(i) {
  notes.splice(i, 1);
  displayNotes();
}

function displayNotes() {
  noteList.innerHTML = null;
  notes.forEach((note, i) => {
     const container = document.createElement('div');
    container.className = 'note-container';
    const p = document.createElement('p');
    p.className = 'note-content';
    p.textContent = note;
    container.append(p);
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'EDIT';
    editButton.onclick = () => editNote(i, note);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'DELETE';
    deleteButton.onclick = () => deleteNote(i);   
    buttonContainer.append(editButton);
    buttonContainer.append(deleteButton);
    container.append(buttonContainer);
    noteList.append(container);
  })  
}

function editNote(i, note) {
  addInputContainer.style.display = 'none';
  editInputContainer.style.display = 'block';
  let editInput = document.getElementById('edit_input')
  editInput.value = note;
  document.getElementById('edit_button').onclick = () => {
    let editedNote = editInput.value;
    if(editedNote) {
      notes.splice(i, 1, editedNote);
      editInputContainer.style.display = 'none';    
      displayNotes();
    }    
  }  
}

function openAddContainer() {
  addInputContainer.style.display = 'flex';  
}

function closeAddContainer() {
 addInputContainer.style.display = 'none';
}

function closeEditContainer() {
  editInputContainer.style.display= 'none';
}

document.addEventListener("DOMContentLoaded", displayNotes)