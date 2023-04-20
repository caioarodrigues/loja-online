import IBd from "../interfaces/IBd";
import BdModel from "../models/BdModel";
import bd from "./bd";

class Singleton{
    protected qtdeInstancias: number = 0;
    protected limiteInstancias: number = 1;
    
    criaControladorBd() : BdModel {
        const bdController: BdModel = new bd();

        return bdController;
    }
} 

export default new Singleton();