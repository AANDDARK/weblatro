import { Card } from "../../entities/deck/model/types";

export const muchEqual = (cards: Array<Card>) => {
    
    let temp = cards.map(card => rankToNumber(card.rank));  
  
    temp = temp.sort((a, b) => a - b);  
    console.log(temp)
  const stack: number[] = [];
  for (let i = 0; i < temp.length; i++) {
    if (i === 0) {
      stack.push(temp[i]);
    } else if (stack[i - 1] == temp[i]) {
      stack.push(temp[i]);
    } else {
      return i; 
    }
  }
  
}

const rankToNumber = (rank: string) => {
    switch (rank) {
      case "J": return 11;
      case "Q": return 12;
      case "K": return 13;
      case "A": return 14;
      default: return Number(rank);  
    }
  };
export const isFlush = (cards: Array<Card>) =>  cards.length > 0  &&  cards.every(card => card.suit === cards[0].suit);
export const isStainge = (cards: Array<any>) => {
    
  let temp = cards.map(card => rankToNumber(card.rank));  

  temp = temp.sort((a, b) => a - b);  
  console.log(temp)
const stack: number[] = [];
for (let i = 0; i < temp.length; i++) {
  if (i === 0) {
    stack.push(temp[i]);  
  } else if (temp[i] === stack[stack.length - 1] + 1) {  
    stack.push(temp[i]);
  } else if (stack.length === 5) {  
    return true;  
  } else {
    return false;  
  }
}
return stack.length === 5;
}
export const isStaingeFlush = (cards: Array<any>) => {
  const flush: boolean = isFlush(cards);
  const stainge: boolean = isStainge(cards)

  if(flush && stainge === true){
    return true
  } else {
    return false
  }
}