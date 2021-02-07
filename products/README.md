
#Challenge SERVNAC - TECprodutos

Este projeto é um desafio para o grupo Servnac para a vaga de Desenvolvedor React. Se consiste em um CRUD de produtos feitos com React e Redux.

1. Como Usar

    O uso é bem simples, ao iniciar o sistema, o usuário o sistema mostra os produtos armazenados na aplicação. Ao apertar a opção “Adicionar novo produto” o sistema mostra um modal para o usuário passar as informações e adicionar na lista de produtos.

    Além disso, para cada produto cadastrado, o usuário possui uma opção de editar um produto a partir de outro modal e excluir um produto cadastrado.

2.  Detalhes do Código.

    O projeto “TECprodutos” foi realizado em React JS com template Typescript, e consiste em apenas Front-end. Foi adicionado às bibliotecas “redux” e “react-redux” para fazer o armazenamento de dados e a biblioteca “react-icons” para adição de ícones para a aplicação.

    O projeto é dividido em quatro partes principais, a primeira parte é a pasta “store” que armazena o objeto “products” que é um array de produtos. Foi feito em uma pasta “products” e dentro há três arquivos “action” para as ações, ”types” que informa os tipos e “reducer” que manipula o objeto.

    A segunda parte é a pasta “models” que armazena as interfaces de objetos manipulados pelo projeto, que no caso, possui apenas um arquivo, “Product”.

    A terceira parte são as pastas “components” e “pages” que são o código react com html. Os “components” são componentes usados e/ou reusados durante a aplicação, são eles “header”, “footer” e “input”. As “pages” são os componentes principais da aplicação, são os arquivos “dashboard” que mostra a lista de produtos armazenados no aplicativo e “addProduct” que adiciona ou edita os produtos pelo usuário.

    E a última parte é a pasta “Styles” que é dividida em duas partes, estilos para “components” e para “pages” em que cada componente possui um arquivo em styles.

3. Start e Build do projeto

    Para usar o projeto “TECprodutos” entre na pasta do projeto com o comando:

        cd products

    Assim que entra na pasta do projeto, execute o comando:

        yarn install ou yarn

    Assim que terminar de baixar as dependências, se quiser executar como desenvolvedor faça o comando:

        yarn start
    
    Logo após terminar a execução do comando, entre no “http://localhost:3000” em seu browser.

    Se quiser executar a build do projeto, execute o comando:

        yarn build
    
    Vai ser criado uma pasta "build" com o projeto.
    
    Obrigado por ler até aqui, e que tenha aproveitado bem do pequeno projeto "TECprodutos".
