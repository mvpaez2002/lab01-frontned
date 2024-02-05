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


const cantidad =15
let i =0
let primoTemp =1


console.log(esPrimo(17))
while (i< cantidad){
if(esPrimo(primoTemp)){
    console.log(i,"->", primoTemp);
    i++
}
    primoTemp++
}
