import { defineStore } from "pinia";
interface moneyState{
    money: number;
}
export const useMoneyStore = defineStore('money', {
    state: (): moneyState => ({ money: 0 })
})

