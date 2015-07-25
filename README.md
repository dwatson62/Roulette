Roulette
=======================

[![Build Status](https://travis-ci.org/dwatson62/roulette.svg?branch=master)](https://travis-ci.org/dwatson62/roulette) [![Code Climate](https://codeclimate.com/github/dwatson62/roulette/badges/gpa.svg)](https://codeclimate.com/github/dwatson62/roulette)

## Synopsis

This is my personal project to practice MEAN JS and CSS styling. It is a game replicating European style Roulette using play money.

Currently players can bet multiple amounts on different on different numbers, colours, odd/even, columns, high/low and dozens. Can also view past spins for that particular session, and repeat the previous bet.

Most of the game functionality is in pace. It is missing the functionality for some of the inside bets, such as split bets, corner bets, and line bets. However, these will be difficult to implement without styling and displaying the board properly.

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
- [ ] CSS Styling
- [ ] Set the spin() to run every 10 seconds
- [ ] Add functionality for other inside bets

## Collaborators

- Daryl (http://www.github.com/dwatson62)
