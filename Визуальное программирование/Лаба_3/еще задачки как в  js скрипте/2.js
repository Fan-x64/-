function filterByProperties(ArrayOBJ, OBJfilter) {

    return ArrayOBJ.filter(item => {
        return Object.keys(OBJfilter).every(key => ite[key] === OBJfilter[key]);
    });
}

const data = [
    { name='qwerty', age=30, sity='vov' },
    { name='qqq', age=90, sity='gfg' },

];

const filter = filterByProperties(data, { city: 'vov', age: 30 });
console.log(filter);
