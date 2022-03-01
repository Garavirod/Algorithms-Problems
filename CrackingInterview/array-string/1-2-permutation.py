#!/usr/bin/python3
import sys
"""  
    Given two strings, write a method to decide 
    if one is a permutation of the other.

    Considerations: 
        1. Is case sentive ?
        2. White spaces must be considereated ?
"""
def isPermutation(w1,w2):

    if len(w1) != len(w2):
        return False
    else:
        map_counter = {}
        for w in w1: # O(N)
            map_counter[w] = map_counter.get(w,0) + 1      

        for w in w2: #O(N)
            if w in map_counter:
                map_counter[w] -= 1            
                if map_counter[w] == 0:
                    del map_counter[w]
            else: 
                return False
        
        return len(map_counter) == 0

if __name__ == '__main__':
    words = sys.stdin.readline().split()
    print(isPermutation(words[0],words[1]))
    
