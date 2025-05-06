<script lang="ts" setup>
import { ref } from 'vue';
import Card from './widgets/Card.vue'; 
import Deck from './entities/deck/model/model'
import Hand from './entities/poker-hand/model/main'
const deck = new Deck(); 
const hand = new Hand(deck.getCards());
const error = ref(false)
const handCardsElement = ref(hand.handCards);  
const calc = () => {
  try{
    hand.useCard()
    let cards = deck.draw(8 - hand.handCards.length)
    cards.forEach(card => {
      hand.handCards.push(card)
    })
    handCardsElement.value = hand.handCards
  } catch{
      error.value = true;
  }
}
</script>

<template>
<div class="flex">
  <Card
    v-for="(card, index) in handCardsElement"
    :key="index"
    :card="card.path"
    :fn="() => {
      hand.changeCardState(card);
      console.log(handCardsElement);
    }"
    
  />
</div>
  <hr />
  <span><button @click="calc()">calculate</button></span>
  <hr />
  <span v-if="error" class="bg-red-500">Too many used cards. Maximum allowed is 5.</span>
</template>

