const addBtn = document.getElementById('addBtn');
const main = document.querySelector('#main');

addBtn.addEventListener('click', function(){
addNote();
})

const addNote = (text = "") => {
    const note = document.createElement("note");
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool">
      <i class="save fas fa-save"></i>
      <i class="trash fas fa-trash"></i>
  </div>  
  <textarea>${text}</textarea>`

  note.querySelector('.trash').addEventListener('click',function(){
    note.remove()
  })

//   ye note save aur remove krne waale addNote function mei kyo hai/

  note.querySelector('.save').addEventListener('click', function(){
    saveNote();
  })

  main.appendChild(note);



}

const saveNote = () =>{
    const notes = document.querySelectorAll('.note textarea');
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(data))
}
(
function (){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    lsNotes.forEach(
        (lsNote) => {
            addNote(lsNote);
        }
    )
}
)()