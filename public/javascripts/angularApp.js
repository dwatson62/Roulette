var roulette = angular.module('Roulette', []);

roulette.controller('RouletteController', [function() {
  var self = this;
  var player = new Player();
  var wheel = new Wheel();

  self.spinResult = [];
  self.playerBalance = player.balance;
  self.pastSpins = [];

  self.numberBet = function(number) {
    self.bet = number;
  };

  self.colourBet = function(colour) {
    console.log(colour);
    self.bet = colour;
  };

  self.spin = function() {
    wheel.spin();
    self.spinResult[0] = wheel.number;
    self.spinResult[1] = wheel.colour;
    if (self.bet == null) { return; }
    self.updateBalance();
    self.spinHistory();
  };

  self.spinHistory = function() {
    self.pastSpins.push( { 'number': self.spinResult[0], 'colour': self.spinResult[1] } );
  };

  self.updateBalance = function() {
    if (self.bet == wheel.number) {
      player.balance += (10 * 35);
    } else if (self.bet == wheel.colour) {
      player.balance += (10 * 2);
    } else {
      player.balance -= 10;
    }
    self.playerBalance = player.balance;
  };

}]);