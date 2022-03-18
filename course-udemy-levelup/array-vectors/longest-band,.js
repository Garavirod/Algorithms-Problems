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


function longestBand( arr ){
    let unorderSet = new Set()

    arr.forEach(e => {
       unorderSet.add(e) 
    });
    let largest = 1
    console.log(unorderSet);

    unorderSet.forEach(e => {
        let previous = e - 1
        if( unorderSet.has( previous ) ){
            let next_no = e + 1
            let cnt = 2
            while ( unorderSet.has(next_no) ) {
                next_no += 1
                cnt += 1
            }
            largest = Math.max(largest,cnt)
        }
    })

    return largest
}


const arr = [1,9,3,0,18,5,2,10,7,12,6]

console.log(longestBand( arr ));