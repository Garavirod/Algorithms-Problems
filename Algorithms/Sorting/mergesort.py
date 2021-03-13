def merge(a,b):
    c = list()
    i,j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] < b[j]:
            c.append(a[i])
            i+=1
        else:
            c.append(b[j])
            j+=1    
    return c + a[i:] + b[j:]


def merge_sort(arr):
    if len(arr) <= 1:        
        return arr
    else:
        half = len(arr)//2
        first = arr[:half]
        second = arr[half:]        
        return merge(merge_sort(first),merge_sort(second))

if __name__ == '__main__':    
    arr = [3,5,-1,56,78,0,90,-3,44,11,70,106]    
    print(merge_sort(arr))
