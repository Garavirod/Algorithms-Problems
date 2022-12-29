/**
 * Create a Minheap
 * Complexity
 * Access the min/max value: O(1)
 * Inserting an element: O(log n) 
 * Removing an element: O(log n)
 */
class MinHeap {
    heap: number[];
    constructor(values: number[]) {
        this.heap = [-1];
        for (let n of values) this.add(n);
    }

    add(item: number): number {
        const len = this.heap.length;
        this.heap.push(item);
        if (len === 1) return item;
        // Reorder nodes 'bubbling up'
        this.heapifyUp();
        return this.heap[1];
    }

    remove(): number | undefined {
        if (this.heap.length === 1) return undefined; // Heap is empty and only contains dummy data
        if (this.heap.length === 2) return this.heap.pop(); // Heap only contains a single number
        const prevRoot = this.heap[1];
        // Move last item from root
        this.heap[1] = this.heap.pop()!;
        // Reorder heap
        this.heapfyDown();
        return prevRoot;
    }

    /**
     * Reorder the nodes whenever a new node is added.
     * Considering parent node must be the smaller
     */
    private heapifyUp(): void {
        let i = this.heap.length - 1;
        const val = this.heap[i];
        while (!this.isRoot(i) && this.getParentNonde(i) > val) {
            // swap
            [this.heap[this.getParentIndex(i)], this.heap[i]] = [val, this.getParentNonde(i)];
            i = this.getParentIndex(i);
        }
    }

    /**
     * Reorder the nodes whenever a node is deleted.
     * When we remove the root node, the last node of the tree takes its place.
     */
    private heapfyDown(): void {
        if (this.heap.length < 3) return;
        let i = 1;
        const currentVal = this.heap[1];
        let left = this.getLeftNode(i);
        let right = this.getRightNode(i);

        while (
            left !== undefined &&
            (currentVal > left || currentVal > right)
        ) {
            /* 
                Due to currentVal is greater than left and right
                swap parent for left fi right does not exist or is 
                greater than left. Otherwise go to else statement.
            */
            if (
                currentVal > left &&
                (right === undefined || left < right)
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

    private isRoot(index: number): boolean {
        return index === 1;
    }

    private getParentIndex(index: number): number {
        return Math.floor(index / 2);
    }

    private getParentNonde(index: number): number {
        return this.heap[this.getParentIndex(index)]
    }

    private getLeftNode(index: number): number {
        return this.heap[this.getLeftIndex(index)];
    }
    private getRightNode(index: number): number {
        return this.heap[this.getRightIndex(index)];
    }

    private getLeftIndex(index: number): number {
        return 2 * index;
    }
    private getRightIndex(index: number): number {
        return 2 * index + 1;
    }
}


