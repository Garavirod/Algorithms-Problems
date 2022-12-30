import { Heap } from "./heap";

/**
 * Create a Maxheap
 * Complexity
 * Access the min/max value: O(1)
 * Inserting an element: O(log n) 
 * Removing an element: O(log n)
 */
export class MaxHeap extends Heap {

    /**
     * Reorder the nodes whenever a new node is added.
     * Considering parent node must be the greater
     */
    heapifyUp(): void {
        let i = this.heap.length - 1;
        const val = this.heap[i];
        while (!this.isRoot(i) && this.getParentNonde(i) < val) {
            // swap
            [this.heap[this.getParentIndex(i)], this.heap[i]] = [val, this.getParentNonde(i)];
            i = this.getParentIndex(i);
        }
    }

    /**
     * Reorder the nodes whenever a node is deleted.
     * When we remove the root node, the last node of the tree takes its place.
     */
    heapfyDown(): void {
        if (this.heap.length < 3) return;
        let i = 1;
        const currentVal = this.heap[1];
        let left = this.getLeftNode(i);
        let right = this.getRightNode(i);

        while (
            left !== undefined &&
            (currentVal < left || currentVal < right)
        ) {
            /* 
                Due to currentVal is smaller than left and right
                swap parent for left fi right does not exist or is 
                greater than left. Otherwise go to else statement.
            */
            if (
                currentVal < left &&
                (right === undefined || left > right)
            ) {
                // swap left for parent
                [this.heap[this.getLeftIndex(i)], this.heap[i]] = [currentVal, left];
                i = this.getLeftIndex(i);
            } else { // because right is smaller than left and currentVal is grater than left and right
                // swap rigth for parent
                [this.heap[this.getRightIndex(i)], this.heap[i]] = [currentVal, right];
                i = this.getRightIndex(i);
            }
            left = this.getLeftNode(i);
            right = this.getRightNode(i);
        }
    }
}


