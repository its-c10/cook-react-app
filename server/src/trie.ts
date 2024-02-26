// use this https://medium.com/@shenchenlei/how-to-implement-a-prefix-matcher-using-trie-tree-1aea9a01013
class TrieNode {
    children: Record<string, TrieNode>;
    val: string;
    char: string;
  
    constructor(val = '', char = '') {
      this.val = val;
      this.children = {};
      this.char = char;
    }
  }
  
class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode('', '');
    }

    insert(word: string): void {
        let curNode = this.root;
        word.split('').forEach((w, i) => {
        const isFinalChar = i === word.length - 1;
        const hasNode = curNode.children[w];
        if (hasNode) {
            curNode = hasNode;
        } else {
            // add a new node to curNode children.
            const newNode = new TrieNode('', w);
            curNode.children[w] = newNode;
            curNode = newNode;
        }
        if (isFinalChar) {
            curNode.val = word;
        }
        });
    }

    search(word: string): boolean {
        let curNode = this.root;
        const array = word.split('');
        let i = 0;
        while (i < array.length) {
        const w = array[i];
        curNode = curNode.children[w];
        if (curNode === undefined) {
            return false;
        }
        i++;
        }
        return curNode ? curNode.val === word : false;
    }

    startsWith(prefix: string): boolean {
        let curNode = this.root;
        const array = prefix.split('');
        let i = 0;
        while (i < array.length) {
            const w = array[i];
            curNode = curNode.children[w];
            if (curNode === undefined) {
                return false;
            }
            i++;
        }
        console.log("Prefix: " + prefix);
        console.log("Keys: " + Object.keys(curNode.children).length); 
        return curNode
        ? curNode.val === prefix || Object.keys(curNode.children).length > 0
        : false;
    }
}
  
export default Trie;