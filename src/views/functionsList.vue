<template>

  <div class="">
    <ul class="list">
      <li class="list_li" v-for="(item, index) in 100" :key="index">
        <a-button
          style="height: 100%"
          block
          type="primary">{{ item }}
        </a-button>
      </li>
    </ul>
  </div>

</template>


<script setup lang="ts">
import { onMounted, ref } from "vue";


</script>


<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
}

.list .list_li {
    width: 70px;
    height: 50px;
    background: #4ba946;
    margin: 0 auto;
}

</style>
