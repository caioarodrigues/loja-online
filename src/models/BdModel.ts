import IBd from "../interfaces/IBd";
import { item } from "../types/itemType";


export default abstract class BdModel implements IBd {
    protected itensArr: Array<item> = [];

    adicionaItem(item: item): void {
        const isRepetido: boolean = this.itensArr.some(i => i.nome === item.nome);

        if(!isRepetido){
            this.itensArr.push(item);
            
            console.log(`item adicionado com sucesso: ${JSON.stringify(item)}`);
            return;
        }

        console.log('não é possível adicionar itens repetidos.');
    }
    removeItem(nomeItem: string): void {
        const isItemExistente: boolean = this.itensArr.some(i => i.nome === nomeItem);
        
        if(isItemExistente){
            let index: number = -1;
            
            this.itensArr.forEach(({ nome }) => {
                index++;

                if(nome === nomeItem){
                    this.itensArr.splice(index, 1);
                    
                    return;
                }    
            });
    
        }

        console.log('erro ao tentar remover o item selecionado.');
    }
    procuraItem(nome: string): (item | undefined) {
        const resultado: (item | undefined) = this.itensArr.find(i => i.nome === nome);

        return resultado;
    }
    obtemTodosItens(): Array<item> {
        return this.itensArr;
    }
}