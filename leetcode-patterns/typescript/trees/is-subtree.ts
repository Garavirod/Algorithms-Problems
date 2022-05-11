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
 * Helper function
 * @param p 
 * @param q 
 * @returns {boolean}
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p || !q) return (p === null && q === null)   
    if(p.val === q.val) return(
        isSameTree(q.left,p.left) &&
        isSameTree(q.right, p.right)
    )
    return false

    
};

/**
 * Time complexity O(p*q)
 * Space complexity O(1)
 * Technique: Recusrtion
 * @param p 
 * @param q 
 * @returns {boolean}
 */
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!root || !subRoot) return (root === null && subRoot === null)    
    // subroot can be subtree of full root 
    if(isSameTree(root,subRoot)) return true
    // ckech if left or right side is subtree of root
    return (
        isSubtree(root.left,subRoot) ||
        isSubtree(root.right,subRoot)
    )
};