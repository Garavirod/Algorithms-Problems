#!/usr/bin/python3

"""
    6.- String compression

    Implement a method to perform basic string compression 
    using the counts of repeated characters. For example, 
    the string aabcccccaaa would become a2blc5a3. 
    If the "compressed "string would not become smaller 
    than the original string, your method should return 
    the original string. You can assume the string 
    has only uppercase and lowercase letters (a - z).
"""



def string_compression( s: str ) -> str:
    counter = 0
    response = ''
    p1,p2 = 0,0
    while p2 < len(s):
        if s[p1] == s[p2]:
            counter += 1
            p2 += 1
        else:
            response += "{}{}".format(s[p1],counter)
            counter = 0
            p1 = p2;            

    if len(response) > len(s):
        return s
    else:
        return response+"{}{}".format(s[p1],counter)

if __name__ == '__main__':
    s = "aabcd"
    print(string_compression(s))