const {Heap} = require('./generic_heap')
const bubble_mock = jest.spyOn(Heap, 'bubble_up')
const sift_mock = jest.spyOn(Heap, 'sift_down')

describe('generic heap', ()=>{
    let heap;
    
    beforeEach(()=>{
        heap = new Heap();
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
    
    it('custom insert works', ()=>{
        heap = new Heap((x, y)=> x<y);
        
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        expect(heap.storage).toEqual([1, 5, 9, 6, 8, 10, 9, 9])
    })
    
    it('delete works', ()=>{
        heap = new Heap((x, y)=> x<y);
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
        
        expect(order).toEqual([1, 2, 5, 5, 6, 7, 8, 10])
    })
    
    it('get_priority works', ()=>{
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        expect(heap.get_size()).toEqual(8)
        expect(heap.get_priority()).toEqual(10)
    })
    
    it('custom get_priority works', ()=>{
        heap = new Heap((x, y)=> x<y);
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        expect(heap.get_size()).toEqual(8)
        expect(heap.get_priority()).toEqual(1)
    })
    
    it('get_priority after delete works', ()=>{
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(9)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(9)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(9)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(8)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(6)
    })
    
    it('custom get_priority after delete works', ()=>{
        heap = new Heap((x, y)=> x<y);
        heap.insert(6)
        heap.insert(8)
        heap.insert(10)
        heap.insert(9)
        heap.insert(1)
        heap.insert(9)
        heap.insert(9)
        heap.insert(5)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(5)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(6)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(8)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(9)
        
        heap.delete();
        expect(heap.get_priority()).toEqual(9)
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