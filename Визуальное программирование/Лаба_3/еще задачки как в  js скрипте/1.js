function filterBy(arrayOBJ, OBJfilter) {

    if (!arrayOBJ.every(item => typeof item === 'object' && item != null && !Array.isArray(item))) {
        throw new Error('Есть элементы которые не являются объектами');
    }

    return arrayOBJ.filter(item => {
        for (const key in OBJfilter) {
            if (OBJfilter.hasOwnProperty(key)) {
                if (!(key in item) || item[key] !== OBJfilter[key]) {
                    return false;
                }
            }
        }
        return true;

    });
}

const data = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'London' },
    { name: 'Alice', age: 25, city: 'Paris' }
];

try {
    const filtered = filterBy(data, { age: 25, city: 'Paris' });
    console.log(filtered); // [{ name: 'Alice', age: 25, city: 'Paris' }]

} catch (error) {
    console.error(error.message);
}
