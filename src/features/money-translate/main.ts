import { useCountStore } from "../../app/store/count/main";
import { useMoneyStore } from "../../app/store/money/main";

export function countToMoney() {
    const count = useCountStore();
    const money = useMoneyStore();
    money.$patch({ money: money.money + Math.floor((count.count) / 100)});
    console.log(Math.round(money.money))
    count.$reset()
}
