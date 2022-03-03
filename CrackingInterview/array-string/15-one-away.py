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
    if len(l1) == len(l2): #propbaly was edited trought repleacing
        editions = 0
        for i in range(len(l1)):
            if l1[i] != l2[i]:
                editions += 1            
        return editions <= 1
     # propbaly was edited through increasing or removing
    elif abs(len(l1) - len(l2)) == 1:
        editions = 1                    
        for s in s2:            
            if not s in l1:
                editions += 1
        return editions <= 1
    else:
        return False


if __name__ == '__main__':
    s1,s2 = "pale", "bae"
    print(one_away(s1,s2))
