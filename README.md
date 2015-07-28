Roulette
=======================

[![Build Status](https://travis-ci.org/dwatson62/roulette.svg?branch=master)](https://travis-ci.org/dwatson62/roulette) [![Code Climate](https://codeclimate.com/github/dwatson62/roulette/badges/gpa.svg)](https://codeclimate.com/github/dwatson62/roulette)

![Roulette](https://github.com/dwatson62/roulette/blob/master/public/images/screenshot.png?raw=true)

## Synopsis

This is my personal project to practice Angular and CSS styling. It is a game replicating European style Roulette using play money.

Currently players can bet multiple amounts on different on different numbers, colours, odd/even, columns, high/low and dozens. Can also view past spins for that particular session, and repeat the previous bet. Javascript setInterval() is being used to spin the wheel every 15 seconds, with no more bets being allowed for the final 5.

Most of the game functionality is in place. It is missing the functionality for some of the inside bets, such as split bets, corner bets, and line bets.

I have used jquery-ui to handle the dragging and dropping of chips. The game becomes rather laggy at times. Strangely enough the column bets do not work for dragging, but can still be bet on by clicking.

## Installation

From the command line:

- ``` git clone https://github.com/dwatson62/roulette ```
- ``` npm start ``` (this will download all npm and bower packages, and launch the server)
- Visit [http://localhost:3000](http://localhost:3000)

#### Tests

For unit tests:

- ``` npm test ```

For feature tests, in separate terminal windows

- ``` npm start ```
- ``` webdriver-manager update ``` then ``` webdriver-manager start ```
- ``` protractor spec/e2e/conf.js ```

Typeos of bets:

![Roulette bets](http://bestroulette.net/wp-content/uploads/2009/12/types-of-roulette-bets.gif)

## Technologies Used

- Javascript
- Angular
- Express, Node
- Karma, Jasmine, Protractor

## Job List

- [ ] Setup Coveralls
- [ ] End the game once player balance gets to £0
- [ ] Add functionality for other inside bets
