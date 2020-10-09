const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store an integer id and a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should create a random number id if the id argument is NaN', function() {
    const card = new Card('twinkies', 'What allows you to define a set of related information using key-value pairs?');
    expect(isNaN(card.id)).to.equal(false);
  });

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function']);
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });

  it('should convert non-string answer values into strings', function() {
    const card = new Card(1, 'What\'s your favorite number?', ['one', 2, 3], 3);
    expect(card.answers).to.deep.equal(['one', '2', '3']);
    expect(card.correctAnswer).to.equal('3');
  });
});
