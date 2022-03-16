//  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
//  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
//  你可以按任意顺序返回答案。

/**
 *
 * @param nums
 * @param target
 * @returns
 */
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
}

/**
 *
 * target - x = y ，一次循环时可以记录下次需要的值，同时也记录了这次的位置。
 * @param nums
 * @param target
 * @returns
 */
function twoSumWithMap(nums: number[], target: number): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        // console.log(key);
        if (map.has(key)) {
            return [map.get(key), i];
        }
        map.set(nums[i], i);
        // console.log(map);
    }
    return [];
}

module.exports = { twoSum, twoSumWithMap };

// console.log(twoSumWithMap([2, 7, 11, 15], 9));
