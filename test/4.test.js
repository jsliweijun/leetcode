const { findMedianSortedArrays } = require('../02_code/4');

test('nums1 = [1,3], nums2 = [2]', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toStrictEqual(2);
});
test('nums1 = [1,3], nums2 = [2,2]', () => {
    expect(findMedianSortedArrays([1, 3], [2, 2])).toStrictEqual(2);
});
test('nums1 = [0,0], nums2 = [0,0]', () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toStrictEqual(0);
});
