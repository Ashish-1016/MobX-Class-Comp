import  { Component } from 'react';
import {observer} from "mobx-react";
// import {initRouter} from "./routerConfigs/initRouter.ts";
// import {RouterContext, RouterView} from "mobx-state-router";
// import {viewMap} from "./routerConfigs/viewMap.tsx";
import Home from "./Home.tsx";
import {RootStore} from "./stores/RootStore.ts";
import Cart from "./Cart.tsx";


interface Props {
    root:RootStore,

}
class App extends Component<Props> {
    render() {
        return (
            <>
            <Home root={this.props.root} />
             <Cart root={this.props.root} />
            </>
        );
    }
}

export default observer(App);