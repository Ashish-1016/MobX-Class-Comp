import {Component} from "react";
import {RootStore} from "./stores/RootStore.ts";
import ProductCard from "./components/ProductCard.tsx";
import {observer} from "mobx-react";

interface Props {
    root:RootStore,
}

class Cart extends Component<Props> {

    render() {

        console.log('Cart Items',this.props.root.cartStore.Cart)


        return (
            <div className='flex flex-col items-center h-[100vh]'>
                Cart Component
                <section>
                    Your Cart Items:
                    {
                        this.props.root.cartStore.cart.map((item)=>{
                            return(
                                <ProductCard product={item.product} root={this.props.root} hasAddButton={false}/>
                            )
                        })
                    }
                </section>

            </div>
        );
    }

}

export default observer(Cart)