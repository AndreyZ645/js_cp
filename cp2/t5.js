let word = "потоп";
let isPalindrome = true;
for(let i = 0; i < (word.length / 2) + 1; i++){
    if(word.length < 2) {
        break;
    }
    else if(word[i].toLowerCase() === word[word.length - i - 1].toLowerCase()) isPalindrome = true;
    else{
        isPalindrome = false;
        break;
    }
}
if(isPalindrome === true) console.log("YES");
else console.log("NO");