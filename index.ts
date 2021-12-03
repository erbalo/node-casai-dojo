var var1: string = "Hello"
let var2 = "World"
const CONST1: number = 1

function algo_chido(param1): string {
    return `regresando ${param1}`
}
const algo_chido_2 = (param1: boolean, param2: string): number => {
    return 0
}

let result: string | number = algo_chido(var1)
result = algo_chido_2(false, var2)

console.log(result)
console.log(
    `hola 
    mundo! ${CONST1}`);