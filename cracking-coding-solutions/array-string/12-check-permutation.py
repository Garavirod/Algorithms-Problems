#!/usr/bin/python3
import sys
""" 
    2.- Check permutation

    Given 2 string verify is one is permutation of anther one 
    Verify if is case sentive
    White space is significant ? 

    Note: A permutation is all posible orderings for a number
    of elements.
"""
import sys


"""
    Optimal solution
    Verify if w1 has got same character in w2
"""
def checkPermutation(word1, word2):
    if len(word1) != len(word2) :
        return False
    else:
        counter_map = {}
        for i in word1:
            counter_map[i] += 1 
        

if __name__ == '__main__':
    words = sys.stdin.readline().split()
    resp = checkPermutation(word1=words[0],word2=words[1])
    print(resp)
