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
    it('enhancement level smaller than 15 will decrease durability by 5', ()=>{
            expect(enhancer.fail({name:'Angel Sword',enhancement:14,durability:10})).toStrictEqual({name:'Angel Sword',enhancement:14,durability:5});
            
    })
    it('enhancement level equal or bigger than 15 will decrease durability by 10', ()=>{
        expect(enhancer.fail({name:'Demon Shield',enhancement:16,durability:15})).toStrictEqual({name:'Demon Shield',enhancement:16,durability:5});
    })
    it('enhancement level bigger then 18 will decrease enhancement level by 1', ()=>{
        expect(enhancer.fail({name:'Demon Shield',enhancement:18,durability:15})).toStrictEqual({name:'Demon Shield',enhancement:17,durability:15})
    })
});