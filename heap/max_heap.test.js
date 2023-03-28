const {Max_Heap} = require('./max_heap')
const bubble_mock = jest.spyOn(Max_Heap, 'bubble_up')
const sift_mock = jest.spyOn(Max_Heap, 'sift_down')

describe('generic heap', ()=>{
    let heap;
    
    beforeEach(()=>{
        heap = new Max_Heap();
    })
    
    it('insert works', ()=>{
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        expect(heap.storage).toEqual([10, 9, 9, 6, 1, 8, 9, 5])
    })
    
    it('delete works', ()=>{
        heap.insert(6)
        heap.insert(7)
        heap.insert(5)
        heap.insert(8)
        heap.insert(10)
        heap.insert(1)
        heap.insert(2)
        heap.insert(5)
        
        let order = []
        
        while (heap.get_size() > 0){
            order.push(heap.delete())
        }
        
        expect(order).toEqual([10, 8, 7, 6, 5, 5, 2, 1])
    })
    
    it('get_max works', ()=>{
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        expect(heap.get_size()).toEqual(8)
        expect(heap.get_max()).toEqual(10)
    })
    
    it('get_max after delete works', ()=>{
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        heap.delete();
        expect(heap.get_max()).toEqual(9)
        
        heap.delete();
        expect(heap.get_max()).toEqual(9)
        
        heap.delete();
        expect(heap.get_max()).toEqual(9)
        
        heap.delete();
        expect(heap.get_max()).toEqual(8)
        
        heap.delete();
        expect(heap.get_max()).toEqual(6)
    })
    
    it('bubble_up was called', ()=>{
        heap.insert(5);
        expect(bubble_mock).toHaveBeenCalled();
    })
    
    it('sift_down was called', ()=>{
        heap.insert(5);
        heap.insert(15)
        heap.delete();
        expect(sift_mock).toHaveBeenCalled();
    })
})