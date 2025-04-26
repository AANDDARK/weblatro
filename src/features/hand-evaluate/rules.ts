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
export const groupByRank = (cards: Array<any>) => {
  const grouped: { [key: string]: number } = {};
  cards.forEach(card => {
    const rank = card.rank;
    grouped[rank] = (grouped[rank] || 0) + 1;
  });
  return grouped;
};
export const countPairs = (cards: Array<any>) => {
  const grouped = groupByRank(cards);  
  
  
  const pairCount = Object.values(grouped).filter(count => count === 2).length;
  
  return pairCount;  
};
export const isFullHouse = (cards: Array<any>) => {
  const grouped = groupByRank(cards);

  const counts = Object.values(grouped);

  const hasThree = counts.includes(3);
  const hasTwo = counts.includes(2);

  return hasThree && hasTwo;
};

