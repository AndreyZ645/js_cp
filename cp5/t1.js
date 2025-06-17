let phones = [
    '590.423.4568',
    '650.124.7234',
    '650.507.9879',
    '011.44.1343.529268',
    '011.44.1344.478968',
    '011.44.1644.429267',
    '11.44.1343.52',
    '11.44.1643.52'
];

let changedPhones = phones.map(phone => {
    const lastDotIndex = phone.lastIndexOf('.');
    const visiblePart = phone.slice(0, lastDotIndex + 2);
    return visiblePart + '****';
});

console.log(changedPhones);