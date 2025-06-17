function generateArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) == 'object' & !Array.isArray(array[i])) {
            let values = [];

            for (let key in array[i]) {
                values.push(array[i][key]);
            }

            result.push(values);

        } else {
            result.push(array[i]);
        }
    }

    return result;
}

let array = [[1], {id: 40}, [100], [300], {part: 10}];
console.log(generateArray(array));