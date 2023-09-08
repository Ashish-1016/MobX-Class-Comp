import {action, makeObservable, observable} from "mobx";
import {ICart, ICartStore} from "../typings.ts";
import {RootStore} from "./RootStore.ts";

export class CartStore {
    Cart:ICartStore[]=[]
    root:RootStore
    constructor(root:RootStore) {
        this.root=root
        makeObservable(this,{
            Cart:observable,
            addToCart:action
        })
    }
    get cart(){
        return this.Cart
    }

    addToCart(product:ICart){
        const existingProduct = this.Cart.find(item => item.product.id=== product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            this.Cart.push({
                product: product,
                quantity: 1,
            });
        }
        console.log(this.Cart)
    }






}