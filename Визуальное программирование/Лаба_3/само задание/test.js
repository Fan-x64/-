const orderBy = require('./orderBy');

describe('orderBy function', () => {
    const data = [
        { name: 'mark', age: 100, city: 'madagaskar' },
        { name: 'abram', age: 30, city: 'piter' },
        { name: 'gitler', age: 1, city: 'garmon' },
        { name: 'gilber', age: 2, city: 'parmon' },
    ];

    it('sorted by 1 prop', ()  => {
        const sortedArray = orderBy(data, ['city']);

        expect(sortedArray).toEqual([
            { name: 'mark', age: 100, city: 'madagaskar' },
            { name: 'abram', age: 30, city: 'piter' },
            { name: 'gitler', age: 1, city: 'garmon' },
            { name: 'gilber', age: 2, city: 'parmon' },
        ]);
    });
});