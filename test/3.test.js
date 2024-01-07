const { lengthOfLongestSubstring } = require('../02_code/3.ts');

test('s = "abcabcbb"  输出 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3);
});
test('s = "bbbbb"  输出 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1);
});
test('s = "pwwkew"  输出 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3);
});
