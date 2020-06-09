const enhancer = require('./enhancer.js');

describe("text enhancer methods", ()=>{
    it("repair method should return durability to 100", ()=>{
        expect(enhancer.repair({name:'Angel Sword',enhancement:3,durability:0})).toStrictEqual({name:'Angel Sword',enhancement:3,durability:100})
    });
    it('successfully enhance the item', ()=>{
        expect(enhancer.succeed({name:'Angel Sword',enhancement:3,durability:0})).toStrictEqual({name:'Angel Sword',enhancement:4,durability:0})
    })
    it('keep the enhancement the same if it is 20', ()=>{
        expect(enhancer.succeed({name:'Angel Sword',enhancement:20,durability:0})).toStrictEqual({name:'Angel Sword',enhancement:20,durability:0})
    })
});