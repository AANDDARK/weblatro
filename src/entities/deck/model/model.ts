// chatgpt thanks
import { Card, CardRank, CardSuit } from './types'; 

export default class Deck {
  private deck: Card[] = [];

  private readonly suits: CardSuit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
  private readonly ranks: CardRank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  constructor() {
    this.generateDeck();
  }

  private generateDeck() {
    this.deck = [];

    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        this.deck.push({
          suit,
          rank,
         stateUse: false,
         path: `${rank.toLowerCase()}-hearth.webp`
        });
      }
    }
    this.shuffle()
  }

  private shuffle(): this {
    let m = this.deck.length, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      [this.deck[m], this.deck[i]] = [this.deck[i], this.deck[m]];
    }
    return this;
  }

  public draw(count: number): Card[] {
    return this.deck.splice(-count).reverse();
  }

  public getCards(): Card[] {
    return [...this.deck.slice(0, 8)];
  }

  public  getCardsGlobal(): Card[] {
    return [...this.deck];
  }


}
