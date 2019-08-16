'use strict';
class Ship {
    constructor(type, capacity, weight, engineStatus) {
        this.type = type;
        this.capacity = capacity;
        this.weight = weight;
        this._engineStatus = engineStatus;
    }

    get engineStatus() {
        return `The ${this.type} engine status is ${this._engineStatus}`
    }

    set engineStatus(engineStatus) {
        this._engineStatus = engineStatus;
    }

    engineStart() {
        this.engineStatus = 'on'
        console.log(`${this.type} engine has been started`)
    }

    engineStop() {
        this.engineStatus = 'off'
        console.log(`${this.type} engine has been stopped`)
    }


}

class Motorboat extends Ship {
    constructor(capacity, weight, engineStatus) {
        super('Motorboat', capacity, weight, engineStatus);
    }
}

class Sailboat extends Ship {
    constructor(capacity, weight, engineStatus) {
        super('Sailboat', capacity, weight, engineStatus);
    }
}

class CruiseShip extends Ship {
    constructor(capacity, weight, engineStatus) {
        super('Cruise Ship', capacity, weight, engineStatus);
    }
}


const motorboat = new Motorboat(4, 500, 'off')
motorboat.engineStart();
motorboat.engineStop();
console.log(motorboat.engineStatus)