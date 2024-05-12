<script setup>

import ProductCard from "./ProductCard.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import {getAddedProducts} from "../api/api.js";
const products = ref([])

onMounted(async () => {
  products.value = await getAddedProducts(1,"http://localhost:3000/carts/userCart")
})
// watch(products , async () => {
//   products.value = await getAddedProducts(1,"http://localhost:3000/carts/userCart")
// })
</script>

<template>
  <div class="products-container" >
    <ProductCard v-for="product in products" :key="product.id" :id="product.productid"  :img="product.img" :name="product.name"
                 :price="+product.price" :isFavourite="false" :isAdded="true"/>

  </div>
  <div class="favourties-inner" >
    <img src="../../public/emoji-1.png"/>
    <h2>Закладки пустые</h2>
  </div>
</template>

<style scoped>
.products-container {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: auto;
  overflow-x: hidden;
  height: 70vh;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #BDBDBD;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9D9D9D;
}

@media (max-width: 1280px) {
  .products-container{
    grid-template-columns: repeat(3, 1fr);
    height: 70vh;
  }
}
@media (max-width: 1024px) {
  .products-container{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .products-container{
    grid-template-columns: repeat(1, 1fr);
  }
  .card{
    margin: auto;
  }
}


.favourties-inner{
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
.favourties-inner h2{
  font-size: 50px;
  font-weight: 600;
}
</style>