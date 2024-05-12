<script setup>
  import {ref} from "vue";

  const actions = ref([
    {
      img:"/public/cart.svg",
      name:"Корзина",
      url:"/cart"
    },
    {
      img:"/public/heart.svg",
      name:"Закладки",
      url:"/favourites"

    },
    {
      img:"/public/profile.svg",
      name:"Профиль",
      url:"/profile"

    }
  ])

</script>


<template>
  <header class="header-wrapper">
      <RouterLink class="logo-inner" to="/">
      <img class="logo" src="../../public/logo.png">
      <div class="logo-info">

        <h3 class="logo-name"> BIG BOY</h3>
        <span class="logo-description">Магазин лучших кроссовок</span>
      </div>
      </RouterLink>

    <div class="header-actions" >
        <RouterLink class="action" v-for="action in actions"  :to="action.url">

          <img class="icon" :src="action.img" alt="icon"/>
          <span class="action-name">{{action.name}}</span>
        </RouterLink>
    </div>
  </header>
</template>


<style scoped>
  .header-wrapper{
    width: 80%;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo-inner{
    display: flex;
    gap: 15px;
  }
  .logo{
    width: 40px;
    height: 40px;
  }
  .logo-name {
    font-weight: 700;
    font-size: 20px;}
  .logo-description {
    color: #9D9D9D;
  }
  .icon{
    width: 20px;
    height: 20px;
  }
  .header-actions{
    display: flex;
    gap: 30px;
  }
  .action{
    display: flex;
    gap: 10px;
  }
  .action-name{
    color: #5C5C5C;

  }
</style>