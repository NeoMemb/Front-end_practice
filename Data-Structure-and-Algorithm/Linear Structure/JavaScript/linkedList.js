// To create link list.

/**
 * Node constructs
 * @class
 * @classdesc A node that creates an obj with value and next (next default to null)
 * @author Ariori Abdulrafiu
 * @version 1.0
 * 
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/**
 * Single Linked list
 * @class
 * @classdesc 
 */
class Singly_linked_list{
    /**
     * @description: this.head and this.tail serves as indicator. this.head is important, while this.tail is essential to achieve
     * my O(1) as a result of transversing
     * @constructor
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.llArray = [];
    }
    /**
     * Checks if the linkedList is empty.
     * @returns {boolean}
     */
    isEmpty(){
        return this.size === 0;
    }
    /**
     * @returns {int} - size of data in the llist
     */
    getSize(){
        return this.size;
    }
    prepend(data){
        /**
         * @description: Create a node instance object (having value and next), newNode.next is then assign to head and this.head
         * is then assign a new node, which will just have value and (next=null). I use try/catch block to avoid unnecessary adding 
         * up of this.size.
         * 
         */
        try {
            const newNode = new Node(data);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.llArray.unshift(data);
            this.size += 1;
        }
        catch{
            console.log(`Invalid data to prepend`);
        }
    }
    append(data){
        try {
            this.llArray.push(data);
            let newNode = new Node(data);
            if (this.head == null|| !this.head){
                this.head = newNode;
                this.tail = newNode;
                this.size++;
                return;
            }
            else {
                this.tail.next = newNode;
                this.tail = newNode;
                this.size++;
            }
        }
        catch {
            console.log(`Invalid data to append`);
        }
    }
    printList(){
        /**
         * While using O(n), this will be implemented:
         *   let values = [];
         *   let current = this.head;
         *   while (current) {
         *       values.push(current.value);
         *       current = current.next;
         *   }
         *   return values.join("->") + "-> null";
         */
        
        return this.llArray;
        
    }
    /**
     * Delete a node after a node
     * @param {any} node 
     * @returns {null} - if !(@param)
     */
    deleteAfter(node){
        try {
            if (node === null) {
                console.log(`There's no node after ${node}`);
                return null;
            }
            else {
                const deletedNode = node.next;
                node.next = deletedNode.next;
                if (deletedNode === null)
                    this.tail = node;
                this.size--;
                const index = this.llArray.indexOf(deletedNode.value);
                if (index !== -1)
                    this.llArray.splice(index, 1);
                console.log(`Deleted node with value of ${deletedNode.value}`);
                return deletedNode.data;
            }
        }
        catch {
            console.log(`Invalid data to delete`)
        }
    }
}

const myList = new Singly_linked_list();
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

letters.forEach((item) => {
    myList.append(item)
})

// myList.deleteAfter("b");
console.log(`List size: ${myList.getSize()}\nArray size: ${letters.length}`);
let list = myList.printList();
console.log(list);
