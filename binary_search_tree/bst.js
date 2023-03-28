/**
Binary search trees are a data structure that enforce an ordering over 
the data they store. That ordering in turn makes it a lot more efficient 
at searching for a particular piece of data in the tree. 
This part of the project comprises two days:
1. Implement the methods `insert`, `contains`, `get_max`, and `for_each`
   on the BSTNode class.
2. Implement the `in_order_traversal`, `bft_traversal`, and `dft_traversal` methods
   on the BSTNode class.
 */
class BinarySearchTree {
    // BinarySearchTree constructor function
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  
    // insert the given value into the tree 
    insert(value) {
     //your code here
     return 
    }
  
    // Return the maximum value found in the tree
    max() {
     //your code here
     return
    }
  
    //  Return True if the tree contains the value and False if it does not
    contains(target) {
      //your code here
      return
    }
    
    get_max(){
      //your code here
      return
    }
  
    // Call the function `callbackFunc` on the value of each node
    for_each(callbackFunc) {
     //your code here
     return 
    }
    
    //-------- Part 2 -----------
    // Return the order of nodes in order from low to high
    // Hint:  Use a recursive, depth first traversal
    in_order_traversal(){
        const nodes = []
        //your code here
         return nodes;
    }
    
    // Return the order of nodes when doing an iterative breadth first traversal
    bft_traversal(){
        const nodes = []
        //your code here
         return nodes;
    }
    
    // Return the order of nodes when doing an iterative depth first traversal
    dft_traversal(nodes=[]){
        //your code here
         return nodes;
    }
    
     //-------- Stretch Goals -----------
     //Note: Research may be required
     
     // Return the order of nodes when doing a Pre-order recursive DFT
    pre_order_dft(nodes = []){
        //your code here
         return nodes;
    }
    
    // Return the order of nodes when doing a Post-order recursive DFT
    post_order_dft( nodes = []){
  
        //your code here
         return nodes;
    }
  }
  
  module.exports ={BinarySearchTree}