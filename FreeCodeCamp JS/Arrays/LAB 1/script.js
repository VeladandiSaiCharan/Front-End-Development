var lunches = ["Pizza", "Tacos"];
var lunch = "";
function addLunchToEnd(lunches, lunch) {
    lunches.push(lunch);
    console.log(`${lunch} added to the end of the lunch menu.`);
    return lunches;
}

function addLunchToStart(lunches, lunch) {
    lunches.unshift(lunch);
    console.log(`${lunch} added to the start of the lunch menu.`);
    return lunches;
}

function removeLastLunch(lunches) {
    if (lunches.length === 0) {
        console.log ("No lunches to remove.");
    } else {
        var box = lunches.pop();
        console.log(`${box} removed from the end of the lunch menu.`);
        return lunches;
    }
}

function removeFirstLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.");
    } else {
        var box1 = lunches.shift();
        console.log(`${box1} removed from the start of the lunch menu.`)
    }
    return lunches;
}

function getRandomLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches available.");
    } else {
        let box3 = Math.floor(Math.random() * lunches.length);
        console.log(`Randomly selected lunch: ${lunches[box3]}`);
    }
    return lunches;
}

function showLunchMenu(lunches) {
    if (lunches.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log(`Menu items: ${lunches.join(', ')}`);
    }
}