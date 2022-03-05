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

Uma API REST construída do zero com NodeJs
- Express
- Sequelize
- Postgress
