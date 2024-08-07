""" 
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
"""

def solution(sequence):
    prev, pre_prev,removes = float('-inf'), float('-inf'), 0
    for  n in sequence:
        if(n <= prev):
            removes += 1
            if(n > pre_prev):
                prev = n
        else:
            pre_prev = prev
            prev = n

    return removes <= 1
