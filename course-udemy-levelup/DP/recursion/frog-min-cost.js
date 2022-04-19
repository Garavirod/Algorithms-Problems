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

const minFrogCost = (i, stones, memo = {}) => {
    if (i in memo) return memo[i]
    if (i === stones.length - 2) return Math.abs(stones[i] - stones[i + 1])
    if (i === stones.length - 3) {
        return Math.min(
            Math.abs(stones[i] - stones[i + 1]),
            Math.abs(stones[i] - stones[i + 2]),
        )
    }
    let a = Math.abs(stones[i] - stones[i + 1]) + minFrogCost(i + 1, stones, memo)
    let b = Math.abs(stones[i] - stones[i + 2]) + minFrogCost(i + 2, stones, memo)

    memo[i] = Math.min(a, b)
    return memo[i]
}

const stones = [30, 10, 60, 10, 60, 50]
console.log(minFrogCost(0, stones));