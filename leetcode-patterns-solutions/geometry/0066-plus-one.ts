function plusOne(digits: number[]): number[] {
    const n = digits.length;
    if(n === 1)
        return (digits[0] === 9) ? [1,0] : [digits[0] + 1];

    let i = n - 1;

    while (i >= 0) {
        if(digits[i] === 9){
            digits[i] = 0;
            i--;
        }else{
            digits[i] += 1;
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
};