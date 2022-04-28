/*
    
    Given an integer n, return an array ans of length n + 1 such that for each i (0     <= i <= n), 
    ans[i] is the number of 1's in the binary representation of i.    
   
    Convert decimal number to binary number using division.
    
    When division is not exact that means it has one bit
              (% == 0)=0 
   13/2 = 6     1           LSB -> most at right
    6/2 = 3     0
    3/2 = 1     1
    1/2 = 0     1           MSB -> most at left
    
    1101
    
    Technique: Bits manipulation
*/

function countBits(n: number): number[] {
    let res: Array<number> = Array(n+1).fill(0)
    
    for(let i = 1; i<=n; i++){
        let bitsCounter = 0
        let num = i
        // While result of division get become to zero
        while( num !== 0  ){
            // Count a bit if rest of division is zero    
            // this return 1 or 0 because in modular arithmetic x mod 2 represents a circle divided into 2 sizes  (1 | 0)
            bitsCounter += num % 2 
                        
            // 
            num =  Math.floor(num / 2 )            
        }
        
        res[i] = bitsCounter
                     
    }
    
    return res
};
