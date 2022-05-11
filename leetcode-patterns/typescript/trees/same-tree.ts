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
    // bouth empty
    if(!p && !q) return true 
    // if oneis empty or both val aren't equal
    if( !p || !q || q.val != p.val) return false

    return (
        isSameTree(q.left, p.left) &&
        isSameTree(q.right,p.right)
    )
};