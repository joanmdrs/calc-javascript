export class Stack {

    
    constructor() {
        this.elements = [];
        this.size = 0;
    }
    
    getSize(){
        return this.size;
    }

    isEmpty(){
        return (this.size == 0);
    }

    push(element) {
        this.elements.push(element);
        this.size++;
    }

    pop(){
        if(isEmpty()){
            return;
        }

        elem = this.elements.pop(this.size-1);
        this.size--;
        return elem;


    }



}