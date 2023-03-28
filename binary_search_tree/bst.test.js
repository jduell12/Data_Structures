const {BinarySearchTree} = require('./bst')

describe('BinarySearchTree', ()=>{
    let bst; 
    
    beforeEach(() => {
        bst = new BinarySearchTree(5);
    })
    
    it('[1] inserts correctly', ()=>{
        bst.insert(2)
        bst.insert(3)
        bst.insert(7)
        bst.insert(6)
        
        expect(bst.left.right.value).toEqual(3)
        expect(bst.right.left.value).toEqual(6)
    })
    
    it('[2] handles duplicate inserts', ()=>{
       const bst2 = new BinarySearchTree(1);
       bst2.insert(1)
        
        expect(bst2.right.value).toEqual(1)
    })
    
    it('[3] contains', ()=>{
        bst.insert(2)
        bst.insert(3)
        bst.insert(7)
        
        expect(bst.contains(7)).toBe(true);
        expect(bst.contains(10)).toBe(false);
    })
    
    it('[4] get_max', ()=>{
        expect(bst.get_max()).toEqual(5)
        bst.insert(30)
        expect(bst.get_max()).toEqual(30)
        bst.insert(300)
        expect(bst.get_max()).toEqual(300)
    })
    
    it('[5] for_each', ()=>{
        let arr = [];
        const cb = (num => arr.push(num))
        
        bst.insert(10)
        bst.insert(1)
        bst.insert(20)
        bst.insert(13)
        bst.insert(33)
        
        bst.for_each(cb);
        
        expect(arr.includes(5)).toBe(true);
        expect(arr.includes(10)).toBe(true);
        expect(arr.includes(1)).toBe(true);
        expect(arr.includes(20)).toBe(true);
        expect(arr.includes(13)).toBe(true);
        expect(arr.includes(33)).toBe(true);
    })
    
    it('[6] traversals', ()=>{
        const nodes = [1, 2, 3, 4, 5, 6, 7];
        const bft_nodes = [5, 1,  7, 3, 6,  2, 4,];
        const dft_nodes = [5, 7, 6, 1, 3, 4, 2];
        const pre_nodes = [ 5, 1, 3, 2, 4, 7, 6];
        const post_nodes = [2, 4, 3, 1, 6, 7, 5]
        
        bst.insert(1)
        bst.insert(7)
        bst.insert(6)
        bst.insert(3)
        bst.insert(4)
        bst.insert(2)
        
        let order = bst.in_order_traversal();
        order.forEach((value, i) => {
            expect(value).toEqual(nodes[i])
        })
        
        order = bst.bft_traversal();
        order.forEach((value, i) => {
            expect(value).toEqual(bft_nodes[i])
        })
        
        order = bst.dft_traversal();
        order.forEach((value, i) => {
            expect(value).toEqual(dft_nodes[i])
        })
        
        order = bst.pre_order_dft();
        order.forEach((value, i) => {
            expect(value).toEqual(pre_nodes[i])
        })
        
        order = bst.post_order_dft();
        order.forEach((value, i) => {
            expect(value).toEqual(post_nodes[i])
        })
    })
})