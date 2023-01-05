/* 133. Clone Graph */


//Definition for Node.
export class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

const dfs = (node: Node | null, memo: Map<Node, Node>): Node | null => {
    if (node === null) return null;
    if (memo.has(node)) return memo.get(node);
    let newNode = new Node(node.val);
    memo.set(node, newNode);
    // For old node's edge add the edge to new node
    for (let i = 0; <node.neighbors.length; i++) {
        newNode.neighbors.push(dfs(node.neighbors[i], memo));
    }
    return newNode;
}

function cloneGraph(node: Node | null): Node | null {
    let memo = new Map<Node, Node>();
    return dfs(node, memo);
};