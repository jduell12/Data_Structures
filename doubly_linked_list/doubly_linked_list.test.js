const {DoublyLinkedList, ListNode} = require('./doubly_linked_list')

describe('DoublyLinkedList', ()=>{
    let list;
    
    beforeEach(() => {
        list = new DoublyLinkedList(new ListNode(1))
    })
    
    it('add_to_head works', ()=>{
        expect(list.head.value).toBe(1)
        
        list.add_to_head(10);
        expect(list.head.value).toBe(10)
        expect(list.head.next.value).toBe(1)
        expect(list.length).toBe(2);
    })
    
    it('remove_from_head works', ()=>{
        list.remove_from_head();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
        
        list.add_to_head(2);
        expect(list.head.value).toBe(2);
        expect(list.tail.value).toBe(2);
        expect(list.length).toBe(1);
        expect(list.remove_from_head()).toBe(2);
        expect(list.length).toBe(0);
    })
    
    it('add_to_tail works', ()=>{
        expect(list.tail.value).toBe(1)
        expect(list.length).toBe(1);
        
        list.add_to_tail(30);
        expect(list.tail.prev.value).toBe(1);
        expect(list.tail.value).toBe(30)
        expect(list.length).toBe(2);
        
        list.add_to_tail(20);
        expect(list.tail.prev.value).toBe(30);
        expect(list.tail.value).toBe(20)
        expect(list.length).toBe(3);
    })
    
    it('remove_from_tail works', ()=>{
        list.remove_from_tail();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
        
        list.add_to_tail(33);
        expect(list.head.value).toBe(33);
        expect(list.tail.value).toBe(33);
        expect(list.length).toBe(1);
        list.remove_from_tail();
        expect(list.length).toBe(0);
        
        list.add_to_tail(66);
        expect(list.remove_from_tail()).toBe(66);
        expect(list.length).toBe(0);
    })
    
    it('move_to_front works', ()=>{
        list.add_to_tail(3);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(3);
        
        list.move_to_front(list.tail);
        expect(list.head.value).toBe(3);
        expect(list.tail.value).toBe(1);
        expect(list.length).toBe(2);
        
        list.add_to_head(29)
        list.move_to_front(list.head.next);
        expect(list.head.value).toBe(3);
        expect(list.head.next.value).toBe(29);
        expect(list.tail.value).toBe(1);
        expect(list.length).toBe(3);
    })
    
    it('move_to_end works', ()=>{
        list.add_to_head(40)
        expect(list.head.value).toBe(40);
        expect(list.tail.value).toBe(1);

        list.move_to_end(list.head);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(40);
        expect(list.length).toBe(2);
        
        list.add_to_tail(4)
        list.move_to_end(list.head.next);
        expect(list.tail.value).toBe(40);
        expect(list.tail.prev.value).toBe(4);
        expect(list.length).toBe(3);
    })
    
    it('delete works', ()=>{
        list.delete(list.node);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
        
        list.add_to_tail(1);
        list.add_to_head(9);
        list.add_to_tail(6);
        
        list.delete(list.head.next);
        expect(list.head.value).toBe(9);
        expect(list.head.next).toEqual(list.tail)
        expect(list.tail.value).toBe(6);
        
        list.delete(list.head);
        expect(list.head.value).toBe(6);
        expect(list.tail.value).toBe(6);
        expect(list.length).toBe(1);
        
        list.delete(list.head);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    })
    
    it('get_max works', ()=>{
        expect(list.get_max()).toEqual(1);
        
        list.add_to_tail(100)
        expect(list.get_max()).toEqual(100);
        
        list.add_to_tail(55)
        expect(list.get_max()).toEqual(100);
        
        list.add_to_tail(101)
        expect(list.get_max()).toEqual(101);
    })
})