https://github.com/brabbuss/flashcards-starter
---

# Terminal FlashCards
###### Test your knowledge!

---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Resources](#resources)
* [Contributors](#contributors)

## Introduction
The FlashCard app is an app that tests the user's knowledge on a given subject with a set of virtual flashcards through the terminal.

The FlashCard project is based on project criteria laid out for Turing Front End students in week 1 of Mod 2 of their time in Turing, as laid out [here](https://frontend.turing.io/projects/flash-cards.html). 

The project pushes students to leverage their knowledge and understanding of Javascript - particularly around `Classes` and more generally OOP, scope, and to a smaller extent iterating over arrays - to deliver an MVP that has beeen vetted by a host of test suites written by the student (using TDD).

## Features
---
* [Installation](#installation)
* [App Mechanics](#app-mechanics)
* [Fisher-Yates Shuffle Method](#fisher-yates-shuffle-method)
* [UX, Animations and Extensions](#ux-animations-and-extensions)
* [Roadmap](#roadmap)
---

#### Installation
The game is a simple game of traditional slapjack. Players alternate turns playing cards face-up into a central pile until a card that can be 'slapped' appears. A jack or wild can be slapped, winning the hand. When a hand is won, all the cards of the central pile go to the winning players hand, and then their total cards are shuffled. The goal is to collect all the cards to win the round. Other winning slaps include two cards in a row with the same value (includeing king, queen, ace) or two cards with the same value - one on top, one at the third spot below it (a 'sandwich'). When a player is out of cards, they may slap back in on a valid hand, but can no longer deal until they gain a card.

<details>
  <summary>**Under the Hood**</summary>
A host of logic discussed further below powers this web app. Players interact with the game via keypresses - these key presses are attached to an event listener which in turn will create a keyboard event object. This object is passed to the nexessary functions to derive the information we need to help play proceed. Upon keypress, a cascade of functions is called and checked against various flags within the Player and Game classes.
</details>


#### App Mechanics
The game is a simple game of traditional slapjack. Players alternate turns playing cards face-up into a central pile until a card that can be 'slapped' appears. A jack or wild can be slapped, winning the hand. When a hand is won, all the cards of the central pile go to the winning players hand, and then their total cards are shuffled. The goal is to collect all the cards to win the round. Other winning slaps include two cards in a row with the same value (includeing king, queen, ace) or two cards with the same value - one on top, one at the third spot below it (a 'sandwich'). When a player is out of cards, they may slap back in on a valid hand, but can no longer deal until they gain a card.

<details>
  <summary>**Under the Hood**</summary>
A host of logic discussed further below powers this web app. Players interact with the game via keypresses - these key presses are attached to an event listener which in turn will create a keyboard event object. This object is passed to the nexessary functions to derive the information we need to help play proceed. Upon keypress, a cascade of functions is called and checked against various flags within the Player and Game classes.
</details>

#### Fisher-Yates Shuffle Method
The method being drawn on was first developed by Ronald Fisher and Frank Yates. More can be read [here](https://bost.ocks.org/mike/shuffle/) along with some really cool visualizations. Broken down into steps as originally conceived (on pen and paper), the method goes as follows:

- Write down the numbers from 1 through N.
- Pick a random number k between one and the number of unstruck numbers remaining (inclusive).
- Counting from the low end, strike out the kth number not yet struck out, and write it down at the end of a separate list.
- Repeat from step 2 until all the numbers have been struck out.
- The sequence of numbers written down in step 3 is now a random permutation of the original numbers.

Ultimately that looked like the following for SlapJack (this method is called when a player wins a hand to shuffle their new deck, as well as beginning of gameplay to shuffle and divide the deck):

![Fisher-Yates Shuffle in SlapJack](https://user-images.githubusercontent.com/66697338/93957268-28436c00-fd11-11ea-8483-81f4cc2d5ab4.png)

#### UX, Animations and Extensions

Adding animations with intention was a task happily tackled. The opening instructions with 'start' button sets the tone for the game. CSS :hover was used on the tutorial div to animate it with a keyframe, to make it 'shake' with anticipation of the upcoming game. More keyframes were used to animate a slow pulse to indicate player turns, danger indicator for low cards, and as well as the pulse on the helper header text for any given player action. 

The aim of animations were to aid in UX rather than detract from it with superflous, unhelpful flash. Animations are small calls to action to both help direct game flow and enjoyment, but also helps to enhance enjoyment with relevant and often amusing feedback.

Additionally, sounds were added. Perhaps some of the most enjoyment was had setting up a function to randomly choose from an array of sounds on certain player actions (successful slap, invalid slap or deal). TURN ON YOUR SOUND!

#### Roadmap

In future iterations, additions to the game would include:
- Ability to add your own data set 
- Ability to incorporate different data sets into multiple rounds
- 'Beat the clock' feature - a pass is 90%+ and under 3 minutes


#### Resources

Fisher-Yates Shuffle Method:
- https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
- https://bost.ocks.org/mike/shuffle/

## Contributors
<img src="https://avatars1.githubusercontent.com/u/66697338?s=460&u=3d2e338fdeb625c1940a87b1cfdb7ba6e7d16c5c&v=4" alt="Coding Magician"
 width="150" height="auto" style="float: left" />\
**Scott Brabson**

[GitHub Profile](https://github.com/brabbuss)

FE Engineering student at Turing School in Mod 2 (of 4) who has found no end to the joy that is speaking the language of JS.
