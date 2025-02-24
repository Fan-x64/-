function tranformObjects(array, transform) {
    return arr.map(tramsform);
}

const data = [
    { name: 'vita', age = 30 },
    { name: 'vita1', age = 20 },
    { name: 'vita2', age = 40 }
];

const transform = transformObjects(data, obj => ({ ...obj, isAdult: obj.age >= 21 }));
console.log(transform);