import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ProductStore} from "./stores/ProductStore.ts";
import {RootStore} from "./stores/RootStore.ts";
import {CartStore} from "./stores/CartStore.ts";



const root = new RootStore()
const productStore = new ProductStore(root)
const cartStore = new CartStore(root)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <App root={root}  />
    </React.StrictMode>,
);

