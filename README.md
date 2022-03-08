# api_rest

Iniciar repositório git
- git init

Iniciar o projeto node
- npm init -y

Pacotes:
- npm i express
- npm i nodemon sucrase --save-dev
  - Configurar arquivo nodemon.json para o nodemon funcionar com o sucrase
  - Adicionar script no package.json: "nodemon .\\src\\app.js"
- npm i sequelize postgres
- npm i -D sequelize-cli


ESLint:
- npx eslint --init
    - Editar configurações do VSCODE para funcionar bem com o eslint
    ```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll": true
    }
    ```
    - Criar também o arquivo .editorconfig

Criar banco postgres no servidor:
- sudo docker run --restart always -d --name bdpostgres1 -p 5432:5432 -e POSTGRES_PASSWORD=XXXXXXX postgres
- sudo docker ps
- Liberar porta no firewall do servidor para o postgres
- sudo apt install postgresql-client-common
- sudo apt install postgresql-client
- "sudo psql -h localhost -p 5432 -U postgres" Para conectar no postgres instalado

Criar configuração de banco
- Criar arquivo index.js dentro da patas database

Sequelize
- Criar arquivo .sequelizerc
  - Ele vai indicar o diretório de migrations
- Criar primeira migration


Uma API REST construída do zero com NodeJs
- Express
- Sequelize
- Postgress
