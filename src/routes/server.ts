import express, { Application, Request, Response } from 'express';
import BdController from '../controllers/bdController';
import { item } from '../types/itemType';

const app: Application = express();
const porta: number = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    const itens: Array<item> = BdController.obtemTodosItens();

    if(itens.length > 0){
        res.status(200).json(itens);

        return;
    }
    
    res.status(204).json(itens);
});

app.get('/:nomeProduto', (req: Request, res: Response) => {
    const { nomeProduto } = req.params;
    const produtoProcurado: (item | undefined) = BdController.procuraItem(nomeProduto);

    if(produtoProcurado){
        res.status(200).json(produtoProcurado);

        return;
    }

    res.status(404).json(
        {
            produtoProcurado: []
        }
    );
});

app.post('/adiciona', (req: Request, res: Response) => {
    const { nome, preco, quantidade } = req.body;
    const item: item = { nome, preco, quantidade };

    console.log(`item = ` + nome + preco + quantidade);
    console.log(req.body);
    BdController.adicionaItem(item);
    res.status(200).send(item);
});

app.delete('/remove', (req: Request, res: Response) => {
    const { nome } = req.body;
    const estaNoBD: boolean = !!BdController.procuraItem(nome);
    
    if(estaNoBD){
        BdController.removeItem(nome)
        res.sendStatus(200);

        return;
    }

    res.sendStatus(404);
});

app.listen(porta, () => {
    console.log(`aplicação sendo executada em http://localhost:${porta}`);
});