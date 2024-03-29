function canJump(nums: number[]): boolean {
    let goal = nums.length - 1;
    for(let i = goal; i>=0; i--){
        if(  i + nums[i] >= goal ) goal = i;
    }
    return goal === 0;
};