function LinkedList() {

    let Node = function(element){

        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(element){

        let node = new Node(element),
            current;

        if (head === null){ //first node on list
            head = node;
        } else {

            current = head;

            //loop the list until find last item
            while(current.next){
                current = current.next;
            }

            //get last item and assign next to added item to make the link
            current.next = node;
        }

        length++; //update size of list
    };

    this.removeAt = function(position)
    {
    //check for out-of-bounds values
    if (position > -1 && position < length)
    {
         var current = head, // {2}            
         previous, // {3}            
         index = 0; // {4}
        //removing first item        
        if (position === 0){ // {5}            
            head = current.next;        
    } else {
        while (index++ < position)
        { // {6}
        previous = current;     // {7}                
        current = current.next; // {8}            }
        //link previous with current's next: skip it to remove            
        previous.next = current.next; // {9}        }
        length--; // {10}
        return current.element;
    } else 
    {        
        return null; // {11}
    } };
}