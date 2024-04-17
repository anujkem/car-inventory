const getLastCar = require('../src/problem2');

const inventory = require('../inventory');


const lastCar = getLastCar(inventory);
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
