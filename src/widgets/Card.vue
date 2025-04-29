<template>
    <button @click="fn">
    <img :src="card" alt="">
    </button>
</template>
<script lang="ts" setup>
    const props = defineProps<{
  card: string;
  fn: () => void;
}>();
</script>   