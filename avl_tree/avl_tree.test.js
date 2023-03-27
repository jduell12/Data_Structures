const {AVLTree, Node} = require('./avl_tree')

describe('AVLTree', ()=>{
    let tree;
    
    beforeEach(() => {
        tree = new AVLTree();    
    })
    
    it('[1] updates the height', ()=>{
        expect(tree.height).toEqual(-1)
        tree.node = new Node(5);
        tree.update_height();
        expect(tree.height).toEqual(0)
        
        tree.node.left = new AVLTree(new Node(3))
        tree.update_height();
        expect(tree.node.left.height).toEqual(0)
        expect(tree.height).toEqual(1)
        
        tree.node.right = new AVLTree(new Node(6))
        tree.update_height();
        expect(tree.node.right.height).toEqual(0)
        expect(tree.height).toEqual(1)
        
        tree.node.right.node.right = new AVLTree(new Node(8))
        tree.update_height();
        expect(tree.height).toEqual(2)
    })
    
    it('[2] rotates left', ()=>{
        tree.node = new Node(5);
        tree.node.left = new AVLTree(new Node('x'))
        tree.node.right = new AVLTree(new Node(8))
        tree.node.right.node.right = new AVLTree(new Node(9))
        tree.node.right.node.right.node.left = new AVLTree(new Node('y'))
        tree.node.right.node.right.node.right = new AVLTree(new Node('z'))
        
        tree.left_rotate();
        
        expect(tree.node.key).toEqual(8)
        expect(tree.node.left.node.key).toEqual(5)
        expect(tree.node.right.node.key).toEqual(9)
        expect(tree.node.left.node.left.node.key).toEqual('x')
        expect(tree.node.left.node.right.node.key).toEqual('c')
        expect(tree.node.right.node.left.node.key).toEqual('y')
        expect(tree.node.right.node.right.node.key).toEqual('z')
    })
    
    it('[3] rotates right', ()=>{
        tree.node = new Node(5);
        tree.node.right = new AVLTree(new Node('x'))
        tree.node.left = new AVLTree(new Node(4))
        tree.node.left.node.right = new AVLTree(new Node('c'))
        tree.node.left.node.left = new AVLTree(new Node(3))
        tree.node.left.node.left.node.left = new AVLTree(new Node('y'))
        tree.node.left.node.left.node.right = new AVLTree(new Node('z'))
        
        tree.right_rotate();
        
        expect(tree.node.key).toEqual(4)
        expect(tree.node.left.node.key).toEqual(3)
        expect(tree.node.right.node.key).toEqual(5)
        expect(tree.node.left.node.left.node.key).toEqual('y')
        expect(tree.node.left.node.right.node.key).toEqual('z')
        expect(tree.node.right.node.left.node.key).toEqual('c')
        expect(tree.node.right.node.right.node.key).toEqual('x')
    })
    
    it('[4] rebalanced', ()=>{
        tree.node = new Node(5);
        tree.node.right = new AVLTree(new Node('x'))
        tree.node.left = new AVLTree(new Node(3))
        tree.node.left.node.right = new AVLTree(new Node(4))
        tree.node.left.node.left = new AVLTree(new Node('c'))
        tree.node.left.node.right.node.left = new AVLTree(new Node('y'))
        tree.node.left.node.right.node.right = new AVLTree(new Node('z'))
        
        tree.rebalance();
        
        expect(tree.node.key).toEqual(4)
        expect(tree.node.left.node.key).toEqual(3)
        expect(tree.node.right.node.key).toEqual(5)
        expect(tree.node.left.node.left.node.key).toEqual('c')
        expect(tree.node.left.node.right.node.key).toEqual('y')
        expect(tree.node.right.node.left.node.key).toEqual('z')
        expect(tree.node.right.node.right.node.key).toEqual('x')
    })
    
    it('[5] inserts correctly', ()=>{
        tree.insert(5);
        expect(tree.node.key).toEqual(5)
        
        tree.insert(3);
        expect(tree.node.left.node.key).toEqual(3)
        
        tree.insert(5);
        expect(tree.node.right.node.key).toEqual(5)
        
        tree.insert(7);
        expect(tree.node.right.node.right.node.key).toEqual(7)
        
        tree.insert(8)
        expect(tree.node.right.node.right.node.key).toEqual(7)
        expect(tree.node.right.node.left.node.key).toEqual(5)
        expect(tree.node.right.node.right.node.key).toEqual(8)
    })
})