// ����������� �������, ������� ����� �����������
const orderBy = require('./orderBy');

// ���������� ����� ��� ������� orderBy
describe('orderBy function', () => {
    // ���� 1: ��������� ���������� �� ������ ��������
    test('sorts array of objects by single property', () => {
        // ���������� ������
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

        // ����� �������
        const sortedArr = orderBy(arr, ['age']);

        // �������� ����������
        expect(sortedArr).toEqual(expectedOutput);
    });

    // ���� 2: ���������, ��� ������� ����������� ����������, ���� � ������� ���� ��-�������
    test('throws error if array contains non-object elements', () => {
        // ���������� ������
        const arr = [
            { name: 'John', age: 25 },
            'not an object', // ��� �� ������
            { name: 'Alice', age: 20 }
        ];

        // ��������, ��� ������� ����������� ����������
        expect(() => orderBy(arr, ['age'])).toThrow('��� �������� ������� ������ ���� ���������');
    });

    // ���� 3: ���������, ��� �������� ������ �� ����������
    test('does not mutate the original array', () => {
        // ���������� ������
        const arr = [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Alice', age: 20 }
        ];
        const originalArr = [...arr]; // ������� ����� ��������� �������

        // ����� �������
        orderBy(arr, ['age']);

        // ��������, ��� �������� ������ �� ���������
        expect(arr).toEqual(originalArr);
    });
});