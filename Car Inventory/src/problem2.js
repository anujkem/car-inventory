function getLastCar(inventory) {
    let lastCar = null;
    for (let i = inventory.length - 1; i >= 0; i--) {
        lastCar = inventory[i];
        break;
    }
    return lastCar;
}

module.exports = getLastCar;
