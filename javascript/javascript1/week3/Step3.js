//Step 3: Smart-ease - Back to the basics!

//Save a note

const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push({content, id })
};

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id){
  // your code here
 for(let i=0; i< notes.length; i++){ 
   if ( notes[i].id == id ){
    return   notes[i]
   }
  }
  return 'Error'
};
const firstNote = getNote(1);
 console.log(firstNote); // {content: 'Pick up groceries', id: 1}

 // Log out notes

 function logOutNotesFormatted() {
   // your code here
   for(var item in notes){
   console.log('The note with id: '+notes[item].id+' has the following note text: '+notes[item].content)
   }
 };
 
 logOutNotesFormatted(); // should log out the text below
 
 // The note with id: 1, has the following note text: Pick up groceries
 // The note with id: 2, has the following note text: Do laundry

/*
 down here it is idea if guest forget number of note and 
 want to finde note with searchingby one word from this note 
  WE worked together with Hanieh 
 */
 function getWord(word) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].content.indexOf(word) != - 1) {
            return `You are looking for id:${notes[i].id} ${notes[i].content}`;
        };
    }
};
let Note = getWord('up');
console.log(Note); 


function getWord(word) {
    let isIncluded = false;
    for (let i = 0; i < notes.length; i++) {
        let str = notes[i].content.split(" ");
        if (str.includes(word)) {
            console.log(`You are looking for id:${notes[i].id} ${notes[i].content}`);
            isIncluded = true;
        }
    }
    if (isIncluded === false) {
        console.log(`You do not have any task including ${word}`);
    }
}
getWord("laundry");
getWord("up");





// down here third project to solve the idea 

 //var str = [{content:"This is an interesting sentence.",id:20},{}];
 //var response = notes[i].content.split(" ");

 //console.log(response)
 /* Expected result:
   This,is,an,interesting,sentence.
   (Note: returns array)
   */
/*
  function getNote(content){
    // your code here

   for(let i=0; i< notes.length; i++){ 
    var response = notes[i].content.split(" ");
console.log(response)
     if ( notes[i].content == first){

      return   notes[i]
     }
    }
    return 'Error'
  };
  const first = getNote('lundry');

   console.log(first); // {content: 'Pick up groceries', id: 1}
   */
  