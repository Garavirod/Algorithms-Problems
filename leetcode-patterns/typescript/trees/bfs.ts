class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


/**
 * Time complexity O(N)
 * Space complexity O(N)
 * Technique: Recurtion
 * @param root 
 * @returns {number}
 */
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right))
};


/**
 * Time complexity O(N)
 * Space complexity O(N)
 * Technique: Stack
 * @param root 
 * @returns {number}
 */
function maxDepth2(root: TreeNode | null): number {
    let stack = [{node:root, depth:1}]
    let res = 0
    while(stack.length !== 0){
        const {node,depth} = stack.shift()
        if(node){
            res = Math.max(res,depth)
            stack.unshift({node:node.left,depth:(depth+1)})
            stack.unshift({node:node.right,depth:(depth+1)})
        }
    }
    return res
};

