

/*
  Given an integer array nums, return true if any value appears at least 
  twice in the array, and return false if every element is distinct.

*/


function containsDuplicate(nums: number[]): boolean {
    let hashmap =  {}
            
    for(let n of nums){ 
        if(n in hashmap)
            hashmap[n] += 1
        else
            hashmap[n] = 1
    }
    
    for(let i of Object.values(hashmap)){
        if(i>1) return false
    }
        
    return true
};
