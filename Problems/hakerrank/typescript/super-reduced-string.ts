/*
  SUPER REDUCED STRING
  
  Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
  In each operation, select a pair of adjacent letters that match, and delete them.
  Delete as many characters as possible using this method and return the resulting string. 
  If the final string is empty, return Empty String
*/

function superReducedString(s: string): string {  
    
    if(s.length === 0) return "Empty String"    
    
    if(s.length === 1) return s
        
    if(s.length === 2)
        return (s[0] === s[1]) ? "Empty String" : s
    
    let reduced = s.split('')
    let red_str = s
    let i = 0
    while(i < red_str.length - 1){
        if(red_str[i] === red_str[i+1]){
            reduced[i] = ''
            reduced[i+1] = ''
            red_str =  superReducedString(reduced.join(''))
        }
        i++
    }
    return red_str  
}
