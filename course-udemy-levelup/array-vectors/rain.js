/* 
    Given an non-negative integers representing an elevation map where
    the width of bar is 1, compute how much water it can trap after raining
*/


const rain = (arr) => {

    if( arr.length === 2 ) return 0

    let higher_left = new Array( arr.length - 1 )
    let higher_right = new Array( arr.length - 1 )
    let t = 0
    let maxWater = 0    

    // Collection higher leff
    for (let i = 1; i < arr.length; i++) {
        t = Math.max(t, arr[i])
        higher_left[i] = t
    }
    // collecting higer right
    t = 0
    for (let i = arr.length - 1; i > 0; i--) {
        t = Math.max(t, arr[i])
        higher_right[i] = t
    }
    // How much watter can arr[i] trap taking like reference the lowest between left[i] and right[i]?
    for (let i = 1; i < arr.length; i++) {
        t = Math.min(higher_left[i], higher_right[i])
        maxWater += Math.abs(t - arr[i])
    }

    console.log(higher_left);
    console.log(higher_right);

    return maxWater
}

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(rain(arr));