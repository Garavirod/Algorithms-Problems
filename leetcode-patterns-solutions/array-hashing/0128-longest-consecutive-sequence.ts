
function longestConsecutive(nums: number[]): number {
    let unseroted =  new Set(nums);
    let largest = 0;
    
    unseroted.forEach((e) => {
        const prev_val = e - 1;
        // if prev_val exist, pass it, because it's going to init a new chain
        if(!unseroted.has(prev_val)){
            let next_val = e + 1;
            let counter = 1;
            while(unseroted.has(next_val)){
                counter += 1;
                next_val += 1; 
            }
            largest = Math.max(largest, counter);
        }
    });

    return largest;
};
