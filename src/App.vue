<script setup>
import Header from "./components/Header.vue";
import Products from "./components/Products.vue";
import ProductsFIlter from "./components/ProductsFIlter.vue";
import Favourites from "./components/Favourites.vue";
import {Toaster,toast} from "vue-sonner";



</script>

<template>
  <div class="wrapper">

    <Header/>
    <Toaster position="top-right" />

<!--    <ProductsFIlter/>-->
<!--    <Favourites/>-->
<!--    <Products/>-->
    <RouterView />
  </div>
</template>

<style scoped>
  .wrapper{
    max-width: 1280px;
    width: 80%;
    background-color: white;
    margin: auto;

    height: 100vh;
    border-radius:20px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    margin-top: 70px;
  }
</style>