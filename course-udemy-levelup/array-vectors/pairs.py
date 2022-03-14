#!user/bin/python3

"""  
    Given ana array containing N integers, and numbers S
    denoting a target sum.
    Find two distinct integers that can pair up form trget
    sum. Let us assume there will be only one such pair.
"""



def pair_approach_1(arr: list, s: int) -> list:
    """ 
        Sorting an array takes O(NlogN) 
        So this algorithm takes O(NLogN)
    """
    arr.sort()
    i,j = 0, len(arr) - 1
    while i != j:
        if arr[i] + arr[j] > s:
            j -= 1
        elif arr[i] + arr[j] < s:
            i += 1
        else:
            return [arr[j],arr[i]]

def pair_approach_2(arr: list, s: int) -> list:
    """
        This thecnique take O(n),
        
        k = s - arr[i]

        find into set k (complement of s - arr[i] ), if 
        its not into set, pass the other 
        iteretation array.

        Find in a set if element exist takes
        O(1)
    """
    set_numbers = set()
    for e in arr:
        k = s - e
        if k in set_numbers:
            return [e,k]
        set_numbers.add(e)

    return []

if __name__ == '__main__':
    input_arr = [10,5,2,3,-6,9,11]

    print(pair_approach_1(input_arr,4)) # O(NlogN)

    print(pair_approach_2(input_arr,4)) # o(N)