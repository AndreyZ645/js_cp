function getProps(array) {
    let result = [];
    for (let obj of array) {
        result.push(Object.values(obj));
    }
    return result;
}

let array = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'watermelon'},
    {id: 3, name: 'qiwi'},
    {id: 4, name: 'lemon'}
];
let result = getProps(array);
console.log(result);