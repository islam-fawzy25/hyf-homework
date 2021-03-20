
// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.
// get  elements  
const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
// get random position where the element to calculat the right target 
const redBoxL = redBox.offsetLeft
const redBoxT = redBox.offsetTop
const blueBoxL = blueBox.offsetLeft
const blueBoxT = blueBox.offsetTop
const greenBoxL = greenBox.offsetLeft
const greenBoxT = greenBox.offsetTop

// Circels target 
const redTarget = { x: 20 - redBoxL, y: 300 - redBoxT }
const blueTarget = { x: 400 - blueBoxL, y: 300 - blueBoxT }
const greenTarget = { x: 400 - greenBoxL, y: 20 - greenBoxT }

// One by one 
async function translateOneByOne() {
    try {
        await moveElement(redBox, redTarget)
            .then(() => { console.log("Element red has been moved"); })
        await moveElement(blueBox, blueTarget)
            .then(() => { console.log("Element blue has been moved"); })
        await moveElement(greenBox, greenTarget)
            .then(() => { console.log("Element green has been moved"); })
    } catch { console.log('Error!!'); }
}
//translateOneByOne()

//All at once with async
async function translateAllAtOnce() {
   try{
    moveElement(redBox, redTarget)
    moveElement(blueBox, blueTarget)
    moveElement(greenBox, greenTarget)
    console.log('All Elements have been moved ');
   }catch{console.log('Error!!');}
    
}
//translateAllAtOnce()


// All at once promise.all
// const promisAllAtOnce = Promise.all([
//     moveElement(redBox, redTarget),
//     moveElement(blueBox, blueTarget),
//     moveElement(greenBox, greenTarget)
// ])
    // .then(() => console.log('All Elements have been moved'))
    // .catch(() => console.log('Error!!'))

    // moveElement functions inside promise.all and i did not call promise.all and
    // it works  already , how can i controll this ,i mean 
    // no circle moves before i call promise without using function  ?!