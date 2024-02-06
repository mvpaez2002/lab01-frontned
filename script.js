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


const cantida =18
let i =1
let primoTemp =1


console.log(esPrimo(17))
while (i< cantida){
if(esPrimo(primoTemp)){
    console.log(i,"->", primoTemp);
    i++
}
    primoTemp++
}
