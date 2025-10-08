//some worth looking concept

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