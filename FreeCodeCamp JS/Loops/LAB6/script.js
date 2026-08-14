function repeatStringNumTimes(string, num) {
    if (num <= 0) {
        return "";
    }

    let result = "";
    for (let i = 0; i < num; i++) {
        result = result + string;
    }
    return result;
}