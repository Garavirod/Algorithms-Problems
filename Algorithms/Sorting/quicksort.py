def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        left = list()
        right = list()        
        pivot = arr[0]
        for i in range(1,len(arr)):
            if arr[i] > pivot:
                right.append(arr[i])
            else:
                left.append(arr[i])
        return quick_sort(left) + [pivot] + quick_sort(right)
        

if __name__ == '__main__':
    arr = [4, 5,23, 7,8,0,3,56,-1,58,-7,90]
    print (quick_sort(arr))
