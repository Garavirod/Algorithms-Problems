/*    
    Given an integer n, return an array ans of length n + 1 such that for each i (0     <= i <= n), 
    ans[i] is the number of 1's in the binary representation of i.        
*/



/* 

    Convert decimal number to binary number using division.
    When division is not exact that means it has one bit.

                 (% == 0)=0 
        13/2 = 6     1           LSB -> most at right
         6/2 = 3     0
         3/2 = 1     1
         1/2 = 0     1           MSB -> most at left
        
        1101
    
    Technique: Bits manipulation
    Time complexity: O(NlogN)
    Space complexity: O(N)
*/
function countBits1(n: number): number[] {
    let res: Array<number> = Array(n+1).fill(0)
    
    for(let i = 1; i<=n; i++){
        let bitsCounter = 0
        let num = i
        // While result of division get become to zero
        // This takes Log N times, it means a N number divided into two
        while( num !== 0  ){
            // Count a bit if rest of division is zero    
            // this return 1 or 0 because in modular arithmetic x mod 2 represents a circle divided into 2 sizes  (1 | 0)
            bitsCounter += num % 2 
            num =  Math.floor(num / 2 )            
        }
        
        res[i] = bitsCounter
                     
    }
    
    return res
};


/**
 * 
 * Technique: Dinamyc program 
 * Time complexity: O(N) 
 * Space complexity: O(N)
 * 
 * To identify if there is a new MSB so far in each iteration i.
 * Each iteration i is mupliplicated by 2, because each power of two
 * is going to have the MSB so far.
 * 
 * 
 * 
 * 
 * i   bit rep        Num bits
 * 0 - 0000           0             - base case
 * 1 - 0001           1 + dp[1 - 1]
 * 2 - 0010           1 + dp[2 - 2] - new MSB
 * 3 - 0011           1 + dp[3 - 2]
 * 4 - 0100           1 + dp[4 - 4] - new MSB
 * 5 - 0101           1 + dp[5 - 4]
 * 6 - 0110           1 + dp[6 - 2]
 * 7 - 0111           1 + dp[7 - 2]
 * 8 - 1000           1 + dp[8 - 2] - new MSB
 * 
 * @param n 
 * @returns {Array}
 */
function countBits2(n: number): number[] {
    let dp:Array<number> = Array(n+1).fill(0)
    dp[0] = 0 // base case
    let offset = 1 // store the MSB so far
    for(let i = 1; i<=n; i++ ){
        if(offset * 2 === i) // it has new MSB
            offset = i
        dp[i] = 1 + dp[i - offset]
    }
    
    return dp
};