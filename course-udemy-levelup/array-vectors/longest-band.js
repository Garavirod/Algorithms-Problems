/*
    Given an array containing N integers, find length
    of longest band.

    A band is defined as a subsecuence
    which can be ordered in such a manner all
    elements appear consecutive (ie with absolute difference
        of  1 between neighborhood elements
    )

    A longest band  is the band  (subsequence) which contains
    maximum integers.
    
*/


const longestBand = (arr) => {
    let unorderSet = new Set()

    arr.forEach(e => {
        unorderSet.add(e)
    });
    let largest = 1


    unorderSet.forEach(e => {
        let previous = e - 1
        // if previous exist ignore it because it could start a new chain
        if (!unorderSet.has(previous)) {
            let next_no = e + 1
            let cnt = 1 // adds up the  itself            
            while (unorderSet.has(next_no)) {
                next_no += 1
                cnt += 1 // count next one
            }
            largest = Math.max(largest, cnt)
        }
    })

    return largest
}


const arr = [1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6]

console.log(longestBand(arr));
