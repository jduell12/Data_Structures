class ListNode {
/**
 * Each ListNode holds a reference to its previous node as well as its next node in the List.
 */
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  /**
   * Our doubly-linked list class. It holds references to the list's head and tail nodes.
   */
  
  class DoublyLinkedList {
    constructor(node=null) {
      this.head = node;
      this.tail = node;
        if(node){
            this.length = 1
        } else {
            this.length = 0
        }
    }
  
    /**
     * Wraps the given value in a ListNode and
     * inserts it as the new head of the list.
     * Don't forget to handle 
     * the old head node's previous pointer accordingly.
     */
  
    add_to_head(value) {
      //your code here
      return;
    }
  
    /**
     * Removes the List's current head node,
     * making the current head's next node the new head
     * of the List. Returns the value of the removed
     * Node.
     */
    remove_from_head() {
      //your code here
      return;
    }
    
    /**
     * Wraps the given value in a ListNode and inserts
     *  it as the new tail of the list. 
     * Don't forget to handle 
     * the old head node's previous pointer accordingly.
     */
  
    add_to_tail(value) {
        //your code here
        return;
    }
  
    /**
     *
     * Removes the List's current tail node, making the
     *  current tail's previous node the new tail of
     *  the List. Returns the value of the removed Node.
     */
    remove_from_tail() {
       //your code here
       return;
    }
  
   /**
    * Removes the input node from its current spot in the 
    * List and inserts it as the new head node of the List.
    */
   move_to_front(node){
     //your code here
     return;
   }
   
   /**
    * Removes the input node from its current spot in the 
    * List and inserts it as the new tail node of the List.
    */
    move_to_end(node){
        //your code here
        return;
    }
    
    /**
     * Deletes the input node from the List, preserving the order of the other elements of the List.
     */
    delete(node){
        //your code here
        return;
    }
    
    /**
     * Finds and returns the maximum value of all the nodes in the List
     */
    get_max(){
        //your code here
        return;
    }
  }
  
  module.exports = {DoublyLinkedList, ListNode}