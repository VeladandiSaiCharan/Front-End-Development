const manifest = {
    containerId: 68,
    destination: "Salinas",
    weight: 101,
    unit: "lb",
    hazmat: true
};

function normalizeUnits(manifest) {
    const newManifest = {...manifest};
    if (newManifest.unit === "lb") {
        newManifest.weight = newManifest.weight * 0.45;
        newManifest.unit = "kg";
    }
    return newManifest;
}

function validateManifest(manifest) {
    const errors = {};
    if (manifest.containerId === undefined) {
        errors.containerId = "Missing";
    }
    else if (manifest.containerId <= 0 || manifest.containerId === null || Number.isInteger(manifest.containerId) === false) {
        errors.containerId = "Invalid";
    }

    if (manifest.destination === undefined) {
        errors.destination = "Missing";
    }
    else if (typeof manifest.destination !== "string") {
        errors.destination = "Invalid";
    }
    else if (manifest.destination.trim() === "") {
        errors.destination = "Invalid";
    }

    if (manifest.weight === undefined) {
        errors.weight = "Missing";
    }
    else if (typeof manifest.weight !== "number") {
        errors.weight = "Invalid";
    }
    else if (manifest.weight <= 0 || Number.isNaN(manifest.weight) === true) {
        errors.weight = "Invalid";
    }

    if (manifest.unit === undefined) {
        errors.unit = "Missing";
    }
    else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
        errors.unit = "Invalid";
    }

    if (manifest.hazmat === undefined) {
        errors.hazmat = "Missing";
    }
    else if (typeof manifest.hazmat !== "boolean") {
        errors.hazmat = "Invalid";
    }

    return errors;
}

function processManifest(manifest) {
    const errors = validateManifest(manifest);
    if (Object.keys(errors).length === 0) {
        const normalizedManifest = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizedManifest.weight} ${normalizedManifest.unit}`);
    } else {
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(errors);
    }
}