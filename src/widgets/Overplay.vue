<template>
    <div class="overlay">
        <div class="overlay-content">
            <h2 class="text-2xl font-bold mb-4">Welcome to Weblatro! 🎮</h2>
            <p class="mb-4">You have 4 plays and 6 rejects to make your best hand!</p>
            <button 
                @click="startGame"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105"
            >
                Start Game! 🚀
            </button>
            <div>
                <span>the higest count: {{ count }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCountStore } from '../app/store/count/main'

const emit = defineEmits(['start-game']);

const startGame = () => {
    emit('start-game');
}

const countStore = useCountStore()
const count = ref(countStore.higest)
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.5s ease-in-out;
}

.overlay-content {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
</style>
