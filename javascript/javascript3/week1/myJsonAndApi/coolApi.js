fetch('https://api.thecatapi.com/v1/images/search?breed_id=beng')
.then(response => response.json())
.then(item =>{
    console.log(item);
})
// it is an array /
// inside it object with deffrent keys with deffrent values  
//The objects contain five fields, breed, being a list of objects 
//that match the search query, and id, url, width and height that ..."