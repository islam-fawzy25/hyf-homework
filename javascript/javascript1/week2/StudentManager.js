//Studen Manager


const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  // studentName ==' '|| studentName == null
  // down here it is solved the problem and avoid to add space or not name to class
  if( typeof (studentName) != "string"|| studentName ==' '){
    return console.log('Invalid name .. please enter valid name')

  }else if(class07Students.length >=6 && studentName !=='Queen'){
    return console.log("Cannot add more students to class 07.")

}else {
  for (let i = 0; i < class07Students.length; i++) {
    if (studentName === class07Students[i]){
      const response = 'Student'+ studentName +' is already in the class';
      return response;
      
      
      // return console.log('Stuednt '+studentName+' is already in the class')
    }
  }
  class07Students.push(studentName)

 console.log('Student '+studentName +' is added to the class')
}

}
function getNumberOfStudents() {
  // You write code here
  return console.log(class07Students.length)
  
}

addStudentToClass('Islam ');
addStudentToClass('Taliah ');
addStudentToClass('Selim');
addStudentToClass('Islam ');

addStudentToClass('Jack ');
addStudentToClass('Sally ');
addStudentToClass(5);
addStudentToClass(' ');
addStudentToClass();
addStudentToClass('Jack ');
addStudentToClass('Sarah ');
addStudentToClass('Taliah ');
addStudentToClass('Fawzy');

addStudentToClass(' ');
addStudentToClass();

addStudentToClass('Queen');


console.log(class07Students)


getNumberOfStudents()




