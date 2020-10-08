const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound;
    this.deck;
  }

  start() {
    let cards = data.prototypeData;
    let deckData = [];
    cards.forEach(card => {
      let newCard = new Card(card['id'], card['question'], card['answers'], card['correctAnswer']);
      deckData.push(newCard);
    });
    this.deck = new Deck(deckData);
    this.currentRound = new Round(this.deck)
    this.printMessage(this.deck)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
