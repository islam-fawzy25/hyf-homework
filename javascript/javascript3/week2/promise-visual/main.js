
// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved.






async function translateOneByOne() {
    try {
        await moveElement(document.querySelector('ul.marks li:nth-child(1)')
            , { x: 20, y: 300 }).then(() => {
                console.log("Element red has been moved");
            })
        await moveElement(document.querySelector('ul.marks li:nth-child(2)')
            , { x: 400, y: 300 }).then(() => {
                console.log("Element blue has been moved");
            })
        await moveElement(document.querySelector('ul.marks li:nth-child(3)')

            , { x: 400, y: 20 }).then(() => {
                console.log("Element green has been moved");
            })
            
            await moveElement(document.querySelector('span')

            , { x: 100, y: 100 }).then(() => {
                console.log("Element green has been moved");
            })

    } catch { console.log(); }

}
translateOneByOne()

