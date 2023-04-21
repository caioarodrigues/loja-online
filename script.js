const listaItens = document.querySelector('.lista-itens');
const url = 'http://localhost:3000';

document.querySelector('.adicionar').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const urlPost = url + '/adiciona';

    await fetch(urlPost, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
    .then(() => location.reload());
});

document.querySelector('.obter-produto').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const nome = form.querySelector('#nome-produto').value;
    const urlGet = url + `/${nome}`;

    form.action = nome;
    const item = await fetch(urlGet)
        .then(res => res.json())
        .then(res => JSON.stringify(res));

    alert(item)
});

document.querySelector('.remover-produto').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const urlDelete = url + '/remove';

    await fetch(urlDelete, {
        method: 'DELETE',
        body: new URLSearchParams(formData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
    .then(res => {
        if(res.status === 200){
            alert('sucesso ao apagar!');
        }
        else alert('erro ao tentar apagar #' + res.status);

        location.reload();
    });
});

async function getItens(){
    const itens = await fetch('http://localhost:3000/')
        .then(res => res.json());
    
    return itens;
}

(async () => {
    const itens = await getItens();
    
    itens.forEach(item => {
        const { nome, preco, quantidade } = item;
        const precoArredondado = parseFloat(preco).toFixed(2);
        const listItem = document.createElement('li');
        const div = document.createElement('div');

        div.innerText = `${nome}, R$${precoArredondado}, ${quantidade} disponiveis.`;
        
        listItem.append(div);
        listaItens.append(listItem);
    });
})();