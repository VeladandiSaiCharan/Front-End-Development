function confirmEnding(str1, str2) {
    if (str1.slice(-str2.length) === str2) {
        return true;
    } else {
        return false;
    }
}

var result = confirmEnding("Congratulation", "on");
console.log(result);