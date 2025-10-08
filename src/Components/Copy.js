//some worth looking concept

let a = 5;
let b = a; // primitive copy
b = 10; // does not change a
console.log(a); // 5
//primitives: number, string, boolean, null, undefined, symbol, bigint

let test = {name: 'john'}
let test2 = test; // reference copy
test2.name = 'doe'; // changes test.name as well    
console.log(test); // {name: 'doe'}

//objects: arrays, functions, objects, dates, maps, sets, etc. 

---------------********************-----------------

//shallow copy vs deep copy
//shallow copy: copies the first level of properties, but nested objects are still referenced
//deep copy: copies all levels of properties, creating entirely new objects


let obj1 = {a: 1, nested: { b: 2 }};

let ref = obj1; // reference copy
ref.a = 5; // changes obj1.a as well
console.log(obj1); // {a: 5, nested: { b: 2 }}

let shallow = {...obj1}; // shallow copy
shallow.a = 10; // does not change obj1.a
shallow.nested.b = 20; // changes obj1.nested.b as well
console.log(obj1); // {a: 5, nested: { b: 20 }}

let deep = JSON.parse(JSON.stringify(obj1)); // deep copy
deep.a = 15; // does not change obj1.a
deep.nested.b = 25; // does not change obj1.nested.b
console.log(obj1); // {a: 5, nested: { b: 20 }}

// Note: JSON methods do not handle functions, undefined, or special objects like Date, Map, Set, etc.