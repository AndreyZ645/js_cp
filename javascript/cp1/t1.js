//1
let price = 1000;
let range = "v";
if (range === "day") {
range = "день";
} else if (range === "month") {
range = "месяц";
} else if (range === "year") {
range = "год";
} else {
console.log("Неверное значение");
range = null;
}
if (range) {
console.log(`${price} Р в ${range}`);
}
