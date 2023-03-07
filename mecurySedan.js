//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


let mercuryA28 = new Car.Vehicle("Mercury", "Sedan", "1965", "color", "mileage", 5, 140, 13, 30000);
console.log(mercuryA28.make)

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage, maximumPassengers, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;    
    }

    loadPassengers(num) {
        if (num <= this.maximumPassengers) {
            super.passengers = num;
            return true;
        } else {
            return false;
        }
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    } 


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.checkService()
myCar.start()
myCar.loadPassengers()

console.log(myCar)