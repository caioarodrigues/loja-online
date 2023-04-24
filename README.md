### Instale as dependências do Node
Não esqueça: 

        $ cd ./src
        $ npm i

### Frontend
O frontend da aplicação está no arquivo index.html.
<br>
É bastante simples. A partir dele dá pra acessar tudo

### Servidor
A aplicação é executada em <strong> localhost:3000 </strong>

<br>
Para iniciar o servidor:

        $ cd ./src
        $ npm run start
<br>

### Rotas
<ul>
    <li> (GET) <strong>/</strong> retorna todos os itens</li>
    <li> (GET) <strong>/nomeQualquer</strong> retorna o produto em específico ou um array vazio, caso não exista.</li>
    <li> (POST) <strong>/adiciona</strong> adiciona um item ao banco de dados </li>
    <li> (DELETE) <strong>/apaga</strong> apaga um item específico </li>
</ul>

### Nota
    Para fazer as operações POST e DELETE, deve-se enviar no corpo da requisição um objeto da estrutura ITEM, ou seja:
        
        item = {
            nome: string, 
            quantidade: number, 
            preco: number
        }
