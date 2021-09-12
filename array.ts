const salary: number = 7550;
const friendsSalary: number[] = [7500, 6000, 5000, 4000];
const friendsName: string[] = ['Aiman', 'Emon', 'Shafik', 'Rafik', 'Jabbar']

friendsSalary.push(10000);
friendsSalary[0] = 80000;

// Type 'string' is not assignable to type 'number'
/* friendsSalary.push('5000')
friendsSalary[0] = '10000'; */

friendsName.push('sakib')
friendsName[0] = 'Arman';

let max = 0;
for (const salary of friendsSalary) {
    if (salary > max) {
        max = salary;
    }
}
// Operator '>' cannot be applied to types 'number' and 'string
/* let fullMax = '0';
for (const salary of friendsSalary) {
    if (salary > fullMax) {
        fullMax = salary;
    }
} */