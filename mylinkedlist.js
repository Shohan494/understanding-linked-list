function LinkedList() {
    let Node = function(element){
        this.element = element;
        this.next = null;
        console.log("Created a new node by the Node constructor function", this.element, this.next);
    };

    let length = 0;
    let head = null;

    this.append = function(element){
        let node = new Node(element),
            current;
        console.log("Created a new 'node' variable by calling the Node constructor", node);
        if (head === null)
        { //first node on list
            console.log("head was null so head is now the first element that has been added");
            head = node;
            console.log("head = node;");
        } else {
            current = head;
            console.log("head is not equal to null;");
            console.log("so we have to loop through the last element of our list ");
            console.log("so starting point is current = head");
            //loop the list until find last item
            while(current.next){
                console.log("inside while block");
                console.log("Current.next", current.next);
                current = current.next;
                console.log("current = current.next");
                console.log("\n");
            }
            //get last item and assign next to added item to make the link
            current.next = node;
            console.log("current.next = node");
        }
        length++; //update size of list
    };
}

var list = new LinkedList();
list.append(1);
console.log("\n");
list.append(2);
console.log("\n");
list.append(3);
console.log("\n");
list.append(4);
