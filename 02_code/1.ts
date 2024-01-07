// 两次循环,暴力破解
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

// target - x = y ，一次循环时可以记录下次需要的值，同时也记录了这次的位置。
// 记住值的索引
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
