function LinkedList() {
    let Node = function(element){
        this.element = element;
        this.next = null;
        console.log("Created a new node by the Node constructor function", this.element, this.next);
    };

    let length = 0;
    let head = null;

    this.append = function(element)
    {
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

    
    this.removeAt = function(position)
    {
    //check for out-of-bounds values
    if (position > -1 && position < length)
    {
        console.log("The given position is valid");
        var current = head, // {2}
        previous, // {3}            
        index = 0; // {4}
        console.log("current = head, index = 0");
        console.log("current", current);
        
        //removing first item        
        if (position === 0)
        { // {5}
            console.log("The position is 0, means we have to delete the head element");
            head = current.next;
            console.log("head = current.next");
            console.log("head ", head)
            console.log("So we have moved the (current.next) element to the (head)");            
        } 
        
        else 
        {
        while (index++ < position)
        {
        console.log("\n");
        console.log("inside while loop")
        console.log("index and position", index, position);
        console.log("\n");
        previous = current;     // {7}
        console.log("previous = current");
        console.log("previous", previous);
        console.log("\n");           
        current = current.next; // {8}
        console.log("current = current.next"); 
        console.log("current", current);
        console.log("\n");
        }
        //link previous with current's next: skip it to remove 
        console.log("Outside of while loop");          
        previous.next = current.next; // {9}
        console.log("previous.next = current.next");        
        console.log("previous.next", previous.next);
        console.log("\n");

    }   
        length--; // {10}
        console.log("current.element", current.element);
        return current.element;

    } else 
    {        
        return null; // {11}
    } };
    
}


var list = new LinkedList();
list.append(1);
console.log("\n");
list.append(2);
console.log("\n");
list.append(3);
console.log("\n");
list.append(4);
console.log("\n");
console.log("\n");
//list.removeAt(0);
//console.log("\n");
//console.log("\n");
list.removeAt(1);


