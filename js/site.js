function reverseString() {
    let theWordAlmost = document.getElementById("wordInput").value;
    // Regex get rid of white space
    let theWord = theWordAlmost.replace(/[^A-Z0-9]/ig, '');
    // 2 or more characters
    if (theWord.length >= 2) {

        // Palindrome Execution
        let cleanWord = theWord.toLowerCase();
        // Finds string index location
        let startLength = cleanWord.length - 1;
        let reverseWord = "";
        for (let i = startLength; i >= 0; i--) {
            reverseWord = reverseWord + cleanWord[i];

        }
        let output = document.getElementById("reverseWordOutput");
        output.innerText = reverseWord;

        // Palindrome Test
        if (cleanWord == reverseWord) {
            let answer = document.getElementById("palindromeTest");
            answer.innerText = "Why Yes, it is a Palindrome"
        } else {
            let answer = document.getElementById("palindromeTest");
            answer.innerText = "Not A Palindrome";
        }
    } else {
        alert("Please input a string with 2 or more letters");
    }
}