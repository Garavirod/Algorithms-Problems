
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * The diameter of binary tree si the longest path from a node A to B
 * 
 * To get the diameter in each node through bottom up aproach is
 * D =  Lh + rh + 2
 * where lh and rh are heights of left and right
 * 
 * @param root 
 * @returns {Number}
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
    var diameter = 0;
    function dfs(root: TreeNode | null) {
        if (!root) return -1;
    
        let left = dfs(root.left);
        let right = dfs(root.right);
        diameter = Math.max(diameter, 2 + left + right);
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return diameter;
};

