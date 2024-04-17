function getBMWAndAudiCars(inventory) {
    const bmwAndAudi = [];
    const allowedMakes = ['BMW', 'Audi'];
    for (let i = 0; i < inventory.length; i++) {
        if (allowedMakes.includes(inventory[i].car_make)) {
            bmwAndAudi.push(inventory[i]);
        }
    }
    return bmwAndAudi;
}

module.exports = getBMWAndAudiCars;
