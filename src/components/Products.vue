<script setup>
import {onMounted, ref, watch} from "vue";
import ProductCard from "./ProductCard.vue";
import axios from "axios";
import {getProducts} from "../api/api.js";
const sortMethod = ref("")
const products = ref([])
const searchValue = ref("")




onMounted(async () => {
  products.value = await getProducts()

})

watch(sortMethod , async () => {
  products.value = await getProducts(`/?sortBy=${sortMethod.value}` , `&searchValue=${searchValue.value}`)
})

watch(searchValue , async () => {
  searchValue.value = searchValue.value.toLowerCase()
  if(!sortMethod.value){
    products.value = await getProducts(`` , `/?searchValue=${searchValue.value}`)
  }else{

  products.value = await getProducts(`/?sortBy=${sortMethod.value}&` , `searchValue=${searchValue.value}`)
  }
})


</script>
<template>
  <div class="filter-wrapper">
    <h1 class="filter-title">Все кроссовки</h1>
    <div class="filter-container">
      <select class="filter-sort" v-model="sortMethod">
        <option value="">Сортировка по умолчанию</option>
        <option value="asc">По цене возрастания</option>
        <option value="desc">По цене убывания</option>
      </select>
      <input class="filter-search" placeholder="Поиск..." v-model="searchValue"/>
    </div>
  </div>
  <div class="products-container">
    <ProductCard v-for="product in products" :key="product.id" :id="product.id" :img="product.img" :name="product.name"
                 :price="product.price" :isFavourite="false" :isAdded="false"/>

  </div>

</template>
<style scoped>
.filter-wrapper{
  width: 80%;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
}
.filter-title{
  font-weight: 700;
  font-size: 32px;
}
.filter-container{
  display: flex;
  gap: 25px;
}

.filter-sort{
  width: 200px;
  padding: 12px;
  border: 1px solid #9D9D9D;
  border-radius: 10px;
  color: #9D9D9D;
}

.filter-search{
  padding: 12px;
  padding-left: 38px;
  border-radius: 10px;
  border: 1px solid #9D9D9D;
  outline: none;
  background-image: url("public/search.svg") ;
  background-repeat: no-repeat;
  background-position: 5% 50%;
}
.filter-search:focus{
  border: 1px solid #5C5C5C;

}

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
</style>