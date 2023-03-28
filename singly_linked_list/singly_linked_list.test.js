const {SinglyLinkedList} = require('./singly_linked_list')

describe('SinglyLinkedList', ()=>{
    let list;
    
    beforeEach(() => {
        list = new SinglyLinkedList()
    })
    
    it('add_to_tail works', ()=>{        
        list.add_to_tail(1);
        expect(list.head.value).toBe(1)
        expect(list.tail.value).toBe(1)
        expect(list.length).toBe(1);
        
        list.add_to_tail(2);
        expect(list.head.value).toBe(1)
        expect(list.tail.value).toBe(2)
        expect(list.length).toBe(2);
    })
    
    it('remove_from_head works', ()=>{
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
        
        list.add_to_tail(10);
        list.add_to_tail(20);
        expect(list.remove_from_head()).toBe(10);
        expect(list.remove_from_head()).toBe(20);
        expect(list.length).toBe(0);
    })
    
    it('remove_from_tail works', ()=>{
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
        
        list.add_to_tail(30);
        list.add_to_tail(40);;
        expect(list.remove_from_tail()).toBe(40);
        expect(list.remove_from_tail()).toBe(30);
        expect(list.length).toBe(0);
    })
})