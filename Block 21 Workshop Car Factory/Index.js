class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription = () => {
    return "This Car Vrooms!";
  };
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription = () => {
    return `The ${this.year} ${this.make} ${this.model} has a range of ${this.range} miles.`;
  };
}

const eCar = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log("Electric Car Class\n");
console.log(`Make: ${eCar.make}`);
console.log(`Model: ${eCar.model}`);
console.log(`Year: ${eCar.year}`);
console.log(`Range: ${eCar.range}`);
console.log(`Description: ${eCar.getDescription()}`);
console.log("\n");
