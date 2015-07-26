Roulette
=======================

[![Build Status](https://travis-ci.org/dwatson62/roulette.svg?branch=master)](https://travis-ci.org/dwatson62/roulette) [![Code Climate](https://codeclimate.com/github/dwatson62/roulette/badges/gpa.svg)](https://codeclimate.com/github/dwatson62/roulette)

## Synopsis

This is my personal project to practice MEAN JS and CSS styling. It is a game replicating European style Roulette using play money.

Currently players can bet multiple amounts on different on different numbers, colours, odd/even, columns, high/low and dozens. Can also view past spins for that particular session, and repeat the previous bet. Javascript setInterval() is being used to spin the wheel every 15 seconds, with no more bets being allowed for the final 5.

Most of the game functionality is in place. It is missing the functionality for some of the inside bets, such as split bets, corner bets, and line bets.

I have used jquery-ui to handle the dragging and dropping of chips. The game becomes rather laggy at times. Strangely enough the column bets do not work for dragging, but can still bet by clicking.

## Installation

- Clone down to your computer
- Run npm start (this will download all npm and bower packages, and launch the server)
- Visit http://localhost:3000

## Tests

- Clone down to your computer
- Run npm test (this will download all npm and bower packages, and run the Jasmine/Karma tests)
- To run the protractor tests, in separate windows run npm start, webdriver-manager start, protractor start spec/e2e/conf.js

![Roulette](http://gamesofroulette.com/img/pictures/roulette-rules/european-roulette-table.gif)

![Roulette bets](http://bestroulette.net/wp-content/uploads/2009/12/types-of-roulette-bets.gif)

## Technologies Used

- Javascript
- Angular
- Express, Node
- Karma, Jasmine, Protractor

## Job List

- [ ] Setup Coveralls
- [ ] Setup travis to run protractor tests
- [ ] End the game once player balance gets to £0
- [ ] Add functionality for other inside bets
