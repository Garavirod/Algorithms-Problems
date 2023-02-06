function topKFrequent(nums: number[], k: number): number[] {
    let result:number[] = [];
    let charCounter = new Map<number, number>();
    let bucketSort = Array.from({length: nums.length + 1}, 
        () => new Array<number>());

    for(const n of nums){
        if(!charCounter.has(n)) charCounter.set(n, 1);
        else charCounter.set(n, charCounter.get(n)! + 1);
    }

    for(const [num, times] of charCounter)
        bucketSort[times].push(num);
    
    for (let i = bucketSort.length - 1; i >= 0; i--) {
        for (const n of bucketSort[i]){
            result.push(n);
            if (result.length === k)
                return result;
        }
    }

    return result;
};