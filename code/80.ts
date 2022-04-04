/**
 * 80. 删除有序数组中的重复项 II
 *给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
    不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
「通用解法」是一种针对「数据有序，相同元素最多保留 k 位」问题更加本质的解法，该解法是从性质出发提炼的，利用了「数组有序 & 保留逻辑」两大主要性质。
建议重点掌握 ~
    https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shua-chuan-lc-jian-ji-shuang-zhi-zhen-ji-2eg8/
 */

/**
 * [1,1,2,2,2,2,3,4,4,4,4]  [1,1,2,2,3,4,4,-]
 * left 代表最终要返回的长度
 * @param nums
 * @returns
 */
function removeDuplicates1(nums: number[]): number {
    // 题目要保留2个，初始值就设置错了，读题就没理解透
    // let left: number = 0;
    // let right: number = 1;
    let left: number = 2;
    let right: number = 2;
    while (right < nums.length) {
        if (nums[left - 2] != nums[right]) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    return left;
}

// 重构代码
function removeDuplicates(nums: number[]): number {
    let idx: number = 0; // 标记是否能放入满足数据的位置
    let k: number = 2;
    // 直接遍历数组
    nums.forEach((item, index, nums) => {
        // console.log(item, index, nums);
        if (idx < k || nums[idx - k] != item) {
            nums[idx++] = item;
        }
    });

    return idx;
}

console.log(removeDuplicates([1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4]));
