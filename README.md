https://github.com/brabbuss/flashcards-starter
---

# Terminal FlashCards
###### Test your knowledge!

---
## Table of Contents
* [Introduction](#introduction)
* [Setup](#setup)
* [Features](#features)
* [Resources](#resources)
* [Contributors](#contributors)

## Introduction
The FlashCard app is an app that tests the user's knowledge on a given subject with a set of virtual flashcards through the terminal.

The FlashCard project is based on project criteria laid out for Turing Front End students in week 1 of Mod 2 of their time in Turing, as laid out [here](https://frontend.turing.io/projects/flash-cards.html). The project pushes students to leverage their knowledge and understanding of Javascript - particularly around `Classes` and more generally OOP, scope, and to a smaller extent iterating over arrays - to deliver an MVP that has beeen vetted by a host of test suites written by the student (using TDD).

## Setup

Clone this repo, change into the directory and install the library dependencies. Running `node index.js` from the root of your project directory should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```

If you see the above message, you're ready to start playing. Type the following in your terminal to begin the game:

```bash
node index.js
```

## Features
---
* [Game Mechanics](#game-mechanics)
* [Fisher-Yates Shuffle Method](#fisher-yates-shuffle-method)
* [Roadmap](#roadmap)
---

#### Game Mechanics
The game is a simple trivia game going over 30 'flashcards' to answer correctly. Each flashcard has an array of three answers to choose from. Each time the game is played, the order of the answers is randomized, so no cheating! The player chooses from one of three answers by highlighting one with the up/down arrow, or pressing the corresponding number (1, 2, or 3) and pressing `enter`. The player will receive feedback with whether the answer was correct or incorrect. At the end of the round (default of 30 questions/flashcards), play will end and the player is presented with a percentage score calculating total correct answers.

<details>
  <summary>**Under the Hood**</summary>
For this project, pre-existing code to make the game playable through the CLI (Command-Line-Interface) was provided. Outside of that, students were required to construct the game elements (ES6 Classes) from scratch. The game functions with 
</details>

![Gameplay](https://user-images.githubusercontent.com/66697338/95536463-58913880-09a8-11eb-9daf-bd15439f734a.gif)
*Flashcards initialization and gameplay*

![Final Percentage Correct](https://user-images.githubusercontent.com/66697338/95536471-5c24bf80-09a8-11eb-9f36-e03f719269c0.gif)
*End game state, displaying percent of correctly answered questions*

#### Fisher-Yates Shuffle Method
The method being drawn on was first developed by Ronald Fisher and Frank Yates. More can be read [here](https://bost.ocks.org/mike/shuffle/) along with some really cool visualizations. Broken down into steps as originally conceived (on pen and paper), the method goes as follows:

- Write down the numbers from 1 through N.
- Pick a random number k between one and the number of unstruck numbers remaining (inclusive).
- Counting from the low end, strike out the kth number not yet struck out, and write it down at the end of a separate list.
- Repeat from step 2 until all the numbers have been struck out.
- The sequence of numbers written down in step 3 is now a random permutation of the original numbers.

Ultimately the implementation of this method presents simply as randomly ordered answer options each time the game is launched, which perhaps is a bit of overkill...however the method is about as random as random gets. 

![Randomized Answers](https://user-images.githubusercontent.com/66697338/95536768-0d2b5a00-09a9-11eb-81e1-363f7ce97ef4.gif)
*Answer order is randomized each time the game is initialized*

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
