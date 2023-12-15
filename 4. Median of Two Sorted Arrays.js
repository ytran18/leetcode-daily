/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1Length = nums1.length;
    nums2Length = nums2.length;
    let arr = [];
    arr = nums1.concat(nums2);

    let sortArr = arr.sort(function(a,b) {
        return a-b;
    });

    const sortLength = sortArr.length;
    let median = 0;

    if(sortLength % 2 !== 0) {
        median = sortArr[Math.floor(sortLength/2)];
    } else {
        let mid1 = sortArr[Math.floor(sortLength/2)];
        let mid2 = sortArr[Math.floor(sortLength/2) -1];
        median = (mid1 + mid2) / 2;
    };

    return median;
};