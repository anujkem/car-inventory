function countCarsOlderThanYear(inventory, year = 2000) {  
    // by default year = 2000 if no year is provided
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year < year) {
            count++;
        }
    }
    return count;
}

module.exports = countCarsOlderThanYear;

