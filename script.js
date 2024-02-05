const cantidad =5
let i =0
let primoTemp =1
//while (i< cantidad){


//}

const esPrimo = primo => {
    let cantDivisores=0
    for(let i=1;i<=primo;i++){
        if (primo % i==0){
            cantDivisores++
        }

    }
    if(cantDivisores==2){
        return true
    }
    return false

}
console.log(esPrimo(17))
