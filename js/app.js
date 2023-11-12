class Car {
    constructor(mark, model, country, speed){
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
    increaseSpeed(speedI = 10) {
        this.speed += speedI;
        return this.speed;
    }
    decreaseSpeed(speedD = 10) {
        this.speed -= speedD;
        return this.speed;
    } 
}
class Truck extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takeWeight(weight){
        console.log(`Truck ${this.mark} ${this.model} can take ${weight}kg`)
    }
}
class Bus extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takePeople(people) {
        console.log(`Bus ${this.mark} ${this.model} can take ${people}`)
    }
}
class Transporter extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takeCars(cars) {
        console.log(`Transporter ${this.mark} ${this.model} can carry ${cars} cars`)
    }
}
const truck = new Truck('BelAZ', '75710', 'Belarus', 25);
const bus = new Bus('Daron', 'RM3500', 'USA', 60);
const transporter = new Transporter('Rolfo', 'Arctic', 'Italy', 70);
