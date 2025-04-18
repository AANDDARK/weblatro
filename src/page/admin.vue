<template>
    <div v-if="store.isAdmin" id="page">
      <h1>Admin Dashboard</h1>
      <h2>Money control panel</h2>
      <div>
        <input v-model="Imoney" />
        <button @click="moneyStore.$patch({money: Number(Imoney)})">give money</button>
        <input v-model="Icount"  />
        <button @click="countStore.$patch({count: Number(Icount)})">give count</button>
        <button @click="countToMoney">Translate count</button>
      </div>
      <button @click="store.logout">Logout</button>
    </div>
    <div v-else>
      <input
        
        v-model="password"
        placeholder="Enter admin password"
      />
      <button @click="handleLogin">Login</button>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAdminStore } from '../app/store/for-admin-page/main';
  import { countToMoney } from '../features/money-translate/main';
import { useMoneyStore } from '../app/store/money/main';
import { useCountStore } from '../app/store/count/main';
  const moneyStore = useMoneyStore()
  const countStore = useCountStore()
  const Icount = ref('')
  const Imoney = ref('')
  const store = useAdminStore();
  const password = ref('');
  const handleLogin = () => {
  if (password.value === import.meta.env.VITE_ADMIN_PASSWORD) {
    store.loginAsAdmin();
  } else {
    alert('Wrong password');
  }
};
  </script>
  