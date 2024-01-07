const { removeDuplicates } = require('../02_code/26');

test('nums= [1,1,2]', () => {
    expect(removeDuplicates([1, 1, 2])).toStrictEqual(2);
});

test('nums= [0,0,1,1,1,2,2,3,3,4]', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual(5);
});
