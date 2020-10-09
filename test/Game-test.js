const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
// const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Game', function() {

  let card1, card2, card3, card4, flashcards, deck;

  beforeEach (function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card3 = new Card(3, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card4 = new Card(4, 'What?', ['huh', 'yes', 'no'], 'yes');
    flashcards = [card1, card2, card3, card4];
    deck = new Deck(flashcards);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });

  it('should create and store Card objects in Deck', function() {
    const game = new Game();

    game.start()

    expect(game.deck.cards.length).to.equal(30);
    expect(game.deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should create a new Round using the Deck', function() {
    const game = new Game();

    game.start()

    expect(game.currentRound.deck.cards.length).to.equal(30);
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
