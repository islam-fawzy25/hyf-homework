console.log("inside warmup file");


class circle {
    constructor(radius){
        this.radius=radius
    }
    getDiameter(){    
    const diameter = 2 * this.radius
    console.log(diameter)
     return diameter  ;
    }
    getCircumference(){
        return console.log(2 * 3.14 * this.raduis);
    }
    getArea(){
        return console.log(3.14 * this.raduis * this.raduis);
    }
}


const firstCircle= new circle(10)
firstCircle.getDiameter()
firstCircle.getCircumference()
firstCircle.getArea()


const secondeCircle= new circle(8)
secondeCircle.getDiameter()
secondeCircle.getCircumference()
secondeCircle.getArea()


const thirdCircle= new circle(5)
thirdCircle.getDiameter()
thirdCircle.getCircumference()
thirdCircle.getArea()
