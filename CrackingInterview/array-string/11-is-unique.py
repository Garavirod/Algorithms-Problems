#!/usr/bin/python3
import sys

""" 
    1.- Is Unique
    Implement an algorithm to determine if a string has all 
    unique characters. What if you cannot use 
    additional data structures?
    
    1.- Ask if string is unicode o ASCII
"""



""" 
    Using a hastable
    insert in the hashmap as a key
    each character, if it does not exist yet
    add but it already exists return false.
"""
def isUnique(word):       
    hash_map = {}
    for w in word:
        if w in hash_map:
            return "No"
        else:
            hash_map[w] = True
    return "Yes"


"""
    Using a simple vector
    Sort the list, this takes N(LogN)
    then verify if item's neighborhood
    is identical.
"""
def isUniqueWithoutHashMap(word:str):
    copy_arr = list(word)
    copy_arr = copy_arr[0:-1]
    copy_arr.sort()
    for i in range(len(copy_arr)-1):
        if copy_arr[i] == copy_arr[i+1]:
            return "No"
    return "Yes"
    

"""
    Asuming String is ASCII ( 128 characters )
    This technique take O(N)
"""
def isUniqueASCII(word: str) -> bool:
    if len(word) > 128:
        return "No"
    
    set_char = [ False ] * 128

    for i in range(len(word)):
        harCode = ord(word[i]) # ASCII code 
        if set_char[harCode]: # is it already checked ?
            return "No"
        else:
            set_char[harCode] = True # checked character

    return "Yes"

if __name__ == '__main__':
    word = sys.stdin.readline()
    sys.stdout.write(isUnique(word))
    sys.stdout.write(isUniqueWithoutHashMap(word))
    sys.stdout.write(isUniqueASCII(word))