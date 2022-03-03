#!/usr/bin/python3

"""  
    5.- One way

    There are three types of edits that can be performed 
    on strings: insert a character, remove a character, 
    or replace a character. Given two strings, write 
    a function to check if they are one edit 
    (or zero edits) away.
    
"""

def one_away( s1: str, s2: str ) -> bool:
    l1,l2 = list(s1), list(s2)
    length_l1, length_l2 = len(l1),len(l2)
    if length_l1 == length_l2: #propbaly was edited through repleacing
        editions = 0
        for i in range(length_l1):
            if l1[i] != l2[i]:
                editions += 1            
        return editions <= 1
     # propbaly was edited through increasing or removing
    elif abs(length_l1 - length_l2) == 1:          
        i,j = 0,0            
        while i < length_l1 and j < length_l2:
            if s1[i] != s2[j]:
                return False
            i +=1 
            j +=1
        return True
    else:
        return False


if __name__ == '__main__':
    s1,s2 = "pale", "ble"
    print(one_away(s1,s2))
