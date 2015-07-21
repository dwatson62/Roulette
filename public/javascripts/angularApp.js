var roulette = angular.module('Roulette', []);

roulette.controller('RouletteController', [function() {
  var self = this;
  var player = new Player();
  var wheel = new Wheel();

  self.spinResult = [];
  self.playerBalance = player.balance;
  self.pastSpins = [];
  self.amountBet = 0;
  self.bet = [];
  self.previousBet = [];
  self.previousAmountBet = 0;

  self.confirmBet = function() {
    player.balance -= self.amountBet;
    self.playerBalance = player.balance;
  }

  self.numberBet = function(number) {
    self.bet.push(number);
    self.confirmBet();
  };

  self.colourBet = function(colour) {
    self.bet.push(colour);
    self.confirmBet();
  };

  self.oddOrEvenBet = function(option) {
    self.bet.push(option);
    self.confirmBet();
  };

  self.repeatBet = function() {
    self.amountBet = self.previousAmountBet;
    self.bet = self.previousBet;
    player.balance -= self.amountBet;
    self.playerBalance = player.balance;
  };

  self.clearBets = function() {
    player.balance += self.amountBet;
    self.playerBalance = player.balance;
    self.bet = [];
    self.amountBet = 0;
  }

  self.spin = function() {
    wheel.spin();
    self.spinResult[0] = wheel.number;
    self.spinResult[1] = wheel.colour;
    self.spinHistory();
    self.previousAmountBet = self.amountBet;
    self.previousBet = self.bet;
    if (self.bet.length === 0) { return; }
    self.updateBalance();
    self.bet = [];
  };

  self.spinHistory = function() {
    self.pastSpins.push( { 'number': self.spinResult[0], 'colour': self.spinResult[1] } );
  };

  self.updateBalance = function() {
    for (i = 0; i < self.bet.length; i ++) {
      if (self.bet[i] == wheel.number) {
        player.balance += (self.amountBet * 35);
      } else if (self.bet[i] == wheel.colour) {
        player.balance += (self.amountBet * 2);
      } else if (self.bet[i] == wheel.oddOrEven) {
        player.balance += (self.amountBet * 2);
      } else {
        self.checkStreetBet(self.bet[i]);
      }
    }
    self.playerBalance = player.balance;
    self.amountBet = 0;
  };

  self.placeBet = function(amount) {
    self.amountBet = amount;
  };

  self.streetBet = function(street) {
    self.bet.push(street);
    self.confirmBet();
  };

  self.checkStreetBet = function(bet) {
    console.log(bet)
    if (typeof(bet) != 'string') { return; }
    var street = bet.substring(bet.length, bet.length - 1)
    if (wheel.number % parseInt(street) == 0) {
      player.balance += (self.amountBet * 3);
    } else {
      player.balance -= self.amountBet;
    }
  };

  // self outOfMoney = function() {

  // }

}]);