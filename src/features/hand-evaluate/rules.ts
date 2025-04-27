import { Card } from "../../entities/deck/model/types";

 const muchEqual = (cards: Array<Card>) => {
    
    let temp = cards.map(card => rankToNumber(card.rank));  
  
    temp = temp.sort((a, b) => a - b);  
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
 const isFlush = (cards: Array<Card>) =>  cards.length > 0  &&  cards.every(card => card.suit === cards[0].suit);
 const isStainge = (cards: Array<Card>) => {
    
  let temp = cards.map(card => rankToNumber(card.rank));  

  temp = temp.sort((a, b) => a - b);  
  
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
 const isStaingeFlush = (cards: Array<Card>) => {
  const flush: boolean = isFlush(cards);
  const stainge: boolean = isStainge(cards)

  if(flush && stainge === true){
    return true
  } else {
    return false
  }
}
 const groupByRank = (cards: Array<Card>) => {
  const grouped: { [key: string]: number } = {};
  cards.forEach(card => {
    const rank = card.rank;
    grouped[rank] = (grouped[rank] || 0) + 1;
  });
  return grouped;
};
const countPairs = (cards: Array<Card>) => {
  const grouped = groupByRank(cards);  
  
  
  const pairCount = Object.values(grouped).filter(count => count === 2).length;
  
  return pairCount;  
};
 const isFullHouse = (cards: Array<Card>) => {
  const grouped = groupByRank(cards);

  const counts = Object.values(grouped);

  const hasThree = counts.includes(3);
  const hasTwo = counts.includes(2);

  return hasThree && hasTwo;
};
const countRank = (cards: Array<Card>) => {
  let temp = cards.map(card => rankToNumber(card.rank));
  return temp.reduce((acc: number, value: number) => acc + value)
}
export const toCount = (cards: Array<Card>) => {
  const point = countRank(cards)
  if(isStaingeFlush(cards)){
    return point * 100
  }
  if(isFullHouse(cards)){
    return point * 25
  }
  if(isFlush(cards)){
    return point * 10
  }
  if(isStainge(cards)){
    return point * 5
  }
  if(countPairs(cards) == 1){
    return point * 2
  }
  if(countPairs(cards) == 2){
    return point * 4
  }
  if(muchEqual(cards) == 3){
    return point * 15
  }
  if(muchEqual(cards) == 4){
    return point * 35
  }
}
