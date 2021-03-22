//Lets make some art using classes

// Get Canavas element
const canvasEle = document.querySelector("canvas");
const c = canvasEle.getContext("2d");

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
        c.beginPath()
        c.arc(this.userX, this.userY, this.userR, this.startAngle, this.endAngle)
        c.stroke()
        c.fillStyle = randomColor() // random color function
        c.fill()
    }
}
// Creat circle
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI)
c1.draw()
const c2 = new Circle(300, 200, 50, 10, 2 * Math.PI)
c2.draw()

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
    function x() {
        const x = Math.floor(Math.random() * 300);
        return x
    }
    function y() {
        const y = Math.floor(Math.random() * 300);
        return y
    }
    function r() {
        const r = Math.floor(Math.random() * 30);
        return r
    }
    setInterval(() => {
        const randomCircles = new Circle(x(), y(), r(), 0, 2 * Math.PI)
        randomCircles.draw()
    }, 100);
}
manyCircles()