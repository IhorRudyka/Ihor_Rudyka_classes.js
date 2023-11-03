class Car {
    constructor(mark, model, country, speed){
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
    increaseSpeed(speedI = 10) {
        return `You have increased your speed on: ${speedI}kmh.  Current speed is:${this.speed + speedI}kmh` 
    }
    decreaseSpeed(speedD = 10) {
        return `You have dicreased your speed on: ${speedD}kmh.  Current speed is:${this.speed - speedD}kmh` 
    } 
}
class Truck extends Car {
    takeWeight(weight){
        console.log(`Truck ${this.mark} ${this.model} can take ${weight}kg`)
    }
}
class Bus extends Car {
    takePeople(people) {
        console.log(`Bus ${this.mark} ${this.model} can take ${people}`)
    }
}
class Transporter extends Car {
    takeCars(cars) {
        console.log(`Transporter ${this.mark} ${this.model} can take ${cars}kg`)
    }
}
