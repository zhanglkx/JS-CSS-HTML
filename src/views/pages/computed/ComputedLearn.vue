<template>
  <div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <br>
    <hr>
    <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div>
  </div>
</template>
 

<script setup>
import { ref, computed } from "vue"

const firstName = ref("J.K.")
const lastName = ref("Rowling")

const fullName = computed(() => {
  console.log("computed获取full");
  return firstName.value + lastName.value
})

const getFullName = function () {
  console.log("methods获取full");
  return firstName.value + lastName.value
}
</script>
 