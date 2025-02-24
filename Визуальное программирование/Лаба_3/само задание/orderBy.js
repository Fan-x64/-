"use strict";

function orderBy(array, propperties) {

    if (!array.every(item => typeof item === 'object' && item != null && !Array.isArray(item))) {
        throw new Error('��� �������� ������� ������ ���� ���������');
    }

    

    const sortedArray = [...array];

    sortedArray.sort((a, b) => {
        for (const prop of props) {

            if (!(prop in a) || !(prop in b)) {
                throw new Error(`${ prop } ����������� � 1 ��� ���������� ��������`)
            }

            if (a[prop] < b[prop]) { return -1 };
            if (a[prop] > b[prop]) { return 1 };
        }
        
        return 0;
    });


    return sortedArray;
}

module.exports = orderBy;