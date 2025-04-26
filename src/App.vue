<script  lang="ts">
import { Deck } from './entities/deck/model/model';
import { countPairs, groupByRank, isFlush,  isFullHouse,  isStainge, muchEqual } from './features/hand-evaluate/rules';
const hand = [
  { rank: "3", suit: 'hearts' },
  { rank: "3", suit: 'hearts' },
  { rank: "3", suit: 'hearts' },
  { rank: "6", suit: 'hearts' },
  { rank: "6", suit: 'hearts' },
];
console.log(isFullHouse(hand))
    
</script>

<template>
    
</template>

<style scoped>
</style>
