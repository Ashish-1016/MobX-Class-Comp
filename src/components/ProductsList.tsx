import {Component} from "react";
import {IProduct} from "../typings.ts";
import ProductCard from "./ProductCard.tsx";
import {RootStore} from "../stores/RootStore.ts";


interface Props{
    products:IProduct[]
    root:RootStore
}

class ProductsList extends Component<Props>{
    render() {
        return (
            <div>
                {
                    this.props.products.map((prod)=>{
                        return(
                            <ProductCard
                                key={prod.id}
                                product={prod}
                                root={this.props.root}
                                hasAddButton={true}
                            />
                        )
                    })
                }

            </div>
        );
    }

}

export default ProductsList