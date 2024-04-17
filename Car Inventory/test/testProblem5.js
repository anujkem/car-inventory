const countCarsOlderThanYear = require('../src/problem5');

const inventory = require('../inventory');

const olderThan2000 = countCarsOlderThanYear(inventory);
console.log(`Number of cars older than 2000: ${olderThan2000}`);
