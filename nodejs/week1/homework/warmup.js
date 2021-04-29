console.log("inside warmup file");

class circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    const diameter = 2 * this.radius;
    console.log(diameter);
    return diameter;
  }

  getCircumference() {
    const circumference = 2 * 3.14 * this.raduis;
    console.log(circumference);
    return circumference;
  }

  getArea() {
    const area = 3.14 * this.raduis * this.raduis;
    console.log(area);
    return area;
  }
}

const firstCircle = new circle(10);
firstCircle.getDiameter();
firstCircle.getCircumference();
firstCircle.getArea();

const secondeCircle = new circle(8);
secondeCircle.getDiameter();
secondeCircle.getCircumference();
secondeCircle.getArea();

const thirdCircle = new circle(5);
thirdCircle.getDiameter();
thirdCircle.getCircumference();
thirdCircle.getArea();
