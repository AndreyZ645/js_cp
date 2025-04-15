"use strict"

let word = "Арнольд";
let res = "";
for(let i = 0; i < word.length; i++){
    if(word[i].toLowerCase() === "a" || word[i].toLowerCase() === "b") continue;
    else res += word[i];
}
console.log(res);