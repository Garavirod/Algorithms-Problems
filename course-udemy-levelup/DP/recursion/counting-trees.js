/* 
    Count the number of binary search trees
    that can be formed using N nodes, numbered
    from 1 to N. See the two test cases.
*/


const countTrees = (nodes, memo = {}) => {
    if (nodes in memo) return memo[nodes]
    if( nodes <= 1 ) return 1
    if( nodes === 2 ) return 2

    let bts = 0
    for (let i = 1; i <= nodes; i++) {
        bts += countTrees(i-1, memo)*countTrees(nodes-i, memo)         
    }
    memo[nodes] = bts
    return bts
}


console.log(countTrees(3));