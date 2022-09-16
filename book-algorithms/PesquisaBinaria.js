class PesquisaBinaria {

    pesquisar(lista, item) {

        let baixo = 0;
        let alto = lista.length - 1;

        while (baixo <= alto) {
            let meio = (baixo + alto) / 2;
            let chute = lista[meio];

            if (chute == item) {
                console.log(`valor encontrado: ${meio}`);
                return meio;
            }

            if (chute > item) {
                alto = meio - 1;
            } else {
                baixo = meio + 1;
            }

        }

    }

}

(new PesquisaBinaria).pesquisar([1, 2, 3], 3);