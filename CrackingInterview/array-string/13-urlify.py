#!/usr/bin/python3
import sys

""" 
    3.- Urlify
    
    Write a method to replace all spaces in a string 
    with'%20'You may assume that the string has 
    sufficient space at the end to hold the additional 
    characters, and that you are given the "true" length 
    of the string.
"""

def urlify(word):
    arr = word.split()
    data_output = "%20".join(arr)
    return data_output


def urlify2(word,true_length):
    arr = list(word)

    response = ""

    for i in range(true_length):
        if arr[i] == ' ':
            arr[i] = "%20"
    
    for i in range(true_length):
        response += arr[i]
    return response

if __name__ == '__main__':
    
    data_input = "Hi everyhone, this is a message     "
    print(urlify2(data_input,21))
