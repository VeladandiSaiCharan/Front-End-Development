function truncateString(string, number) {
    if (string.length > number) {
        return string.slice(0, number) + "...";
    } else {
        return string;
    }
}

var result = truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(result);

/* Here first we have created function with string and number as it's parameters
Next the if condition checks if the string length is greater than number then it should return sliced portion of string using 
string.slice(0, number) + "..." here the string is sliced based on the number and ... this is appended to it 
if the given string is less than the number then it should just return the string */