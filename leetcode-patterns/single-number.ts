/*
  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  You must implement a solution with a linear runtime complexity and use only constant extra space.
*/


function singleNumber(nums: number[]): number {
    let hashmap = {}
    for(let n of nums){
        if(n in hashmap) hashmap[n] += 1
        else hashmap[n] = 1
    }
    
    for(let k in hashmap){
        if(hashmap[k] < 2) return parseInt(k)
    }
};
