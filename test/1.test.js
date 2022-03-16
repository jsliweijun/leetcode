const { twoSum, twoSumWithMap } = require('../code/1.ts');

test('nums = [2,7,11,15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('nums = [2,7,11,15], target = 9 , twoSumWithMap', () => {
    console.log(twoSumWithMap([2, 7, 11, 15], 9));
    expect(twoSumWithMap([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
