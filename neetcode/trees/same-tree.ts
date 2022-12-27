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
 * Time complexity O(p+q)
 * Space complexity O(1)
 * Technique: Recusrtion
 * @param p 
 * @param q 
 * @returns {boolean}
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // some root is empty
    if(!p || !q) return (p === null && q === null)  
    // none is empty verify values 
    if(p.val === q.val) return(
        isSameTree(q.left,p.left) &&
        isSameTree(q.right, p.right)
    )
    return false
};