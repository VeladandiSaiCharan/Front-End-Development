function maskEmail(email) {
    var [username, domain] = email.split("@");// Here first we have created 2 variables at the same time username, domain and then we have used email.split("@") 
    // to due to this we have removed the @ from the email and then the email is divied into 2 parts username and domain.
    var maskedUsername = username[0] + "*".repeat(username.length - 2) + username[username.length - 1];// Here we have created maskedUsername variable and then we have used 
    // username[0] to get the first character from the username next we have used "*".repeat(username.length - 2) to repeat the * for the length of the username - 2 and then we have used username[username.length - 1] to get the last character from the username.
    return maskedUsername + "@" + domain;//Finally we here we have added the them together first we have divided the username and domain and then we have masked the username in the 3rd line then we have added the maskedUsername and domain together to get the final output.
}
var email =("apple.pie@example.com");
console.log(maskEmail(email)); 