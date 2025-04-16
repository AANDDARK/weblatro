import { defineStore } from 'pinia';
import type { Role } from './types';

interface AdminState {
  role: Role;
}

export const useAdminStore = defineStore('admin', {
  state: (): AdminState => ({
    role: 'visitor', 
  }),
  getters: {
    isAdmin: (state: AdminState): boolean => state.role === 'admin',
  },
  actions: {
    loginAsAdmin() {
        this.role = 'admin';
      },
      logout() {
        this.role = 'visitor';
      },
  }
});
