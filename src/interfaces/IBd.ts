import { item } from "../types/itemType";

export default interface IBd{
    adicionaItem(item: item): void;
    removeItem(nomeItem: string): void;
    procuraItem(nome: string): (item | undefined);
    obtemTodosItens(): Array<item>;
}