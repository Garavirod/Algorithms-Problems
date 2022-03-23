/* 
    Gievn an array of N, find the minimun number of swaps
    needed to make the array as sorted.
*/
const minSwaps = ( arr ) => {
    let pairs_arr = []
    let swaps = 0
    // Collect the original position of each element in array
    for(let i = 0; i< arr.length; i++)
        pairs_arr.push({first:arr[i], second:i})     

    // sort pairs based on arr[i].first
    pairs_arr.sort( (a, b) => a.first - b.first )
    
    let visited = Array.from({length: arr.length}, i => i = false);

    // verify how many cycles exist on array
    for(let i = 0; i< arr.length; i++){

        //Ignore if elelemt was already visted or it is on correct position
        if(visited[i] || pairs_arr[i].second === i){
            continue
        }
        let node = i
        let cycle = 0
        // find number of elements in a cycle
        while ( !visited[node] ) {
            visited[node] = true
            let next_node = pairs_arr[node].second
            node = next_node
            cycle++
        }

        /**
         * Since a swap implicates that at least two numbers
         * are not in correct position, in a cycle
         * 1 go to 2, 2 get back to 1 
         * two elelements in a cycle, so just one swap is required
         */
        swaps += cycle -1
    }

    return swaps
    
}


const arr = [5,4,3,2,1]

console.log( minSwaps( arr ) );
