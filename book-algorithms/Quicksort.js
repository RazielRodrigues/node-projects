class Quicksort {

    /**
    * 
     */
    qsort(numeros){
        
        //caso base
        if(numeros.length < 2){
            return numeros;
        }else{

            let pivo = numeros[0];
            let menores = numeros.filter( (numero) => { if(numero <= pivo) return numero});
            let maiores = numeros.filter( (numero) => { if(numero > pivo) return numero});

            console.log(`atual: ${numeros}`);
            console.log(`menores: ${menores}`);
            console.log(`maiores: ${maiores}`);
            
//             menores = this.qsort(menores);
            // maiores = this.qsort(maiores);

            let numerosOrdernados = [...menores, pivo ,...maiores]
            console.log(`atual 2: ${numerosOrdernados}`);

            return numerosOrdernados;
        }

    }

}

(new Quicksort).qsort([11,2,31,857,2,3]);