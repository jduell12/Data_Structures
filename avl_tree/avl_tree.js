/**
 * Node class to keep track of the data internal to individual nodes
 */

class Node {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

/**
 * A tree class to keep track of things like the balance factor and the rebalancing logic
 */
class AVLTree {
    constructor(node=null){
        this.node = node;
        this.height = -1;
        this.balance = 0;
    }
    
    //Display the whole tree. Uses recursive def.
    display(level=0, pref=""){
        this.update_height(); // update height before balancing
        this.update_balance(); 
        
        if(this.node !== null){
            let str = `- ${level}, ${pref}, ${this.node.key}\n[${this.height}: ${this.balance}]`
            if(this.height === 0){
                str += 'L'
            } else {
                str += ' '
            }
            console.log(str);
            if(this.node.left !== null){
                this.node.left.display(level + 1, '<')
            }
            if(this.node.right !== null){
                this.node.right.display(level+1, '>')
            }
        }
    }
    
    //Computes the maximum number of levels there are in the tree
    update_height(){
        //your code here
        return;
    }
    
    //Updates the balance factor on the AVLTree class
    update_balance(){
        //your code here
        return;
    }
    
    /**
     *  Perform a left rotation, making the right child of this
     * node the parent and making the old parent the left child
     * of the new parent.
     */
    left_rotate(){
        //your code here
        return;
    }
    
    /**
     *  Perform a right rotation, making the left child of this
     *  node the parent and making the old parent the right child
     *  of the new parent. 
     */
    right_rotate(){
        //your code here
        return;
    }
    
    /**
     * Sets in motion the rebalancing logic to ensure the
     * tree is balanced such that the balance factor is
     * 1 or -1
     */
    rebalance(){
        //your code here
        return;
    }
    
    /**
     * Uses the same insertion logic as a binary search tree
     * after the value is inserted, we need to check to see
     * if we need to rebalance
     */
    insert(key){
        //your code here
        return;
    }
}

module.exports = {
    Node, AVLTree
}