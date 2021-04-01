//Lets make some art using classes

// Get Canavas element
const canvasEle = document.querySelector("canvas");
const canavasContext = canvasEle.getContext("2d");
canvasEle.width = window.innerWidth;
canvasEle.height = window.innerHeight;


class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.userX = x
        this.userY = y
        this.userR = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }

    draw() {
        canavasContext.beginPath()
        canavasContext.arc(this.userX, this.userY, this.userR, this.startAngle, this.endAngle)
        canavasContext.stroke()
        canavasContext.fillStyle = randomColor() // random color function
        canavasContext.fill()
    }
}
// Creat circle
const firstCircle = new Circle(50, 50, 20, 0, 2 * Math.PI)
firstCircle.draw()
const secondCircle = new Circle(300, 200, 50, 10, 2 * Math.PI)
secondCircle.draw()

// random color 
function randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
}
// Random circles ,sizes, colors, position , radius 
function manyCircles() {
    function xHorizontalRandomPosition() {
        const x = Math.floor(Math.random() * 1200);
        return x
    }
    function yVerticalRandomPosition() {
        const y = Math.floor(Math.random() * 600);
        return y
    }
    function radius() {
        const r = Math.floor(Math.random() * 100);
        return r
    }
    setInterval(() => {
        const randomCircles = new Circle(xHorizontalRandomPosition(),
         yVerticalRandomPosition(), radius(), 0, 2 * Math.PI)
        randomCircles.draw()
    }, 100);
}
//  manyCircles()

//Follow the mouse - optional
canvasEle.addEventListener('mousemove',function myFunction(e) {
    function radius() {
        const r = Math.floor(Math.random() * 70);
        return r
    }
    let x = e.clientX;
    let y = e.clientY;
    const randomCircles = new Circle(x, y, radius(), 0, 2 * Math.PI)
    randomCircles.draw()
  })