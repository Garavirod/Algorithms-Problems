#!/usr/bin/python3

import sys

"""
    Implement an algorithm to determine if a string has all 
    unique characters. What if you cannot use additional 
    data structures?

    Considerations: 

    1.- Is string unicode or ascii ?
"""


# Asuming string si ascii
def isUnique(word):
    # is not posible form a word with more than 128 without repeating an alphabet char
    if len(word) > 128: 
        return False

    set_char = [False] * 128

    for i in word: # O(N)
        val = ord(i) # ascci code of char in word[i]
        if set_char[val]:
            return False
        else:
            set_char[val] = True
    return True



if __name__ == '__main__':
    word = sys.stdin.readline()
    print(isUnique(word))