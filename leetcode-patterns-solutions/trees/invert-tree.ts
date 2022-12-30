
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
 * 
 * @param root 
 * @returns {TreeNode|null}
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) return root

    //swap nodes pointers
    const temp = root.right
    root.right = root.left
    root.left = temp
    // swap pointers the remaining nodes (left, right)
    invertTree(root.left)
    invertTree(root.right)
    return root

};