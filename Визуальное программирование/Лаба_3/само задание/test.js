const orderBy = require('./orderBy');

describe('orderBy function', () => {
    test('sorts array of objects by single property', () => {
        const arr = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Alice', age: 20 }
        ];
        const sortedArr = orderBy(arr, ['age']);
        expect(sortedArr).toEqual([
            { name: 'Alice', age: 20 },
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 }
        ]);
    });

    test('sorts array of objects by multiple properties ', () => {
        const arr = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Alice', age: 25 }
        ];
        const sortedArr = orderBy(arr, ['age', 'name']);
        expect(sortedArr).toEqual([
            { name: 'Alice', age: 25 },
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 }
        ]);
    });

    test('throws error if array contains non-object elements', () => {
        const arr = [
            { name: 'John', age: 25 },
            'not an object',
            { name: 'Alice', age: 20 }
        ];
        expect(() => orderBy(arr, ['age'])).toThrow('Все элементы массива должны быть объектами');
    });

    test('throws error if property is missing in one or more objects', () => {
        const arr = [
            { name: 'John', age: 25 },
            { name: 'Jane' }, // Отсутствует свойство age
            { name: 'Alice', age: 20 }
        ];
        expect(() => orderBy(arr, ['age'])).toThrow('Свойство "age" отсутствует в одном или нескольких объектах');
    });

    test('does not mutate the original array', () => {
        const arr = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Alice', age: 20 }
        ];
        const sortedArr = orderBy(arr, ['age']);
        expect(arr).toEqual([
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Alice', age: 20 }
        ]);
    });
});