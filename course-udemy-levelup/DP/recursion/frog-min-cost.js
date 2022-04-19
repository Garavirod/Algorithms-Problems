/* 
    There are N stones given in the form an array
    each element in array represents the height
    of ith stone.
    There is a frog who is initially on stone 1
    Frog will reapeat the following action some
    number of times to reach stone N:

        -if the frog is currently on stone i
        jump to stone i+1 or jump to i+2, here a
        cost of |h1-hj| is incurred, where j is the
        stone to land on.

    Find the minimun possible total cost, incurred
    before the frog reaches stone NN.
*/

const minFrogCost = (i, stones) => {    
    if (i === stones.length - 1) return stones[i]
    if (i > stones.length - 1) return Number.MAX_SAFE_INTEGER

    let minCost = 0
    const a = Math.abs(stones[i] - minFrogCost(i + 1, stones))
    const b = Math.abs(stones[i] - minFrogCost(i + 2, stones))
    console.log(a);
    console.log(b);
    minCost += Math.min(a, b)
    return minCost
}

const stones = [30, 10, 60, 10, 60, 50]
console.log(minFrogCost(0, stones));