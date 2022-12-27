/**
 * Leetcode
 * 208. Implement Trie (Prefix Tree)
 */

class TrieNode{
    children:Object;
    endOfWord:boolean;
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie{
    root:TrieNode;
    constructor(){
        this.root = new TrieNode();
    }

    insert(word:string):void{
        let curr = this.root;
        for(let c of word){
            if(!(c in curr.children))
                curr.children[c] = new TrieNode()
            curr = curr.children[c];
        }
        curr.endOfWord = true;
    }

    search(word:string):boolean{
        let curr = this.root;
        for(let c of word){
            if(!(c in curr.children)) return false;
            curr = curr.children[c];
        }
        return curr.endOfWord;
    }

    startsWith(word:string):boolean{
        let curr = this.root;
        for(let c of word){
            if(!(c in curr.children)) return false;
            curr = curr.children[c];
        }
        return true;
    }
}