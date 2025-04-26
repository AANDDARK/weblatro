<script  lang="ts">
import { Deck } from './entities/deck/model/model';
import { isFlush, isStainge, muchEqual } from './features/hand-evaluate/rules';
const hand = [
  { rank: "4", suit: 'hearts' },
  { rank: "5", suit: 'hearts' },
  { rank: "6", suit: 'hearts' },
  
];
console.log(isStainge(hand))
    
</script>

<template>
    
</template>

<style scoped>
</style>
