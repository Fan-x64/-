// Импортируем функцию, которую будем тестировать
const orderBy = require('./orderBy');

// Группируем тесты для функции orderBy
describe('orderBy function', () => {
    // Тест 1: Проверяем сортировку по одному свойству
    test('sorts array of objects by single property', () => {
        // Подготовка данных
        const arr = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Alice', age: 20 }
        ];
        const expectedOutput = [
            { name: 'Alice', age: 20 },
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 }
        ];

        // Вызов функции
        const sortedArr = orderBy(arr, ['age']);

        // Проверка результата
        expect(sortedArr).toEqual(expectedOutput);
    });

    // Тест 2: Проверяем, что функция выбрасывает исключение, если в массиве есть не-объекты
    test('throws error if array contains non-object elements', () => {
        // Подготовка данных
        const arr = [
            { name: 'John', age: 25 },
            'not an object', // Это не объект
            { name: 'Alice', age: 20 }
        ];

        // Проверка, что функция выбрасывает исключение
        expect(() => orderBy(arr, ['age'])).toThrow('Все элементы массива должны быть объектами');
    });

    // Тест 3: Проверяем, что исходный массив не изменяется
    test('does not mutate the original array', () => {
        // Подготовка данных
        const arr = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Alice', age: 20 }
        ];
        const originalArr = [...arr]; // Создаем копию исходного массива

        // Вызов функции
        orderBy(arr, ['age']);

        // Проверка, что исходный массив не изменился
        expect(arr).toEqual(originalArr);
    });
});