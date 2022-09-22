class Quicksort {

    /**
    * 
     */
    qsort(numeros){

        //caso base
        if(numeros.length < 2){
            return numeros;
        }else{
            const pivo = numeros[0];
            const menores = numeros.filter( (numero) => { if(numero <= pivo) return numero});
            const maiores = numeros.filter( (numero) => { if(numero > pivo) return numero});

            console.log(`atual: ${numeros}`);
            return [...this.qsort(menores), ...[pivo], ...this.qsort(maiores)];
        }

    }

}

(new Quicksort).qsort([11,2,31,857,2,3]);