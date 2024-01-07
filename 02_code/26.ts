/**
 * 26. 删除有序数组中的重复项
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，
 * 返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。
更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
将最终结果插入 nums 的前 k 个位置后返回 k 。
不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 
 */

// let nums = [1, 1, 3, 3, 4, 5, 5, 5, 10];
// 双指针方式

function removeDuplicates1(nums: number[]): number {
    let left: number = 0;
    let right: number = 1;
    while (right < nums.length) {
        if (nums[left] == nums[right]) {
            right++;
        } else {
            left++;
            if (nums[left] != nums[right]) {
                nums[left] = nums[right];
            }
        }
    }
    return left + 1;
}

// 重构代码
export function removeDuplicates(nums: number[]): number {
    let left: number = 0;
    let right: number = 1;
    while (right < nums.length) {
        if (nums[left] != nums[right]) {
            nums[left + 1] = nums[right];
            left++;
        }
        right++;
    }
    return left + 1;
}
