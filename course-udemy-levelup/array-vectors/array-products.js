/* 
    Inpmlement a function that takes in a vector
    of integers, and returns a vector of the same
    length, where each element in the output array
    is equal to the product of every other number
    in the input array, solve this priblem without using
    division.

*/

const arryProduct = ( arr ) => {
    let temp = 1, n = arr.length
    let product = Array.from( {length: arr.length},() => 1 )

    /* 
        a = [a1,a2,a3,a4,a5]

        b[i] is the multiplication of all elements which are
        left of itself (exluding itself)

        b = [1,a1,(a1*a2),(a1*a2*a3),(a1*a2*a3*a4) ]

        On inverse order b[i] 
        b = [(1)*(a2*a3*a4*a5),(a1)*(a3*a4*a5),(a1*a2)*(a4*a5),(a1*a2*a3)*(a5),(a1*a2*a3*a4)*1]
    */
    for(let i = 0; i<n; i++){
        product[i] = temp
        temp *= arr[i]
    }

    temp = 1
    for(let i = n-1; i>= 0; i--){
        product[i] *= temp
        temp *= arr[i]
    }

return product
}

const arr = [1,2,3,4,5]
console.log(arryProduct(arr));

