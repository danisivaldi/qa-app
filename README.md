# QA app

O projeto é uma aplicação web para gerenciar perguntas e respostas em forma de lista, podendo adicionar, editar e remover os itens. A stack está dividida na parte do servidor, construída com NodeJS e GraphQL, e do cliente, feita com React e Relay para integrar com banco em GraphQL.

## Produção

Para instalar as dependência do porjeto, basta rodar

```
npm install
```

Em seguida, inicie o servidor com o comando

```
node server/src/server.js
```

Por fim, em outra aba do terminal, inicie a aplicação

```
cd client/qa-app
yarn start
```

A aplicação web pode ser acessada pelo endereço *http:/localhost:3000*

## Todo

+ Função de editar pergunta e respostas de cada item
+ Lidar com erro no frontend caso o usuário não selecione nenhuma resposta como correta - atualmente o servidor responde com erro e não adiciona no banco
+ Construção dos fragments e função update para commitMutation do relay, possibilitando atualização da lista de itens quando um novo item for adicionado ou removido - atualmente é forçada uma atualização da página
