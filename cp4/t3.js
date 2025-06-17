function logString() {
    let result = '';   
    for (let i = 0; i < arguments.length; i++) {
        result = result + arguments[i] + ' ';
    }
    console.log(result);
}


logString("Hello", "my", "world!");