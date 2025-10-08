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

// ---------------********************-----------------

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



//ways to do deep copy

pros: simple no dependency, cons: does not handle functions, undefined, special objects like Date, Map, Set, etc.
1) JSON.parse(JSON.stringify(obj)) 

pros: native, handles more types, cons: only in newer browsers
2) structuredClone(obj)

pros: robust, handle all types, cons: need lodash library
3) _.cloneDeep(obj) from lodash library

pros: full control, cons: need to implement yourself(more code to maintain)
4) custom recursive function
function deepClone(obj) {
    if(obj === null || typeof obj !== 'object') return obj;
    if(obj instanceof Date) return new Date(obj).getTime());
    if(obj instanceof Array) return obj.map(deepClone);
    if(obj instanceof Object) {
        let copy = {};
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                copy[key] = deepClone(obj[key]);
            }
        }
        return copy;
    }
}   
