const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  let result = [];
  const seenSkus = new Set(); //This is used to track the duplicate skus

  for (const line of rawData) {
    const parts = line.split("|") //Here in the above raw data we are having a string of items seperated using "|" so to make them into an object we are using split("|") to seperate them and store them in the form an object inside the parts variable

    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] || "general"; //Here we have to check if the zone has been given or not if it is empty we have to assign it general so we are using "||" thsi to give it a fallback value

    if (seenSkus.has(sku)) {
      continue;      
    }
    seenSkus.add(sku);//If the sku that has been checked also exists in the line it must be marked as seen and to mark it we are storing it in seenSkus

    const item = {
      sku,
      name,
      qty,
      expires,
      zone
    };

    result.push(item);
  }
  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (let i = 0; i < shipment.length; i++) { // By using the for loop on shipment we are getting the current shipment item and storing it in the variable item
    const item = shipment[i]; 

    let existsInPantry = false;  //Here we are trying to check if the SKU actually exists inside the pantry
    for (let j = 0; j < pantry.length; j++) {
      if (pantry[j].sku === item.sku) {
        existsInPantry = true;
        break;
      }
    }

    if (item.qty <= 0) { //Now here we are trying to assign the actions based on the item is actually present pantry
      actions.push({ type: "discard", item });
    } else if (existsInPantry) {
      // If qty > 0 and SKU exists in pantry, action is restock
      actions.push({ type: "restock", item });
    } else {
      // If qty > 0 and SKU does not exist in pantry, action is donate
      actions.push({ type: "donate", item });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const groups = {}; // Here we are creating a group as an object to store the zone as the keys and arrays of actions that has to be passed as values 
  for (const action of actions) {
    const zone = action.item.zone; //Here we are trying to get the zone of the current action of the item
    if (groups[zone] === undefined) { //Now here  if the zone doesn't exist in groups, create it as an expty array 
      groups[zone] = [];
    }
    groups[zone].push(action);//Now here we are pushing the current action into the correct zone array
  }
  return groups;
}

function clonePantry(pantry) {
  return pantry.map(item => ({ ...item}));
}

const shipment = parseShipment(rawData);
const actions = planRestock(pantry, shipment);
const grouped = groupByZone(actions);

console.log(grouped);