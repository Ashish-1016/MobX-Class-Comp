import {ProductStore} from "./ProductStore.ts";
import {CartStore} from "./CartStore.ts";


export class  RootStore {

    productStore: ProductStore
    cartStore:CartStore

    constructor() {
        this.productStore=new ProductStore(this)
        this.cartStore=new CartStore(this)
    }

}