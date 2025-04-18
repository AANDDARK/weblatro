
import { defineStore } from "pinia";
interface countState{
    count: number;
}
export const useCountStore = defineStore('count', {
    state: (): countState => ({ count: 0 })
})

