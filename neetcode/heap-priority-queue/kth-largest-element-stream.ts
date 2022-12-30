/**
 * 703. Kth Largest Element in a Stream
 */

import { MinHeap } from "./min-heap";

class KthLargest {
    private minHeap:MinHeap;
    k:number;
    constructor(k: number, nums: number[]) {
        this.minHeap = new MinHeap(nums);
        this.k = k;
        while(this.minHeap.heepLength > this.k){
            this.minHeap.remove();
        }
    }

    add(val: number): number {
        this.minHeap.add(val);
        if(this.minHeap.heepLength > this.k) this.minHeap.remove();
        return this.minHeap.getHeap[1];
    }
}