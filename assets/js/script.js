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