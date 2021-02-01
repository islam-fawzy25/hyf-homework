


const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  // Write some code here
for (let i = 0; i < names.length; i++) {
    if(nameToRemove === names[i]){
        
        names.splice(names.indexOf (nameToRemove),1)
        break
    }
}


// Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


