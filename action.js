class Car {
    constructor(wheels) {
        this.wheels = wheels;
    }

    drive(direction) {
        return true;
    }
}

function foo(params) {
    // ...
    return true;
}

let maserati = new Car(4);
maserati.wheels = 2;
maserati.drive('left');

foo('hi');

Math.random();