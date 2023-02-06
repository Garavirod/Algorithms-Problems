function groupAnagrams(strs: string[]): string[][] {
    let map =  new Map<string, string[]>();
    for (const str of strs) {
        let charCounter = Array.from({ length: 26 }, () => 0);
        for(const char of str)
            charCounter[ char.charCodeAt(0) - "a".charCodeAt(0) ] += 1;
        
        const key = JSON.stringify(charCounter);
        if(map.has(key)) map.get(key)!.push(str);
        else map.set(key, [str]);
    }

    return Array.from(map.values());
};