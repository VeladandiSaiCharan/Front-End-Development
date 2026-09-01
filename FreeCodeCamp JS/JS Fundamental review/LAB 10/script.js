const inventory = [];

function findProductIndex(name) {
    const productName = name.toLowerCase();

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === productName) {
            return i;
        }
    }

    return -1;
}

function addProduct(product) {
    const productName = product.name.toLowerCase();

    const index = findProductIndex(productName);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;

        console.log(productName + " quantity updated");
    } else {
        inventory.push({
            name: productName,
            quantity: product.quantity
        });

        console.log(productName + " added to inventory");
    }
}

function removeProduct(name, quantity) {
    const productName = name.toLowerCase();

    const index = findProductIndex(productName);

    if (index === -1) {
        console.log(productName + " not found");
        return;
    }

    if (quantity > inventory[index].quantity) {
        console.log(
            "Not enough " +
            productName +
            " available, remaining pieces: " +
            inventory[index].quantity
        );

        return;
    }

    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
    } else {
        console.log(
            "Remaining " +
            productName +
            " pieces: " +
            inventory[index].quantity
        );
    }
}