function getInfo(prices) {
  let startsWithPrice = 0;
  let endsWithDollar = 0;

  for (let item of prices) {
    if (item.startsWith('Цена')) {
      startsWithPrice++;
    }
    if (item.endsWith('$')) {
      endsWithDollar++;
    }
  }

  return [startsWithPrice, endsWithDollar];
}

let prices = [
  'Цена товара - 1200$',
  'Стоимость - 500$',
  'Цена не определена',
  '9999',
  'Ценовая категория - больше 300$',
  'Цена за услугу 500 EUR',
  '150$',
];

console.log(getInfo(prices));