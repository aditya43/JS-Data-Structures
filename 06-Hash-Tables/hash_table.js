class Hash_Table {
    /**
    * Create a Hash Table.
    *
    * @param {int} size : number of buckets our hash table will be having.
    */
    constructor(size) {
        this.buckets = Array(size);
        this.numBuckets = this.buckets.length;
    }

    hash(key) {
        let total = 0;

        for(let i in key) {
            total += key.charCodeAt(i);
        }

        return total % this.numBuckets; // Remainder will always be less than (this.numBuckets - 1).
    }

    insert(key, val) {
        let index = this.hash(key);

        if(!this.buckets[index]) {
            this.buckets[index] = new Node(key, val);
        } else if(this.buckets[index].key === key) {
            this.buckets[index].value = value;
        } else {
            let current_node = this.buckets[index];
            while(current_node.next) {
                if(current_node.next.key === key) {
                    current_node.next.val = val;
                    return;
                }
                current_node = current_node.next;
            }
            current_node.next = new Node(key, val);
        }
    }
}

class Node {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next || null;
    }
}

let ht = new Hash_Table(30);
ht.insert('Aditya Hajare', 'support@adiinviter.com');
ht.insert('John Doe', 'john@doe.com');
ht.insert('John Doe', '11111@doe.com');
ht.insert('Jane Doe', 'jane@doe.com');
console.log(ht.buckets);
