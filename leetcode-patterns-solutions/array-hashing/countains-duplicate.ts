

/**
 * Given an integer array nums, return true if any value appears at least 
 * twice in the array, and return false if every element is distinct.
 * 
 * Hashing technique
 * Time complexity O(N)
 * 
 * @param nums 
 * @returns {boolean}
 */
function containsDuplicate(nums: number[]): boolean {
    let hashmap =  {}
            
    for(let n of nums){ 
        if(n in hashmap)
            return true
        else
            hashmap[n] = 1
    }
        
    return false
};
