class Node{
    constructor( value ){
        this.next = null;
        this.value = value;
    }
}

class LinkedList{
    constructor(){
        this.head = null;        
    }

    isEmpty(){
        return this.head === null;
    }

    append(value){
        let new_node = new Node(value);
        if(this.isEmpty()){
            this.head = new_node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = new_node;
        }
        return this.head;
    }

    print(){
        if(!this.isEmpty()){
            let current = this.head;
            while(current.next){
                console.log(current.value);
                current = current.next;
            }
            console.log(current.value);
        }
    }

    size(){
        if(this.isEmpty()) return 0;
        else{
            let current = this.head;
            let c = 1;
            while(current.next){
                current = current.next;
                c++;
            }
            return c;
        }
    }

    remove(value){
        if(!this.isEmpty()){
            
            if(this.head.value === value){  
                this.head = this.head.next;          
                return this.head;        
            }           
            else{            
                let current = this.head;                
                while(current.next){                    
                    if(current.next.value === value){
                        //previus = current.next.next;
                        current.next = current.next.next;
                        //current = previus.next;
                        return this.head;
                    }
                    current = current.next;
                    //previus = previus.next;
                }
                return this.head;
            }   
        }
    }


    removeDuplicates(){
        let ocurrences = {}
        let current = this.head;
        while (current.next) {
            if(ocurrences[parseInt(current.value)]){
                ocurrences[parseInt(current.value)] += 1; 
            }else{
                ocurrences[parseInt(current.value)] = 0;                
            }
            current = current.next;
        }

        if(ocurrences[parseInt(current.value)]){
            ocurrences[parseInt(current.value)] += 1; 
        }else{
            ocurrences[parseInt(current.value)] = 0;                
        }
        console.log(ocurrences);
        for(let k in ocurrences){            
            if(parseInt(ocurrences[k])>1)
            this.remove(parseInt(ocurrences[k]));
        }
        return this.head;
    }

}


/* Create a linked list */
/* let list = new LinkedList(); */

/* Add elements to linked list */
/* list.append(1);
list.append(2);
list.append(3);
list.append(4); */

/* Remove duplicates*/
let list = new LinkedList();
/* for(let i = 0; i<20; i++)
list.append(i); */

list.append(1);
list.append(3);
list.append(1);
list.append(1);
list.append(6);

list.removeDuplicates();
list.print();
