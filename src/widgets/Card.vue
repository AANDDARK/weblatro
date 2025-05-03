<template>
    <button @click="fn">
    <img :src="card" alt="" id="card">
    </button>
</template>
<script lang="ts" setup>
  const props = defineProps<{
  card: string;
  fn: () => void;
}>();
</script>   
<style>
  #card{
    width: 250px;
    image-rendering: ;
    image-rendering: pixelated;
  }
</style>