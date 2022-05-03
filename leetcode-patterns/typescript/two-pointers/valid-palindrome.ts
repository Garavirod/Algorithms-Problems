/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 */




/**
 * 
 * Helper function to verify is a number is alpha numeric
 * @param s 
 * @returns {boolean}
 */
function isAlphaNumeric(s:string):boolean{
    return ( s.charCodeAt(0) > 47 && s.charCodeAt(0) < 58 ) ||
    ( s.charCodeAt(0) > 64 && s.charCodeAt(0) < 91 ) ||
    ( s.charCodeAt(0) > 96 && s.charCodeAt(0) < 123 ) 
}


/**
 * Time complexity:  O(N)
 * spce complexity: O(N)
 * @param s 
 * @returns {boolean}
 */
function validPalindrome(s:string):boolean{
    let newString = ""
    for(let i of s){
        if(i.match(/^[0-9A-Za-z]+$/) !== null){
            newString += i.toLowerCase()
        }
    }

    return newString === newString.split('').reverse().join('')

}


/**
 * Time complexity:  O(N)
 * spce complexity: O(1)
 * @param s 
 * @returns {boolean}
 */
function validPalindrome2(s:string):boolean{
    let p1 = 0 , p2 = s.length - 1
    while( p1 < p2 ){
        while( p1 < p2 && !isAlphaNumeric(s[p1]) )
            p1++
        
        while (p2 > p1 && !isAlphaNumeric(s[p2])) 
            p2--

        if(s[p1].toLowerCase() !== s[p2].toLowerCase()) return false

        p1++
        p2--
    }

    return true

}