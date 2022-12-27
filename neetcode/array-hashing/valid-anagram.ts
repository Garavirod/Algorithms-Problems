
/**
 * Given two strings s and t, return true if t is an anagram of s, 
 * and false otherwise.
 * 
 * Hashing technique
 * Time complexity: O(N)
 * 
 * @param s 
 * @param t 
 * @returns {boolean}
 */
function isAnagram(s: string, t: string): boolean {
    let hashmap = {}
    
    for(let w of s){
        if(w in hashmap) hashmap[w] += 1
        else hashmap[w] = 1
    }
    
    
    for(let w of t){
        hashmap[w] -= 1
        if(hashmap[w] === 0) delete hashmap[w]
    }
    
    return Object.keys(hashmap).length === 0
};