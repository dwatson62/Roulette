var roulette = angular.module('Roulette', []);

roulette.controller('RouletteController', [function() {
  var self = this;
  var player = new Player();
  var wheel = new Wheel();

  self.spinResult = [];
  self.playerBalance = player.balance;
  self.pastSpins = [];
  self.amountBet = 0;

  self.numberBet = function(number) {
    self.bet = number;
  };

  self.colourBet = function(colour) {
    self.bet = colour;
  };

  self.oddOrEvenBet = function(option) {
    self.bet = option;
  };

  self.spin = function() {
    wheel.spin();
    self.spinResult[0] = wheel.number;
    self.spinResult[1] = wheel.colour;
    self.spinHistory();
    if (self.bet === null) { return; }
    self.updateBalance();
    self.bet = null;
  };

  self.spinHistory = function() {
    self.pastSpins.push( { 'number': self.spinResult[0], 'colour': self.spinResult[1] } );
  };

  self.updateBalance = function() {
    if (self.bet == wheel.number) {
      player.balance += (self.amountBet * 35);
    } else if (self.bet == wheel.colour) {
      player.balance += (self.amountBet * 2);
    } else if (self.bet == wheel.oddOrEven) {
      player.balance += (self.amountBet * 2);
    } else if (self.bet.substring(0, 1) == 'S') {
      self.checkStreetBet();
    } else {
      player.balance -= self.amountBet;
    }
    self.playerBalance = player.balance;
    self.amountBet = 0;
  };

  self.placeBet = function(amount) {
    self.amountBet = amount;
  };

  self.streetBet = function(street) {
    self.bet = street;
  };

  self.checkStreetBet = function() {
    var street = self.bet.substring(self.bet.length, self.bet.length - 1)
    if (wheel.number % parseInt(street) == 0) {
      player.balance += (self.amountBet * 3);
    } else {
      player.balance -= self.amountBet;
    }
  };

  // self outOfMoney = function() {

  // }

}]);