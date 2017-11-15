function LinkedList() 
{
  var Node = function(element) 
  {     
    this.element = element;        
    this.next = null;    
  };
  
    var length = 0; // {2}
    var head = null; // {3}
    
    this.append = function(element) 
    {
      var node = new Node(element);
      var current;
      
      if(head === null)
      {
        head = node; // ???
      }
      else
      {
        current = head; //{4}
        //loop the list until find last item
        while(current.next)
        {           
          current = current.next;
        }
        current.next = node; //{5}    
      }
    length++; //update size of list //{6} };
      
};


    this.toString = function(){

        let current = head,
            string = '';

        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }
        return string;

    };

    this.print = function(){
        console.log(this.toString());
};

}

var list = new LinkedList();
list.append(15);
list.append(10)

list.print();