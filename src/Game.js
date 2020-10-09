const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound;
    this.deck;
  }

  start() {
    let cards = prototypeQuestions;
    let deckData = [];
    cards.forEach(card => {
      let newCard = new Card(card['id'], card['question'], card['answers'], card['correctAnswer']);
      let randomized = this.randomizeAnswers(newCard);
      deckData.push(randomized);
    });
    this.deck = new Deck(deckData);
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck);
    this.printQuestion(this.currentRound);
  }

  randomizeAnswers(card) {
    var m = card.answers.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = card.answers[m];
      card.answers[m] = card.answers[i];
      card.answers[i] = t;
    }
    return card;
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
