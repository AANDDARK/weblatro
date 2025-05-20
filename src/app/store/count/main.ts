
import { defineStore } from "pinia";
interface countState{
    count: number;
    higest: number;
}
export const useCountStore = defineStore('count', {
    state: (): countState => ({ count: 0, higest: 0 }),
    actions: { isHigest() {
        if (this.count > this.higest) {
            this.higest = this.count;
        } else {
            this.higest = this.higest;
        }
    }}
})

