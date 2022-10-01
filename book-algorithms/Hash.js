class Hash {

    eleitores = [
        'ANA'
    ];

    //Simulando Json com array
    eleitoresColisao = [
        [
            [
                'ANA'
            ],
            [
                'PRESIDENTE',
                    [
                        13
                    ]
            ]
        ],
        [
            [
                'RAZIEL'
            ],
            [
                'PRESIDENTE',
                    [
                        null
                    ]
            ]
        ]
    ];

    cache = {
        url: '',
        dados: 0,
    };

    verificaEleitor(nome) {

        if (this.eleitores.includes(nome)) {
            console.log('nao pode votar');
            return;
        }

        console.log('pode votar');
    }


    cacheURL(URL) {

        if (this.cache.url[URL]) {
            console.log('cache');
            return this.cache;
        }

        const dados = Math.random();

        this.cache.url = URL;
        this.cache.dados = dados;
        
        console.log(this.cache, dados);

        return dados;
    }

}

(new Hash).verificaEleitor('RZ');
(new Hash).verificaEleitor('ANA');
(new Hash).verificaEleitor('IGOR');

const hash = new Hash();

hash.cacheURL('www.example.com');
hash.cacheURL('www.example.com');

hash.cacheURL('www.example2.com');
hash.cacheURL('www.example2.com');