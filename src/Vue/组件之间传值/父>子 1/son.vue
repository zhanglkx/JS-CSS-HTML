<template>
  <button>
    点击{{ papa.count }}
  </button>
  <div>{{ papa.count }}</div>
</template>

<script setup>
import {watchEffect} from 'vue';

const papa = defineProps({count});

watchEffect(() => {
  console.log('props.count === ', papa.count)
})

</script>

<style scoped>

</style>
