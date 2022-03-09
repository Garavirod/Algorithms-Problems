#!/usr/bin/ṕython3

"""
     9.- String rotation

    Assume you have a method i 5Su b 5 tr ing which checks if one word is a substring 
    of another. Given two strings, 51 and 52, write code to check if 52 is a rotation 
    of 51 using only one 
    call to i5Sub5tring (e.g., "waterbottle" is a rotation of"erbottlewat").

    Input 
    s1 = "helloworld"
    s2 = "lloworldhe"
    
    a = he b = lloworld

    s1 = ab
    s2 = ba

    
    c = ab+ab = abab
    c = "helloworldhelloworld"

    therefore

    s2 is a substring of c then it is a rotation of s1
"""


def is_roation(s1: str,s2: str) -> bool:
    if len(s1) != len(s2): return False
    return s2 in (s1 + s1)


if __name__ == '__main__':
    s1 = "helloworld"
    s2 = "lloworldhe"

    print(is_roation(s1,s2))