// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 *
 * @param s
 */
export function lengthOfLongestSubstring(s: string): number {
    let len = 0;
    for (let index = 0; index < s.length; index++) {
        let map = {};
        let count = 0;
        let i = index;
        // 需要判断最后一位时，下一位越界了
        while (!map[s[i]] && i < s.length) {
            map[s[i]] = true;
            count++;
            i++;
        }
        if (count > len) {
            len = count;
        }
    }
    // console.log(len);
    return len;
}

// 滑动窗口解法，双指针。
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/hua-dong-chuang-kou-by-powcai/
