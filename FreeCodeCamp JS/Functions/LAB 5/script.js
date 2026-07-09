function isLeapYear(value) {
    if (value % 4 === 0 && value % 100 !== 0 || value % 400 === 0) { 
        return value + " is a leap year."
    } else {
        return value + " is not a leap year."
    }
}

var year = 2024;
var result = isLeapYear(year);
console.log(result);

/* Here we are checking if the year is a leap first we have checked if the value is divisible by 4 if yes we have to check with 100 also 
so we have made the condition like this the value % 4 === 0 && value % 100 !== 0  here we are checking the value with both 4 and 100 next if the value is divisible by 100 
then we have to check with 400 if it is equal then it is a leap year*/