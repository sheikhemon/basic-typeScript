"use strict";
const num = 5;
console.log('Hlw type script', num);
/* Strict type */
let first = 5;
let second = 'This is type of string';
let third = true;
/*
    Set function parameter type and function return type
*/
function add4(first, second) {
    const result = first + second;
    return result;
}
const output = add4(45, 47);
console.log(output);
// console func
function doubleConsole(number) {
    console.log(2 * number);
}
// Multi purpose
/* function add(first: number | string, second: number | string): number | string {
    const result: string | number = first + second;
    return result;
}
const output: number = add(45, 47);
console.log(output); */ 
