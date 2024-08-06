# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:        
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if(p == None or q == None): 
            return q == p
        if(p.val != q.val): 
            return False
        else:
            a = self.isSameTree(p.left, q.left)
            b = self.isSameTree(p.right, q.right)
        return a and b
