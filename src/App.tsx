import  { Component } from 'react';
import {observer} from "mobx-react";
// import {initRouter} from "./routerConfigs/initRouter.ts";
// import {RouterContext, RouterView} from "mobx-state-router";
// import {viewMap} from "./routerConfigs/viewMap.tsx";
import Home from "./Home.tsx";
import {RootStore} from "./stores/RootStore.ts";
import {ProductStore} from "./stores/ProductStore.ts";
import {CartStore} from "./stores/CartStore.ts";
import Cart from "./Cart.tsx";


interface Props {
    root:RootStore,
    productStore:ProductStore
    cartStore:CartStore
}
class App extends Component<Props> {
    render() {
        return (
            <>
            <Home root={this.props.root} productStore={this.props.productStore} />
             <Cart root={this.props.root} cartStore={this.props.cartStore}  />
            </>
        );
    }
}

export default observer(App);