import IBd from "../interfaces/IBd";
import { item } from "../types/itemType";
import Singleton from "../singleton/singleton";

const BdController: IBd = Singleton.criaControladorBd();

export default BdController;