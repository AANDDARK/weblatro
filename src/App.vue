<script  lang="ts">
import { Deck } from './entities/deck/model/model';
import { toCount } from './features/hand-evaluate/rules';
const hand = [
  { rank: "3", suit: 'hearts' },
  { rank: "3", suit: 'hearts' },
  { rank: "3", suit: 'hearts' },
  { rank: "3", suit: 'hearts' },
  { rank: "3", suit: 'hearts' },
];
console.log(toCount(hand))
    
</script>

<template>
    
</template>

<style scoped>
</style>
