/* 
    There are N stones given in the form an array
    each element in array represents the height
    of ith stone.
    There is a frog who is initially on stone 1
    Frog will reapeat the following action some
    number of times to reach stone N:

        if the frog is currently on stone i
        jump to stone i+1 or jump to i+2, here a
        cost of |h1-hj| is incurred, where j is the
        stone to land on.

    Find the minimun possible total cost, incurred
    before the frog reaches stone NN.
*/

const minFrogCost = (stones) => {
    const n = stones.length
    let table = Array(n).fill(0)

    table[1] = Math.abs( stones[1] - stones[0] )

    for(let i = 2; i<n; i++){
    
        //Each element in table represent the minimun cost of n(i) stones
        const option1 = Math.abs( stones[i] - stones[i-1]) + table[i-1]
        const option2 = Math.abs( stones[i] - stones[i-2]) + table[i-2]
        
        table[i] = Math.min(option1,option2)
    }
    return table[n-1]
}

const stones = [30, 10, 60, 10, 60, 50]
console.log(minFrogCost(stones));