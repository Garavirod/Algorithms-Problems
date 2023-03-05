function characterReplacement(s: string, k: number): number {
    let counterFreq = new Map<string, number>();
    let res = 0;
    let left = 0;
    let maxFrequency = 0;

    for (let right = 0; right < s.length; right++) {
        counterFreq.set(s[right], (counterFreq.get(s[right]) ?? 0) + 1);
        maxFrequency = Math.max(maxFrequency, counterFreq.get(s[right])!);
        while ((right - left + 1) - maxFrequency > k) {
            counterFreq.set(s[left], counterFreq.get(s[left])! - 1)
            left++;
        }
        res = Math.max(res, (right -left + 1));
    }
    return res;
};