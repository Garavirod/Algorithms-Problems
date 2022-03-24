/* 
    Implement a function that takes in no-empty
    arrays of integers, finds the pair of numbers
    (one from each array) who absolute being closet to zero
    and returns a piar containing these two numnbers,
    with the first number from array 1.
    Only one suche pair will exist for the test.
*/

const minDifference = (arr1, arr2) => {
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)

    let minDifference = Math.abs(arr1[0] - arr2[0])
    let pair = [0, 0]
    let i = 1

    while (i <= arr1.length - 1) {
        if (Math.abs(arr2[i] - arr1[i]) < minDifference) {
            minDifference = Math.abs(arr2[i] - arr1[i])
            pair[0] = arr1[i]
            pair[1] = arr2[i]
        } if (Math.abs(arr2[i] - arr1[i - 1]) < minDifference) {
            minDifference = Math.abs(arr2[i] - arr1[i - 1])

            pair[0] = arr1[i - 1]
            pair[1] = arr2[i]
        } if (Math.abs(arr2[i] - arr1[i + 1]) < minDifference) {
            minDifference = Math.abs(arr2[i] - arr1[i + 1])
            pair[0] = arr1[i + 1]
            pair[1] = arr2[i]
        }
        i += 2

    }


    i = 1
    while (i <= arr1.length - 1) {
        if (Math.abs(arr2[i - 1] - arr1[i]) < minDifference) {
            minDifference = Math.abs(arr2[i - 1] - arr1[i])
            pair[0] = arr1[i]
            pair[1] = arr2[i - 1]
        } if (Math.abs(arr2[i + 1] - arr1[i]) < minDifference) {
            minDifference = Math.abs(arr2[i] - arr1[i + 1])
            pair[0] = arr1[i]
            pair[1] = arr2[i + 1]
        }
        i += 2

    }

    return pair
}

const arr1 = [23, 5, 10, 17, 30]
const arr2 = [26, 134, 135, 14, 19]


console.log(minDifference(arr1, arr2));

// [5, 10, 17, 23, 30]
// [14,19, 26, 134, 135]

// [17,19]