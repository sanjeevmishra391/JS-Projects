const createDeck =()=> {
  return {
    deck: [],
    drawnCards: [],
    values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    suits: ['Clubs', 'Spades', 'Hearts', 'Diamonds'],

    initializeDeck() {
      const {
        values,
        suits,
        deck
      } = this;

      for(let value of values) {
        for(let suit of suits) {
          deck.push({value, suit})
        }
      }
    },

    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },

    drawMultiple(num) {
      const cardSet = [];
      for(let i=0; i<num; i++)
      {
        cardSet.push(this.drawCard());
      }
      return cardSet;
    },

    shuffle() {
      const {deck} = this;
      for(let i = deck.length-1; i>=0; i--)
      {
        let j = Math.floor(Math.random()*deck.length);
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  }
}

const deck1 = createDeck();
deck1.initializeDeck();
deck1.shuffle();
deck1.drawMultiple(5);

const deck2 = createDeck();
deck2.initializeDeck();
deck2.drawMultiple(13);
