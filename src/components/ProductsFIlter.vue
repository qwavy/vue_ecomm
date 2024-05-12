<script setup>

</script>

<template>
  <div class="filter-wrapper">
    <h1 class="filter-title">Все кроссовки</h1>
    <div class="filter-container">
      <select class="filter-sort">
        <option value="">Сортировка по ...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
        <input class="filter-search" placeholder="Поиск..."/>
    </div>
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
</style>