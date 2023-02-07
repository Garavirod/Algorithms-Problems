function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    let res = Array.from({ length: n }, () => 1);
    let prefix = 1, postfix = 1;

    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    for (let j = n - 1; j >= 0; j--) {
       res[j] *= postfix;
       postfix *= nums[j];
    }

    return res;
};
