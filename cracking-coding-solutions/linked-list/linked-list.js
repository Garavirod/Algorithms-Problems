class Node {
    constructor(value = null){
        this.next_node = null;
        this.value = value;
    }
}


class LikedList {
    constructor(){
        this.head = null;
    }

    append(value){
        let new_node = new Node(value);
        let current;
        if(this.isEmpty()){
            this.head = new_node;            
        }else{
            current = this.head;
            while(current.next_node)
                current = current.next_node;
            
            current.next_node = new_node;
        }

        return this
    }


    removeElement(value){
        let current = this.head;
        while(current.next_node){
            
        }
    }

    isEmpty(){
        return this.head === null;
    }


    

}