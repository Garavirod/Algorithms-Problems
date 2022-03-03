#!/usr/bin/python3

"""
    4.- Palindrome Permutation

    Given a string, write a function to check 
    if it is a permutation of a palindrome. 
    A palindrome is a word or phrase that is 
    the same forwards and backwards, 
    A permutation is a rearrangement of letters. 
    The palindrome does not need to be limited to 
    just dictionary words.


    Explanation:
    a word is a palindrome if:
        - when string's length is an odd number, all characters
         must have an even numer pair of ocurrences,except one,

        - when string's length is and even nummber, all characters
        must have an even numer pair of ocurrences.

    ODD - CHARS
        anita lava la tina
        length - 15
        a - 6
        n - 2
        i - 2
        t - 2
        l - 2
        v - 1

        te ten        
        t - 2
        e - 2
        n - 1

    EVEN CAHRS
        a lla

        a - 2
        l - 2

        p ppp
        p - 3
    
"""

def palindrome_permutation( word: str ) -> bool:
    s = "".join(word.split())
    map_chars = {}
    for char in s:  # O(N)          
        map_chars[char] = map_chars.get(char,0) + 1

    # the same char in string 'p ppp' { p:1 } 
    if len(map_chars) == 1: # O(1)
        return True 
                
    # verify if is an even number chars of string s                     
    if len(s) % 2 == 0: # O(1)
        for k in map_chars: # O(M)
            if not map_chars[k] % 2 == 0:
                return False      
        return True
    else:
        i = 0
        for k in map_chars: # O(M)
            if map_chars[k] == 1:
                i += 1        
        return i == 1 # One pivot char only       



def optimal_solution( word: str ) -> bool:
    s = "".join(word.split())
    map_chars = {}
    for char in s:            
        map_chars[char] = map_chars.get(char,0) + 1

    hasOdd = False
    for k in map_chars:
        if map_chars[k] % 2 == 1:
            if hasOdd:
                return False
            hasOdd = True   
    return True

if __name__ == '__main__':
    s = "a aaaa"
    print(palindrome_permutation(s))
    print(optimal_solution(s))