<script lang="ts" setup>
import { ref } from 'vue';
import Card from './widgets/Card.vue'; 
import Deck from './entities/deck/model/model'
import Hand from './entities/poker-hand/model/main'
import { toCount  } from './features/hand-evaluate/rules';
const deck = new Deck(); 
const hand = new Hand(deck.getCards());


const handCards = ref(hand.handCards.slice(0, 8));  
</script>

<template>
  <Card
    v-for="(card, index) in handCards"
    :key="index"
    :card="card.path"
    :fn="() => {
      card.stateUse = !card.stateUse;
      console.log(handCards);
    }"
  />
  <hr />
  <span><button @click="console.log(toCount(hand.getUsed()))">caluculte</button></span>
</template>

