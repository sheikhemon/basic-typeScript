interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
}
const messy: Player = {
    name: 'Leo Messy',
    club: 'Bercelona',
    salary: 20000,
    wife: 'Solekha'
}
const hannan: Player = {
    name: 'H Hannan',
    club: 'Vokkor Sokkor Club',
    salary: 1000
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}
interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typeSpeed: number
}

const sheikh: Developer = {
    name: 'Aiman',
    designation: 'Web developer',
    salary: 10000,
    age: 25,
    language: 'js',
    codeEditor: 'vs',
    typeSpeed: 55
}