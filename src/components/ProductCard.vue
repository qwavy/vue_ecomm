<script setup>
import {onMounted, ref, watch, watchEffect} from "vue";
import axios from "axios";
import {checkProductAdded, checkProductAddedCart} from "../api/api.js";
import {Toaster, toast} from 'vue-sonner'
import {errorNotify, successNotify} from "../toasts/toasts.js";

const props = defineProps({
  id: Number,
  img: String,
  name: String,
  price: Number,
  isFavourite: Boolean,
  isAdded: Boolean
})
const localIsAdded = ref(props.isAdded)
const localIsFavourite = ref(props.isFavourite)

const addToFavourites = async (id, name = "") => {


  localIsFavourite.value = !localIsFavourite.value


  if (localIsFavourite.value) {
    if (await checkProductAdded(1, name)) {
      localIsFavourite.value = !localIsFavourite.value
      return errorNotify("Этот продукт уже есть в закладках")
    }
    axios.post(`http://localhost:3000/favourites/userFavourites`, {
      userId: 1,
      name: props.name,
      price: props.price,
      img: props.img
    })
        .catch((err) => console.log(err))
    return successNotify("Товар успешно в закладках")

  } else {

    axios.delete(`http://localhost:3000/favourites/userFavourites/1/${id}`)
        .catch((err) => console.log(err))
    return successNotify("Товар успешно удален")
  }


}

const addToCart = async (productId) => {
  localIsAdded.value = !localIsAdded.value
  console.log(productId)

  if (localIsAdded.value) {
    if (await checkProductAddedCart(1, productId)) {
      localIsAdded.value = !localIsAdded.value
      return errorNotify("Этот продукт уже есть в корзине")
    }
    axios.post(`http://localhost:3000/carts/userCart`, {
      userId: 1,
      productId: productId,
      name: props.name,
      price: props.price,
      img: props.img
    })
  } else {
    axios.delete(`http://localhost:3000/carts/userCart/1/${productId}`)
  }
}

</script>
<template>

  <div class="card">
    <button @click="addToFavourites(id,name)">
      <img class="favourite-icon" :src="localIsFavourite ? '/public/like-2.svg' : '/public/like-1.svg'"/>
    </button>
    <img :src="img" alt="card img" class="card-img">
    <h3 class="card-name">{{ name }}</h3>
    <p class="price">ЦЕНА:</p>
    <div class="price-container">
      <span class="card-price">{{ price }}</span>
      <button @click="addToCart(id)">
        <img :src="localIsAdded ? 'public/checked.svg' : '/public/plus.svg'"/>
      </button>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 200px;
  padding: 12px;
  transition: 0.3s;
}

.card-img {
  height: 170px;
  transition: 0.3s ease-out;
}

.card-img:hover {
  transform: scale(1.1);
}

.card-name {
  padding: 15px 0;
  font-size: 14px;
  font-weight: 400;
}

.price {
  color: #BDBDBD;
  font-size: 11px;
  font-weight: 500;
}

.card-price {
  font-size: 14px;
  font-weight: 700;
}

.price-container {
  display: flex;
  justify-content: space-between;
}

.favourite-icon {
  border: 1px solid #BDBDBD;
}
</style>