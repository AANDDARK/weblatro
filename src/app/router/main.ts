import { createMemoryHistory, createRouter } from 'vue-router'


import admin from '../../page/admin.vue'
const routes = [
  { path: '/', component: admin },

]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})