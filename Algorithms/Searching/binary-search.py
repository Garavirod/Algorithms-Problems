def binary_search(arr,item):
    first = 0
    last = len(arr)-1
    while(first<=last):
        middle = (last + first)//2
        if arr[middle] == item:
            return middle
        elif item < arr[middle]:
            last = middle - 1
        else:
            first = middle + 1
    return -1

if __name__ == '__main__':            
    arr = [4,2,9,45,89,0,12,34]
    arr.sort()
    print(arr)
    print(binary_search(arr,4))