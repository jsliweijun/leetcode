/**
 * 4. 寻找两个正序数组的中位数
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
   算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 */

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let l1 = nums1.length;
    let l2 = nums2.length;

    let sum = l1 + l2;
    let m = 0;
    let d = 0;
    if (sum % 2 == 0) {
        m = sum / 2;
        d = 1;
    } else {
        m = (sum - 1) / 2;
    }

    let i = 0;
    let j = 0;

    let result = [];
    while (result.length <= m) {
        let n1 = nums1[i];
        let n2 = nums2[j];
        if (isNaN(Number(n1))) {
            result.push(n2);
            j++;
        } else if (isNaN(Number(n2))) {
            result.push(n1);
            i++;
        } else {
            if (n1 < n2) {
                result.push(n1);
                i++;
            } else {
                result.push(n2);
                j++;
            }
        }
    }

    if (d) {
        // console.log(d, result);
        return (result[m] + result[m - 1]) / 2;
    } else {
        // console.log(d, result);
        return result[m];
    }
}
