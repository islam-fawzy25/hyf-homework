//Step 3: Smart-ease - Back to the basics!

//Save a note

const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push({content, id })
}:

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id){
  // your code here
for(let i=0; i< notes.length; i++){ 
 // console.log(notes[i].id)

  if ( notes[i].id == id ){
   return   notes[i]
}else{
  return  'Error'
}
}
}:
const firstNote = getNote(1);
 console.log(firstNote); // {content: 'Pick up groceries', id: 1}
 
 // i don´t know why for loop working only once ?!
 // so if i try to getNote(2) it will give me Error

 // Log out notes

 function logOutNotesFormatted() {
   // your code here
   for(var item in notes){
console.log('The note with id: '+notes[item].id+' has the following note text: '+notes[item].content)
   }
 }:
 
 logOutNotesFormatted(); // should log out the text below
 
 // The note with id: 1, has the following note text: Pick up groceries
 // The note with id: 2, has the following note text: Do laundry