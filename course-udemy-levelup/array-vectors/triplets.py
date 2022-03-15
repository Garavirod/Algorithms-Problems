#!usr/bin/python3

"""
    Giving an array containing N integers,
    and a number S denoting a trget sum.
    Find all distinct integers that can add up to 
    form target sum. the numbers in each triplet
    should be ordered in ascending order, and triplets
    should be ordered too.

    return empty array if no such triplets exist

"""

def triplets(arr:list, target:int) -> list:
    answer = []
    arr.sort()
    i,j = 1, len(arr) - 1
    for k in range(len(arr)-3):
        s = arr[k] + arr[i] + arr[j]
        while i < j:
            if s == target:
                answer.append([arr[k],arr[i],arr[j]])
            elif s > target:
                j += 1
            else:
                i -= 1
    return answer


if __name__ == '__main__':
    arr = [1,2,3,4,5,6,7,8,9,15]
    print(triplets(arr,18))