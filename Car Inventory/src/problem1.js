function findCarById(inventory, id) {
    let foundCar = null;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            foundCar = inventory[i];
            break;
        }
    }
    return foundCar;
}

module.exports = findCarById;
