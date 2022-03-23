/* 
    Gievn an array of N, find the minimun number of swaps
    needed to make the array as sorted.


    To sole this problem ypu need to find the non 
    intersecting cycles


*/


const minSwaps = ( arr ) => {
    let cycleElements = 0
    let minSwaps = 0
    let unorderSet = new Set()
    for(let i = 0; i< arr.length; i++){
        if(!unorderSet.has(arr[i])){
            // if 'arr[i]' isn't in correct place
            if( arr[i] - 1 !== i ){ 
                let iter = arr[arr[i]-1]
                unorderSet.add(iter)
                cycleElements = 1
                while ( arr[i] !== iter) {
                    iter = arr[iter-1]                
                    cycleElements++
                    unorderSet.add(iter)
                }
                minSwaps += cycleElements - 1                         
            }else{
                unorderSet.add(arr[i])
            }
        }

        
    }

    return minSwaps

}


const minSwaps_2 = ( arr ) => {
    let pairs_arr = []
    let swaps = 0
    // know the actual position of elements (sorting)
    for(let i = 0; i< arr.length; i++){
        pairs_arr.push({first:arr[i]})
        pairs_arr.push({second:i})   
    }

    // sort pairs

    pairs_arr.sort( (a, b) => a[1] - a[2] )

    //Biuld the main logic
    let visited = Array.from({length: arr.length}, i => i = false);
    for(let i = 0; i< arr.length; i++){
        if(visited[i] || pairs_arr[i].second == i){
            continue
        }
        let node = i
        let cycle = 0
        while ( !visited[i] ) {
            visited[node]
            let next_node = pairs_arr[node].second
            node = next_node
            cycle++
        }

        swaps += cycle -1
    }

    return swaps
    
}


const arr = [2,40,5,1,3]

console.log( minSwaps_2( arr ) );
