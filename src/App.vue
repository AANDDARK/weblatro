<script lang="ts" setup>
import { ref } from 'vue';
import Card from './widgets/Card.vue'; 
import Deck from './entities/deck/model/model'
import Hand from './entities/poker-hand/model/main'
import Overplay from './widgets/Overplay.vue'
import { useGameProcStore } from './app/store/gameProc/main';
import { useCountStore } from './app/store/count/main';
const deck = new Deck(); 
const hand = new Hand(deck.getCards());
const error = ref(false)
const handCardsElement = ref(hand.handCards);  
const gameProcStore = useGameProcStore();
const isGameStarted = ref(false);
const countStore = useCountStore();
const count = ref(countStore.count)

const startGame = () => {
  isGameStarted.value = true;
  gameProcStore.init();
}

const calc = () => {
  try{
    hand.useCard()
    let cards = deck.draw(8 - hand.handCards.length)
    cards.forEach(card => {
      hand.handCards.push(card)
    })
    gameProcStore.nextPlay()
    handCardsElement.value = hand.handCards
  } catch{
      error.value = true;
  }
}
const rejectCard = () => {
  const gameProcStore = useGameProcStore()
  if (gameProcStore.canReject()) {
    hand.rejectCard()
    let cards = deck.draw(8 - hand.handCards.length)
    cards.forEach(card => {
      hand.handCards.push(card)
    })
    gameProcStore.nextReject()
    handCardsElement.value = hand.handCards
  }
}
</script>

<template>
  <Overplay v-if="!isGameStarted" @start-game="startGame" />
  <div v-else class="game-container">
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
    <div class="flex flex-col items-center gap-2">
      <div class="flex gap-4">
        <button 
          @click="calc()" 
          :disabled="!gameProcStore.canPlay()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Play ({{ gameProcStore.playCount }})
        </button>
        <button 
          @click="rejectCard()" 
          :disabled="!gameProcStore.canReject()"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Reject ({{ gameProcStore.rejectCount }})
        </button>
      </div>
      <div class="flex gap-4 text-lg">
        <span>Plays left: {{ gameProcStore.playCount }}</span>
        <span>Rejects left: {{ gameProcStore.rejectCount }}</span>
      </div>
    </div>
    <hr />
    <span>Count now: {{ count }}</span>
    <span v-if="error" class="bg-red-500">Too many used cards. Maximum allowed is 5.</span>
    <span v-if="gameProcStore.playCount === 0" class="bg-yellow-500 p-2 rounded">Game Over! 🎮</span>
  </div>
</template>

<style scoped>
.game-container {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

