# CRIAR SERVIDOR
# CONFIGURACAO MYSQL
# CRIAR MODEL
# CRIAR CONTROLLER
# DEFINIR ROTAS

# INICIALIZAR PROJETO = npm init
# PACOTES = npm install express sequelize mysql2 cors --save && npm install mocha --save-dev

# 1. SEMPRE INICIALIZAR O SERVIDOR E CONFIGURAR O CORS QUANDO SE TRABALHA COM API
    ## express é usado para criar apis
    ## cors sao configuração de middlewares

# 2. DEPOIS CONFIGURAR O BANCO DE DADOS
    

Methods	    Urls	                    Actions
GET	        api/tutorials	            get all Tutorials
GET	        api/tutorials/:id	        get Tutorial by id
POST	    api/tutorials	            add new Tutorial
PUT	        api/tutorials/:id	        update Tutorial by id
DELETE	    api/tutorials/:id	        remove Tutorial by id
DELETE	    api/tutorials	            remove all Tutorials
GET	        api/tutorials/published	    find all published Tutorials
GET	        api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'

## TODO:
    - MODEL USUARIO
    - MODEL ENDEREÇO
    - CLIENTE
    - 