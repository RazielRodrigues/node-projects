class Grafos {

    ehVendedorDeManga() {

    }

    djkistra() {

        let grafo = {};
        grafo.inicio = {};

        grafo.inicio.a = 6;
        grafo.inicio.b = 2;

        grafo.a = {};
        grafo.a.fim = 1;

        grafo.b = {};
        grafo.b.a = 3;
        grafo.b.fim = 5;

        grafo.fim = Infinity;

        console.log(grafo);

        let custos = {};
        custos.a = 6;
        custos.b = 2;

        custos.fim = {};

        console.log(custos);

        let pais = {};
        pais.a = 'inicio';
        pais.b = 'inicio';

        pais.fim = undefined;

        console.log(pais);

        let processados = [];

        let nodo = this.custoBarato(custos, processados);

        while (nodo !== undefined) {
            let custo = custos[nodo];
            let vizinhos = grafo[nodo];

            for (let n in vizinhos) {
                let novo = custo + vizinhos[n]

                if (custos[n] > novo) {
                    custos[n] = novo;
                    pais[n] = nodo;
                }
                processados.push(nodo);
                nodo = this.custoBarato(custos, processados);
            }

        }

    }

    custoBarato(custos, processados) {
        let baixo = Infinity;
        let nodoBaixo = undefined;

        for (let nodo in custos) {
            let custo = custos[nodo];
            if( custo < baixo && !nodo in processados){
                baixo = custo;
                nodoBaixo = nodo;
            }
        }

        return nodoBaixo;
    }

}

(new Grafos).ehVendedorDeManga();
(new Grafos).djkistra();