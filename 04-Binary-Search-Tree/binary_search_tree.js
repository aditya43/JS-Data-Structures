class Binary_Search_Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(value <= this.value) {
            if(this.left === null) {
                this.left = new Binary_Search_Tree(value); // Attach new node to left of current node.
            } else {
                this.left.insert(value); // Traverse tree recursively until we find a node with empty left.
            }
        } else if (value > this.value) {
            if(this.right === null) {
                this.right = new Binary_Search_Tree(value); // Attach new node to right of current node.
            } else {
                this.right.insert(value); // Traverse tree recursively until we find a node with empty right.
            }
        }
    }

    contains(value) {
        if(value === this.value) {
            return true; // Found the value at first node.
        } else if(value < this.value) {
            if(this.left === null) {
                return false; // There is no left node.
            } else {
                return this.left.contains(value); // Traverse tree recursively until we find a node value.
            }
        } else if (value > this.value) {
            if(this.right === null) {
                return false; // There is no right node.
            } else {
                return this.right.contains(value); // Traverse tree recursively until we find a node value.
            }
        }
    }
}

let bst = new Binary_Search_Tree(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
console.log(bst.contains(105));