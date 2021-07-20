var merge = function (nums1, m, nums2, n) {
    let p = m + n - 1
    m--;
    n--;
    while (m >= 0 && n >= 0) {
        nums1[p] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
        p--;
    }
    while (n >= 0) {
        nums1[n] = nums2[n]
        n--
    }

    console.log(nums1)
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
merge(nums1, 3, nums2, 3)
