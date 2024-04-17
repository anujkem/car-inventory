const getBMWAndAudiCars = require('../src/problem6');

const inventory = require('../inventory');

const bmwAndAudi = getBMWAndAudiCars(inventory);
console.log(JSON.stringify(bmwAndAudi));
