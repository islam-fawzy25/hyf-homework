// Home work / week2
//Flight booking fullname function
/*
function getFullname( firstname, surname ){
return firstname + ' '+ surname;
}

getFullname();

let fullname1=getFullname("Benjamin", "Hughes");

let fullname2 =getFullname("Benjamin", "Hughes");

console.log(fullname1);
console.log(fullname2);
*/

//Formal fullname
/*
function getFullname( firstname, surname ,  useFormalName  ){
if(useFormalName == true){ 
    return   'Lord ' +firstname + ' '+ surname;
    }else{
        return firstname + ' '+ surname;
    }
}
    getFullname('','');
    
    let fullname1 = getFullname("Benjamin", "Hughes", true);
    
    let fullname2 =getFullname("Benjamin", "Hughes", false );
    
    console.log(fullname1);
    console.log(fullname2);
    */
    // Formal woman name


    function getFullname( firstname, surname ,  useFormalName  ) {
        if(useFormalName == 'man' ){ 
            return   'Lord ' +firstname + ' '+ surname;
            }else if(useFormalName == 'woman'){
                return 'Lady ' +firstname + ' '+ surname;
            }
            else{
                return firstname + ' '+ surname;

        }
    }
            getFullname();
            
            let fullname1 = getFullname("Benjamin", "Hughes", "man");
            let fullname2 =getFullname("Sarah", "Hughes" , "woman");
            let fullname3 =getFullname("Sarah", "Hughes" , "");

            console.log(fullname1);
            console.log(fullname2);
            console.log(fullname3)
            // Global scope
const globalScopeVariable = 'globalScopeVariable';
function outerFunction() {
    // function scope A
    console.log(globalScopeVariable);
    const outerFunctionScope = 'outerFunctionScope';

    function innerFunction() {
        // Function scope B
        console.log(globalScopeVariable);
        console.log(outerFunctionScope);
        
        const innerFunctionScope = 'innerFunctionScope';
    }

    console.log(innerFunctionScope);

   innerFunction();
}

outerFunction();


if (true) {
    const blockScope = 'blockScope';
}

console.log(blockScope)

// Home work / week2
//Flight booking fullname function
/*
function getFullname( firstname, surname ){
return firstname + ' '+ surname;
}

getFullname();

let fullname1=getFullname("Benjamin", "Hughes");

let fullname2 =getFullname("Benjamin", "Hughes");

console.log(fullname1);
console.log(fullname2);
*/

//Formal fullname
/*
function getFullname( firstname, surname ,  useFormalName  ){
if(useFormalName == true){ 
    return   'Lord ' +firstname + ' '+ surname;
    }else{
        return firstname + ' '+ surname;
    }
}
    getFullname('','');
    
    let fullname1 = getFullname("Benjamin", "Hughes", true);
    
    let fullname2 =getFullname("Benjamin", "Hughes", false );
    
    console.log(fullname1);
    console.log(fullname2);
    */
    // Formal woman name
/* i add another option to useFormalName for woman and another if that´s it  */
    
function getFullname( firstname, surname ,  useFormalName  ) {
    if(useFormalName == 'man' ){ 
        return   'Lord ' +firstname + ' '+ surname;
        }else if(useFormalName == 'woman'){
            return 'Lady ' +firstname + ' '+ surname;
        }
        else{
            return firstname + ' '+ surname;

    }
}
        getFullname();
        
        let fullname1 = getFullname("Benjamin", "Hughes", "man");
        let fullname2 =getFullname("Sarah", "Hughes" , "woman");
        let fullname3 =getFullname("Sarah", "Hughes" , "no");

        console.log(fullname1);
        console.log(fullname2);
        console.log(fullname3);