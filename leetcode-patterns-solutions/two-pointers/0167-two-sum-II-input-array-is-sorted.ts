function twoSum(numbers: number[], target: number): number[] {
    let l:number = 0, r:number = numbers.length - 1;
    while(true){
        const sum = numbers[l] + numbers[r];
        if(sum > target) r--;
        else if (sum < target) l++;
        else return [ l + 1, r + 1];
    }
};
