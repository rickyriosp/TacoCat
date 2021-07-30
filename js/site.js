// Get user string input
// controller function
function getString() {
    // hide the alert box
    document.getElementById("alert").classList.add("invisible");

    // get user string from the page
    let userString = document.getElementById("userString").value;

    // check for palindrome
    let returnObj = checkPalindrome(userString);

    // display message to the screen
    displayMessage(returnObj);
}

// Check if string is palindrome
// logic function
function checkPalindrome(userString) {
    // to lower and trim
    userString = userString.toLowerCase().trim();

    // remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    // split string into array
    let splitStr = userString.split("");
    
    // reverse array
    let reversed = splitStr.reverse();
    
    // join array into string
    let revString = reversed.join("");

    // check if string is palindrome
    if (userString === revString) {
        return {isPalindrome: true, revString: revString};
    } else {
        return {isPalindrome: false, revString: revString};
    }
}

// Display reversed string to the user and result
// view function
function displayMessage(returnObj) {
    // write results to the page
    if (returnObj.isPalindrome) {
        document.getElementById("alertHeading").innerHTML = "Well Done! You Entered A Palindrome!"
    } else {
        document.getElementById("alertHeading").innerHTML = "Wrong! Not A Palindrome!"
    }

    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.revString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}