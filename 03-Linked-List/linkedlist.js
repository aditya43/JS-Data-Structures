class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        let node = new Node(value, this.head, null);

        if(this.head) {
            this.head.prev = node; // Linkedlist is not empty so set the prev of existing node at head to this node
        } else {
            this.tail = node; // Linkedlist is empty, so both head and tail will point to this node
        }

        this.head = node; // Regardless of Linkedlist is empty or not, set the head of Linkedlist to this node
    }

    addToTail(value) {
        let node = new Node(value, null, this.tail);

        if(this.tail) {
            this.tail.next = node; // Linkedlist is not empty so set the next of existing node at tail to this node
        } else {
            this.head = node; // Linkedlist is empty, so both head and tail will point to this node
        }

        this.tail = node; // Regardless of Linkedlist is empty or not, set the tail of Linkedlist to this node
    }

    removeHead() {
        if(!this.head) {
            return null; // LinkedList is empty
        }

        let val = this.head.value;

        this.head = this.head.next;

        if(this.head) {
            this.head.prev = null; // LinkedList is NOT empty
        } else {
            this.tail = null; // LinkedList is empty
        }

        return val;
    }

    removeTail() {
        if(!this.tail) {
            return null;
        }

        let val = this.tail.value;

        this.tail = this.tail.prev;

        if(this.tail) {
            this.tail.next = null; // LinkedList is NOT empty
        } else {
            this.tail = null; // LinkedList is empty
        }

        return val;
    }

    search(searchVal) {
        let currentNode = this.head; // Search from head to tail

        while(currentNode) {
            if(currentNode.value === searchVal) {
                return currentNode;
            }
            currentNode = currentNode.next; // Move on to the next node in LinkedList
        }

        return null; // Reached end of LinkedList, did not find the value
    }

    indexOf(searchVal) {
        let indexes = [];
        let currentIndex = 0;
        let currentNode = this.head;

        while(currentNode) {
            if(currentNode.value === searchVal) {
                indexes.push(currentIndex);
            }

            currentNode = currentNode.next;
            currentIndex++;
        }

        return indexes;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

let ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
ll.addToHead(200);
ll.addToHead(400);
ll.addToHead(200);


console.log(ll);
console.log(ll.indexOf(200));

// console.log(ll.removeHead());
// console.log(ll);

// console.log(ll.removeTail());
// console.log(ll);