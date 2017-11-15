function LinkedList() 
{
  var Node = function(element) 
  { // {1}        
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
    
    this.insert = function(position, element) {};
    
    this.removeAt = function(position) {};
    
    this.remove = function(element) {};
    
    this.indexOf = function(element) {};
    
    this.isEmpty = function() {};
    
    this.size = function() {};
    
    this.toString = function() {};
    
    this.print = function() {};
}

var list = new LinkedList();
list.append(15);
list.append(10)