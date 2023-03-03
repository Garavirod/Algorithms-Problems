function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let left = 0;
    let charSet = new Set<string>();

    for(let i=0; i< s.length; i++){
        while ( charSet.has(s[i])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[i]);
        longest = Math.max(longest,  i - left + 1)
    }
    return longest;
};
