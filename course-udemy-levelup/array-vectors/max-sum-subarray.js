/* 
    Implements a function that takes 
    an input a vector of integers, and prints the 
    maximun subarray sum thta can be formed.  
    If all number are negatives print 0  
*/


const maxSumSubarray = (arr) => {
    let maxSum = 0
    arr.forEach(e => { maxSum += e });

    if (maxSum < 0) return 0

    let acumulates = Array.from({ length: arr.length }, i => 0)
    acumulates[0] = arr[0]
    let maxIndexAcumu = 0
    let buket = 0
    for (let i = 1; i < arr.length; i++) {
        const acum = acumulates[i - 1] + arr[i]
        acumulates[i] = acum
        if (acum > buket) {
            buket = acum
            maxIndexAcumu = i
        }
    }

    let it = 1
    maxSum = acumulates[maxIndexAcumu]
    while (it !== maxIndexAcumu) {
        const s = acumulates[maxIndexAcumu] - acumulates[it - 1]
        maxSum = Math.max(s, maxSum)
        it++
    }

    it = acumulates.length - 1
    while (it !== maxIndexAcumu) {
        const s = acumulates[it] - acumulates[maxIndexAcumu - 1]
        maxSum = Math.max(s, maxSum)
        maxIndexAcumu++
    }
    return maxSum
}


const arr = [-1, 2, 3, 4, -2, 6, -8, 3]
console.log(maxSumSubarray(arr));
