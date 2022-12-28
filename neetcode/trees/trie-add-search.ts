/* 
    Leetcode - 211. Design Add and Search Words Data Structure
*/

class NodeTrie {
    terminal: boolean;
    children: Object;
    constructor() {
        this.terminal = false;
        this.children = {};
    }
}

class WordDictionary {
    root: NodeTrie;
    constructor() {
        this.root = new NodeTrie();
    }

    addWord(word: string): void {
        let curr = this.root;
        for (let w of word) {
            if (!(w in curr.children)) curr.children[w] = new NodeTrie();
            curr = curr.children[w];
        }
        curr.terminal = true;
    }

    private dfs(j: number, root: NodeTrie, word: string): boolean {
        let curr = root;
        for (let i = j; i < word.length; i++) {
            let w = word[i];
            if (w === '.') {
                for (let key in curr.children) {
                    return (this.dfs(i + 1, curr.children[key], word)) ? true : false;
                }
            } else {
                if (!(w in curr.children)) return false;
                curr = curr.children[w];
            }
        }
        return curr.terminal;
    }

    search(word: string): boolean {
        return this.dfs(0, this.root, word);
    }
}