
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

// One by one 

async function translateOneByOne() {
    try {
        await moveElement(document.querySelector('ul.marks li:nth-child(1)')
            , { x: 20 - redBoxL, y: 300 - redBoxT }).then(() => {
                console.log("Element red has been moved");
            })
        await moveElement(document.querySelector('ul.marks li:nth-child(2)')
            , { x: 400 - blueBoxL, y: 300 - blueBoxT }).then(() => {
                console.log("Element blue has been moved");
            })
        await moveElement(document.querySelector('ul.marks li:nth-child(3)')
            , { x: 400 - greenBoxL, y: 20 - greenBoxT }).then(() => {
                console.log("Element green has been moved");
            })
    } catch { console.log('Error!!'); }
}
// translateOneByOne()

//All at once 
async function translateAllAtOnce() {
    moveElement(document.querySelector('ul.marks li:nth-child(1)')
        , { x: 20 - redBoxL, y: 300 - redBoxT })
    moveElement(document.querySelector('ul.marks li:nth-child(2)')
        , { x: 400 - blueBoxL, y: 300 - blueBoxT })

    moveElement(document.querySelector('ul.marks li:nth-child(3)')
        , { x: 400 - greenBoxL, y: 20 - greenBoxT })
console.log('All Elements have been moved ');
}
translateAllAtOnce()