function getSum(obj) {
    let total = 0;
    for (let key in obj) {
        total += obj[key];
    }
    return total
}


let obj = { 
    price1: 100, 
    price2: 150, 
    price3: 200, 
    price4: 100,
    price5: 150, 
}

let result = getSum(obj);
console.log(result);