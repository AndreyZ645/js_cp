function checkObj(obj) {
    return obj.particle != undefined;
}

console.log(checkObj({id: 1, particle: 10}));
console.log(checkObj({id: 1, name: "tag"}));