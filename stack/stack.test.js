const {Stack} = require('./stack')

describe('Stack', ()=>{
    let stack;
    let  uniqueObj = { id: 456 };
    
    beforeEach(() => {
        stack = new Stack();
    });
    
    it("adds and removes an item", function () {
        stack.add(uniqueObj);
        expect(stack.remove()).toBe(uniqueObj);
      });
    
      it("returns `undefined` on underflow (empty)", function () {
        expect(stack.remove()).toBe(undefined);
        stack.add(uniqueObj);
        expect(stack.remove()).toBe(uniqueObj);
        expect(stack.remove()).toBe(undefined);
      });
    
      // LIFO: Last In, First Out
      it("adds and removes three items in a LIFO way", function () {
        stack.add(5).add(uniqueObj).add("penguin");
        expect(stack.remove()).toBe("penguin");
        expect(stack.remove()).toBe(uniqueObj);
        expect(stack.remove()).toBe(5);
        expect(stack.remove()).toBe(undefined);
      });
    
      it("can handle interspersed add and remove", function () {
        stack.add(1);
        expect(stack.remove()).toBe(1);
        stack.add(2).add(3);
        expect(stack.remove()).toBe(3);
        stack.add(4);
        expect(stack.remove()).toBe(4);
        expect(stack.remove()).toBe(2);
        expect(stack.remove()).toBe(undefined);
      });
    
      it("adds and removes its own items", function () {
        const s2 = new Stack();
        stack.add("penguin");
        s2.add("JavaScript");
        expect(stack.remove()).toBe("penguin");
        expect(stack.remove()).toBe(undefined);
        expect(s2.remove()).toBe("JavaScript");
        expect(s2.remove()).toBe(undefined);
      });
})