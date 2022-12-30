/**
 * 1046. Last Stone Weight
 */

import { MaxHeap } from "./max-heap";


function lastStoneWeight(stones: number[]): number {
    let maxHeap =  new MaxHeap(stones);
    while(maxHeap.heepLength > 1){
        const st1 = maxHeap.remove()!;
        const st2 = maxHeap.remove()!;
        if(st1 !== st2){
            const newSt = st1 - st2;
            maxHeap.add(newSt);
        }
    }
    return (maxHeap.heepLength === 1) ? maxHeap.getHeap[1] : 0;
};