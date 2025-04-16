<template>
    <div v-if="store.isAdmin" id="page">
      <h1>Admin Dashboard</h1>
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
  