/* 
    Given an array of size at-least two, find the smallest
    subarray that needs to be sorted in place so that enteire
    input array becomes sorted.
    If the input is already sorted, the function should return
    the start [-1,1], otherwise return start & end index of
    smallest subarray.
*/


// Verify if one lememnt of array is out of order
const isOutOfOrder = (arr, i) => {
    if (i === 0) return arr[i] > arr[1]
    if (i === arr.length) return arr[i] < arr[i - 1]
    return arr[i] > arr[i + 1] || arr[i] < arr[i - 1]
}

const subarraySort = (arr) => {
    let smallest = Number.MAX_SAFE_INTEGER
    let largest = Number.MIN_VALUE

    // Find if one element is out of order
    for (let i = 0; i < arr.length; i++) {
        if (isOutOfOrder(arr, i)) {
            // Elements that are out of order
            smallest = Math.min(smallest, arr[i])
            largest = Math.max(largest, arr[i])
        }
    }

    // Array is already sorted because smallest never changed
    if (smallest === Number.MAX_SAFE_INTEGER) {
        return [-1, -1]
    }

    // if we find one element out of order, it means that there exist
    // at least 2 elements that are out of order (smallest and largest elements)

    let left = 0 // looking for left index element shoulbe start ordering
    while (smallest > arr[left])
        left++

    let right = arr.length - 1 // looking for right index eleemt stop ordertin
    while (largest < arr[right])
        right--


    return [left, right]
}

const arr = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11]

console.log(subarraySort(arr));