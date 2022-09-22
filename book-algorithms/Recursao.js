class Recursao {

    regressivo(i){

        console.log(i);

        if( i <= 1){
            return;
        }

        this.regressivo(i-1);
    }

    sauda(nome){
        console.log('Olá pessoa: ' + nome);
        this.saudaPilha2(nome);
        console.log('preparando tchau');
        this.tchau();
    }

    saudaPilha2(nome){
        console.log('como vai? ' + nome);
    }

    tchau(){
        console.log('ate mais!');
    }

    /**
    * Recursão funciona como um while
    * enquanto algo nao acontecer continue executando
    *  
    * é uma forma de "criar" um loop
    * 
     */
    jogo(jogadores){

        console.log(`Jogadores restantes: ${jogadores}`);

        //caso base
        if(jogadores.length == 1){
            console.log(`O vencedor do jogo foi: ${jogadores}`);
            return;
        }

        //caso recursivo
        const jogadoresAleatorio = jogadores.sort((a, b) => 0.5 - Math.random());
        jogadoresAleatorio.pop();

        this.jogo(jogadoresAleatorio);

    }

}

(new Recursao).regressivo(10);
(new Recursao).sauda('RZ');
(new Recursao).jogo([
    'raziel', 
    'igor', 
    'gabriel', 
    'jaiara',
    'ana',
    'bin'
]);