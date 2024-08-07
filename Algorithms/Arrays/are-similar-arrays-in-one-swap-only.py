def solution(a, b):
    return sorted(a)==sorted(b) and sum([a!=b for a,b in zip(a,b)]) <= 2 # num of 
