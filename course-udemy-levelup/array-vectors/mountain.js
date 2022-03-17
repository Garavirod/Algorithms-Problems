/* 
    Write a function that takes input,
    an array of distinct integers, and returns
    the length of highest mountain.

    - A mountain is defined as adjacent integers that
    are strictly increasing until they reach a peak, at 
    which the become strictly decreasing.

    - At least 3 numbers are required to form a montain.
*/

function mountains( arr ){
    let i = 1, a = arr[i], highest = 0, 
    wasDesc = false, c = 1    

    while( i < arr.length ){
        if ( arr[i] > a ){            
            if(wasDesc){                              
                highest = Math.max(c, highest)
                c = 1
                wasDesc = false
            }else{
                c++
            }                        
        }else if(a === arr[i]){
            c--
        }else{
            if( wasDesc ){
                c++
            }else if( arr[i+1] < arr[i] ){
                wasDesc = true    
                i++
                c+=2            
            }else{
                c++;
                highest = Math.max(c, highest)
                c = 1
            }
        }
        a = arr[i]
        i++
    }

    return highest
}



function mountains_2( arr ){
    let n = arr.length, largest = 0
    for( let i = 1; i<n-2;){
        if( arr[i-1] < arr[i] && arr[i+1] < arr[i] ){
            let ctn = 1
            let j = i
            // ctn backwards (left)
            while( j>=1 && arr[j]>arr[j-1]){
                j--
                ctn++
            }
            
            // ctn forwards (right)
            while( i<=n-2 && arr[i]>arr[i+1]){
                i++
                ctn++
            }
            
            largest = Math.max(ctn, largest)
            
        }else{
            i++
        }
    }
    return largest
}



//const arr = [5,6,1,2,3,4,5,4,3,2,0,1,2,3,-2,4]
//const arr = [2,1,4,7,3,2]
const arr = [2,2]

console.log(mountains_2(arr));



