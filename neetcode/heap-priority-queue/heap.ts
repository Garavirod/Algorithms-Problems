
export abstract class Heap {
    heap: number[];

    abstract heapifyUp(): void;
    abstract heapfyDown(): void;

    constructor(values: number[]) {
        this.heap = [-1];
        for (let n of values) this.add(n);
    }

    public add(item: number): number {
        const len = this.heap.length;
        this.heap.push(item);
        if (len === 1) return item;
        // Reorder nodes 'bubbling up'
        this.heapifyUp();
        return this.heap[1];
    }

    public remove(): number | undefined {
        if (this.heap.length === 1) return undefined; // Heap is empty and only contains dummy data
        if (this.heap.length === 2) return this.heap.pop(); // Heap only contains a single number
        const prevRoot = this.heap[1];
        // Move last item from root
        this.heap[1] = this.heap.pop()!;
        // Reorder heap
        this.heapfyDown();
        return prevRoot;
    }

    get getHeap(): number[] { return this.heap; }
    get heepLength(): number { return this.getHeap.length - 1; }


    public isRoot(index: number): boolean { return index === 1; }
    public getParentIndex(index: number): number { return Math.floor(index / 2); }
    public getParentNonde(index: number): number { return this.heap[this.getParentIndex(index)]; }
    public getLeftNode(index: number): number { return this.heap[this.getLeftIndex(index)]; }
    public getRightNode(index: number): number { return this.heap[this.getRightIndex(index)]; }
    public getLeftIndex(index: number): number { return 2 * index; }
    public getRightIndex(index: number): number { return 2 * index + 1; }
}