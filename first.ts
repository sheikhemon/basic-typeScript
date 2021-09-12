const num = 5;
console.log('Hlw type script', num);

/* Strict type */
let first: number = 5;
let second: string = 'This is type of string';
let third: boolean = true;

/*
    Set function parameter type and function return type
*/
function add4(first: number, second: number): number {
    const result = first + second;
    return result;
}
const output: number = add4(45, 47);
console.log(output);
// console func
function doubleConsole(number: number): void {
    console.log(2 * number);
}

// Multi purpose
/* function add(first: number | string, second: number | string): number | string {
    const result: string | number = first + second;
    return result;
}
const output: number = add(45, 47);
console.log(output); */