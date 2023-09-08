
import  { Component } from 'react';
import ProductsList from "./components/ProductsList.tsx";
import {RootStore} from "./stores/RootStore.ts";
import {ProductStore} from "./stores/ProductStore.ts";
import {observer} from "mobx-react";

interface Props {
    root:RootStore,
    productStore:ProductStore
}

class Home extends Component<Props> {

    componentDidMount() {
        const {productStore}=this.props
        productStore.fetchProducts("https://dummyjson.com/products")
    }

    render() {

        const {Products}=this.props.productStore
        console.log('Home:',Products)

        return (
            <section className='flex flex-col items-center mt-10'>
                <h1 className='text-2xl'>Products App - Class Component, MobX, MobX State router</h1>
                <h1>Products Component</h1>
                <div className='w-[80vw] h-[80vh] border border-black overflow-auto'>
                    <ProductsList products={Products} root={this.props.root}/>
                </div>
            </section>

        );
    }
}

export default observer(Home);