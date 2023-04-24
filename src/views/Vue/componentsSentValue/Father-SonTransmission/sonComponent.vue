<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <a-button @click="$emit('enlarge-text')">Enlarge text</a-button>
  </div>
</template>

<script setup lang="ts">
defineProps(["title"]);
defineEmits(["enlarge-text"]);
</script>

<style scoped>

</style>
