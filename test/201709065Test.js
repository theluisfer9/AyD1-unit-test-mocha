const assert = require('chai').assert;
const functions = require('../201709065')

const invertWordres = functions.invertWord('hola')
const mcmres = functions.mcm(12,4)
const reverseNumres = functions.reverseNum(69420)
const permutarres = functions.permutar('luis')
const ordenAlfabeticores = functions.ordenAlfabetico('paranguacutirimicuaro')

describe('Luis Fernando Ralda Estrada 201709065',function(){
    it('Deberia decir aloh',function(){
        assert.equal(invertWordres,'a,l,o,h')
    })
    it('Deberia devolver el mcm de 12 y 4',function(){
        assert.equal(mcmres,12)
    })
    it('Deberia devolver 02496',function(){
        assert.equal(reverseNumres,'02496')
    })
    it('Devolver un string con las permutaciones',function(){
        assert.typeOf(permutarres,'string')
    })
    it('Devolver un string ordenado',function(){
        assert.typeOf(ordenAlfabeticores,'string')
    })
})