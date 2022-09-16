class OrdenacaoSelecao {

    buscaMenor(lista) {
        let menor = lista[0];
        let menorIndice = 0;

        for (let i in Array.from({ length: lista.length }, (x, i) => i)) {
            if (lista[i] < menor) {
                menor = lista[i];
                menorIndice = i;
            }
            console.log(menorIndice);
            return menorIndice;
        }

    }

    ordenar(lista) {
        let novo = [];
        let x = Array.from({ length: lista.length }, (x, i) => i);

        for (let i in Array.from({ length: lista.length }, (x, i) => i)) {
            let menor = this.buscaMenor(lista);
            novo.push(lista.pop(menor));
        }

        console.log(novo);
        return novo;
    }

}

(new OrdenacaoSelecao).ordenar([3, 2, 1]);