import { defineStore } from 'pinia'

export const useGameProcStore = defineStore('gameProc', {
  state: () => ({
    playCount: null,
    rejectCount: null,
  }),
  actions: {
    init() {
      this.playCount = 4;
      this.rejectCount = 6;
    },
    nextPlay() {
      if (this.playCount > 0) {
        this.playCount--;
        if (this.playCount === 0) {
          return "end";
        }
      }
    },
    nextReject() {
      if (this.rejectCount > 0) {
        this.rejectCount--;
      }
    },
    canPlay(): boolean {
      return this.playCount > 0;
    },
    canReject(): boolean {
      return this.rejectCount > 0;
    }
  },
});
