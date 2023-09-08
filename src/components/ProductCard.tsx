import {Component} from "react";
import {ICart} from "../typings.ts";
import {observer} from "mobx-react";
import {RootStore} from "../stores/RootStore.ts";

interface Props {
    product:ICart,
    root:RootStore
    hasAddButton:boolean
}

class ProductCard extends Component<Props> {
    render() {
        return (
            <section className='flex border items-center justify-between'>
                <div className='w-40 h-40'>
                    <img className='object-contain' src={this.props.product?.thumbnail} alt={this.props.product.title} />
                </div>
                <div className='flex flex-col items-start ml-10'>
                    <h1>{this.props.product?.title}</h1>
                    <p className='line-clamp-1'> {this.props.product?.description}</p>
                    <span className='text-xl font-bold'>${this.props.product?.price}</span>
                    <span>{this.props.product?.category}</span>
                </div>
                <div className='flex flex-col items-center'>
                    {
                        this.props.hasAddButton ? (
                            <>
                                <button onClick={()=>this.props.root.cartStore.addToCart(this.props.product)} className='bg-green-500 p-1 rounded-md '>Add To Cart</button>
                                <button className='bg-red-500 p-2 rounded-md'>Remove from Cart</button>
                            </>
                            ) :
                        (<button className='bg-red-500 p-2 rounded-md'>Remove from Cart</button>)
                    }


                </div>
            </section>
        );
    }

}

export default observer(ProductCard)