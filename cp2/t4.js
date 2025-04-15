let num = 4;
let res = 0;
for(let i = 1; i <= num; i++){
    let fact = 1;
    for(let j = 1; j <= i; j++){
        fact *= j;
    }
    res += fact;
}
console.log(res);