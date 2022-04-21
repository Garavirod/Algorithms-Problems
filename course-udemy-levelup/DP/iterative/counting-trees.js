/* 
    Count the number of binary search trees
    that can be formed using N nodes, numbered
    from 1 to N. See the two test cases.
*/


const countTrees = (nodes) => {
   let table = Array(nodes+1).fill(0)
   table[0] = table[1] = 1

   for (let i = 2; i <= nodes; i++) {
        for (let j = 1; j <= i; j++) 
            table[i] += (table[j-1]*table[i-j])                
   }

   return table[nodes]
}


console.log(countTrees(3));