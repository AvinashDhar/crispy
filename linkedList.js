/** Linked List implementation in JS */

//linked list contains nodes which has data and address of the next node.

// Defining Node class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;

        }
        this.size++;
    }

    append(value) {
        let node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prevNode = this.head;
            for(let i = 0; i < this.size - 1; i++){
                prevNode = prevNode.next;
            }
            prevNode.next = node;
        }
        this.size++;

    }

    insert(value, index){
        if(index < 0 || index >= this.size){
            console.log("invalid index");
            return;
        }
        let node = new Node(value);
            if(index === 0){
                this.prepend(value);
            }
            else{
                let prevNode = this.head;
                for(let i = 0; i < index - 1; i++){
                    prevNode = prevNode.next;
                }
                node.next = prevNode.next;
                prevNode.next = node;
                 
            }
            this.size++;
    }

    remove(index) {
        if(index < 0 || index >= this.size){
            console.log("invalid index");
            return;
        }
        let removeNode;
        if(index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
            return removeNode;
        }
        else{
            let prevNode = this.head;
            for(let i = 0; i < index - 1; i++){
                prevNode = prevNode.next;
            }
            removeNode = prevNode.next;
            prevNode.next = removeNode.next;
            return removeNode;
        }

    }

    print() {
        if(this.isEmpty()){
            console.log("This linked list is empty");
            return;
        }
        else{
            //let res;
            let currentNode = this.head;
            while(currentNode){
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
            //return res;
        }
    }


}

let linkedListObj = new LinkedList();
// console.log(linkedListObj.isEmpty());
// console.log(linkedListObj.getSize());

//testing prepend
// linkedListObj.prepend(1);
// linkedListObj.prepend(2);
// linkedListObj.prepend(3);
// // linkedListObj.print();

//testing append
// linkedListObj.append(9);
// linkedListObj.append(8);
// linkedListObj.print();
//console.log(linkedListObj.getSize());

//testing insert
//linkedListObj.insert(10,12); //invalid index
//  linkedListObj.prepend(1);
//  linkedListObj.prepend(2);
// linkedListObj.insert(10,0);
// linkedListObj.insert(20,2);
// linkedListObj.insert(30,5);
// linkedListObj.print();

//testing remove
// linkedListObj.append(1);
// linkedListObj.append(2);
// linkedListObj.append(3);
// linkedListObj.append(4);
// linkedListObj.print();
// console.log("=====removing=====")
// linkedListObj.remove(2);
// linkedListObj.print();