const {LRUCache} = require('./lru_cache');

describe('LRU Cache', ()=>{
    let lru;
    
    beforeEach(()=>{
        lru = new LRUCache(3)
    })
    
    it('cache overwrite appropiately', ()=>{
        lru.set('item1', 'a')
        lru.set('item2', 'b')
        lru.set('item3', 'c')
        
        lru.set('item2', 'z')
        
        expect(lru.get('item1')).toEqual('a')
        expect(lru.get('item2')).toEqual('z')
    })
    
    it('insertion and retrival', ()=>{
        lru.set('item1', 'a')
        lru.set('item2', 'b')
        lru.set('item3', 'c')
        
        expect(lru.get('item1')).toEqual('a')
        
        lru.set('item4', 'd')
        
        expect(lru.get('item1')).toEqual('a')
        expect(lru.get('item2')).toBeNull();
        expect(lru.get('item3')).toEqual('c')
        expect(lru.get('item4')).toEqual('d')
    })
})