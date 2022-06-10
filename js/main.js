let a = 15
let b = 9

console.log(a > b ? a + 2 : b * 3)

function compararNumeros(a, b) {
    if(a == b){
        return "a y b son iguales"
    }else if(a>b){
        return "a es mayor que b"
    }else{
        return "b es mayor que a"
    }
}

function compararNumeros2(a, b) {
    return  a == b ? "a y b son iguales" :   a > b ? "a es mayor que b" :   "b es mayor que a"
}

const compararNumeros3 = (a , b) => { return  a == b ? "a y b son iguales" :   a > b ? "a es mayor que b" :   "b es mayor que a"  }


console.log(compararNumeros(5,9))
console.log(compararNumeros2(5,3))
console.log(compararNumeros3(15,15))