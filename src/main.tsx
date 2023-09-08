import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RootStore} from "./stores/RootStore.ts";



const root = new RootStore()


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <App root={root}  />
    </React.StrictMode>,
);

