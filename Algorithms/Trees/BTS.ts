/* Node structure */
class NodeTree {
    public left:any;
    public right:any;
    public data:any;
    constructor(data:any) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

/* Binary Search Tree */
class BinaryTreeSearch {
    private root:any;
    constructor() {
        this.root = null;
    }

    /* OPERATIONS */
    public insert(data:any){
        var newNode = new NodeTree(data);
        if (this.root === null) {
            this.root = newNode;
        }else{
            this.insertNewNode(this.root,newNode);
        }
    }

    public remove(data:any){
        if(this.root !== null){
            this.removeNode(this.root,data);
        }else{
            return null;
        }
    }

    public search(refNode:NodeTree,data):any{
        if(refNode.data === data){
            return refNode;
        }else if( refNode === null){
            return null;
        }else if(data < refNode.data){
            return this.search(refNode.left,data);
        }else{
            return this.search(refNode.right,data);            
        }
    }

    public get getRoot() : any {
        return this.root;
    }
    
    public inorder(node:NodeTree){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);            
        }
    }

    public preorder(node:NodeTree){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);            
        }
    }

    public postorder(node:NodeTree){
        if(node !== null){
            this.preorder(node.left);            
            this.preorder(node.right);
            console.log(node.data);
        }
    }

    /* HELPERS */

    private insertNewNode(nodeRef:NodeTree,newNode:NodeTree){
        if(newNode.data < nodeRef.data){
            if (nodeRef.left !== null) {
                this.insertNewNode(newNode.left,newNode);
            } else {
                nodeRef.left = newNode;
            }
        }else{
            if (nodeRef.right !== null) {
                this.insertNewNode(nodeRef.right,newNode);
            } else {
                nodeRef.right = newNode;
            }
        }
    }


    private removeNode(refNode:NodeTree, data:any){
        if (data === refNode.data) {
            /* CASES REMOVEMENT */

            if (refNode.left === null && refNode.right === null) {
                // No children
                refNode = null;
                return refNode;                 
            }else if(refNode.right === null){
                // Left child only                
                refNode = refNode.left;
                return refNode;
            }else if(refNode.left === null){
                // Right child only                
                refNode = refNode.right;
                return refNode;
            }else{
                // both children
                var minRightNode = this.findMinNode(refNode.right);
                refNode.data = minRightNode.data;
                this.removeNode(refNode.right,minRightNode.data);
            }                                    

        }else if (data < refNode.data) {
            this.removeNode(refNode.left,data);
        }else if(data > refNode.data){
            this.removeNode(refNode.right,data);
        }
    }

    private findMinNode(refNode:NodeTree): NodeTree{
        if(refNode.left === null){
            return refNode;
        }
        return this.findMinNode(refNode.left);
    }
}


