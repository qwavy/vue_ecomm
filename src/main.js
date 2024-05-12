import { createApp } from 'vue'
import {createWebHistory, createRouter} from "vue-router";
import './style.css'
import App from './App.vue'
import Products from "./components/Products.vue";
import Favourites from "./components/Favourites.vue";
import Cart from "./components/Cart.vue";

const routes = [
    {path: '/' , component: Products},
    {path: '/favourites' , component: Favourites},
    {path: '/cart' , component: Cart}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
