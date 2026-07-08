let count = 0;
function cardCounter(card) {
    let condition1 = card === 2 || card === 3 || card === 4 || card === 5 || card === 6 // Here first we are checking if the card is between 2-6 using "||" or operator which checks if the card is 2 or 3 or 4 .. or 6
    ? count++ // The "?" is a ternary operator which checks if the above condition is true then it will increment the count by 1 if it is false then it will check the next condition which is after the ":" operator
    : card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A' // Here ":" this acts as an else statement which checks if the above condition fails the next conditions must be checked 
    ? count-- //Here if the above condition is true then it will decrement the count by 1 if this condition also fails then it will move to the next statement which is after the ":" operator
    : count; // Here if both the above conditions fail then it will return the count as it is without any increment or decrement
    
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}