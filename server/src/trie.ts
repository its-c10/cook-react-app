class TrieNode {
    key: string;
    parent: TrieNode | null = null;
    children: Map<string, TrieNode> = new Map<string, TrieNode>();
    end: boolean = false;
    constructor(key: string) {
        this.key = key;
    }

    getWord(): string {
        let output: string[] = [];
        let node: TrieNode | null = this;

        while (node !== null) {
            output.unshift(node.key);
            node = node.parent;
        }

        return output.join('');
    }

}

class Trie {
    root: TrieNode = new TrieNode("dummy");

    insert(word: string): void {
        let node: TrieNode = this.root;
        
        for(let i = 0; i < word.length; i++) {
            if(!node.children.has(word[i])) {
                let newNode: TrieNode = new TrieNode(word[i]);
                node.children.set(word[i], newNode);
                newNode.parent = node;
                node = newNode;
            }
            if (i == word.length-1) {
                node.end = true;
            }
        }

    }

    contains(word: string): boolean {
        let node: TrieNode | any = this.root; // put "any" to combat the fact that children.get can return undefined (which in this context, it should NEVER do that)
        
        for(let i = 0; i < word.length; i++) {
            if(node.children.has(word[i])) { 
                node = node.children.get(word[i]);
            }else {
                return false; // not a valid word since it doesn't have the specified character.
            }
        }

        return node.end;
    }

    find(prefix: string): string[] {
        let node: TrieNode | any = this.root;
        let output: string[] = []

        for(let i = 0; i < prefix.length; i++) {
            if (node.children.has(prefix[i])) {
                node = node.children.get(prefix[i]);
            }else {
                return output;
            }
        }

        this.findAllWords(node, output);

        return output;

    }

    findAllWords(node: TrieNode | any, output: string[]): void {
        if(node.end) {
            output.unshift(node.getWord());
        }

        for(let child in node.children) {
            this.findAllWords(node.children.get(child), output);
        }

    }

}

export default Trie;