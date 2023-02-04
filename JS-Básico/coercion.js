// COERCIÓN

// Consiste en transformar de un tipo de dato a otro de una variable. Existen dos tipos de coerción: implícita y explícita.

4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 // false

// Implícita es cuando el lenguaje de programación nos ayuda a cambiar el tipo de un valor para unirlos

var a = 4 + "7"
< undefined
console.log(a)
> 47
< undefined
typeof a
'string'

// Explícita es cuando forzamos un tipo de dato a cambiar para que se unan los valores

var a = 20;
var b = a + "";
undefined
console.log(b)
undefined
typeof b
'string'
var c = String(a);
undefined
typeof c
'string'
console.log(c)
undefined
console.log(typeof c)
undefined