import { useCountStore } from "../../../app/store/count/main";
import { toCount } from "../../../features/hand-evaluate/rules";
import { Card } from "../../deck/model/types"

export default class Hand{
   public handCards: Array<Card>;
    constructor(initialCards: Array<Card> = []) {
        this.handCards = initialCards.slice(0, 8);
    }
    public rejectCard(){
        this.handCards = this.handCards.filter((card) => card.stateUse == false);
    }
    public useCard(){
        const store = useCountStore()
        const temp = this.handCards.filter((card) => card.stateUse === true);
        if(temp.length > 5) throw new Error
        store.$patch({count: toCount(temp)})
         this.handCards = this.handCards.filter((card) => card.stateUse = false ); 
        this.handCards.forEach(card => {
            card.stateUse = false;
          });
    }
    public changeCardState(card: Card){
        if(card.stateUse == false){
            card.stateUse = true;
        } else{
            card.stateUse = false;
        }
    }
    public getCards(cards: Array<Card>) {
        if (this.handCards.length == 0) {
            for (let i = 0; i < 8 && cards.length > 0; i++) {
                const card = cards.shift();
                if (card) {
                    this.transferCard(card);
                }
            }
        } else {
            const much = 8 - this.handCards.length;
            for (let i = 0; i < much && cards.length > 0; i++) {
                const card = cards.shift();
                if (card) {
                    this.transferCard(card);
                }
            }
        }
    }
    
    private transferCard(card: Card){
        this.handCards.push(card)
    }
}