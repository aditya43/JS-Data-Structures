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

    /** Depth First Traversal Method */
    depth_first_traversal(iterator_func, order) {
        if(order === 'preorder') {
            iterator_func(this.value);
        }

        if(this.left) {
            this.left.depth_first_traversal(iterator_func, order); // Traverse left node.
        }

        if(order === 'inorder') {
            iterator_func(this.value);
        }

        if(this.right) {
            this.right.depth_first_traversal(iterator_func, order); // Traverse right node.
        }

        if(order === 'postorder') {
            iterator_func(this.value);
        }
    }

    /** Breadth First Traversal */
    breadth_first_traversal(iterator_func) {
        let queue = [this]; // Put our root node into the queue initially.

        while(queue.length) {
            let node = queue.shift();

            iterator_func(node.value);

            if(node.left !== null) {
                queue.push(node.left);
            }

            if(node.right !== null) {
                queue.push(node.right);
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

// console.log(bst.contains(105));

// bst.depth_first_traversal(value => console.log(value), 'postorder');
bst.breadth_first_traversal(value => console.log(value));