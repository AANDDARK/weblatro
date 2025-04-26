import { Card } from "../../deck/model/types"

class Hand{
    handCards: Array<Card>;
    constructor(){
       
    }
    public useCard(){
        
    }
    public changeCardState(card: Card){
        if(card.stateUse == false){
            card.stateUse = true;
        } else{
            card.stateUse = false;
        }
    }
}