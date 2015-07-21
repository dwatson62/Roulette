var roulette = angular.module('Roulette', []);

roulette.controller('RouletteController', [function() {
  var self = this;
  var player = new Player();
  var wheel = new Wheel();

  self.amountBet = 0;
  self.bet = [];
  self.pastSpins = [];
  self.playerBalance = player.balance;
  self.previousBet = [];
  self.previousAmountBet = 0;
  self.spinResults = [];

  self.confirmBet = function() {
    player.balance -= self.amountBet;
    self.playerBalance = player.balance;
  };

  self.numberBet = function(number) {
    self.bet.push( { 'bet': number } );
    self.confirmBet();
  };

  self.colourBet = function(colour) {
    self.bet.push( { 'bet':colour } );
    self.confirmBet();
  };

  self.oddOrEvenBet = function(option) {
    self.bet.push( { 'bet':option } );
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
  };

  self.spin = function() {
    wheel.spin();
    self.spinHistory();
    self.previousAmountBet = self.amountBet;
    self.previousBet = self.bet;
    if (self.bet.length === 0) { return; }
    self.updateBalance();
    self.bet = [];
  };

  self.spinHistory = function() {
    self.pastSpins.push( { 'number': wheel.number, 'colour': wheel.colour } );
  };

  self.updateBalance = function() {
    for (i = 0; i < self.bet.length; i ++) {
      if (self.bet[i] == wheel.number) {
        player.balance += (self.amountBet * 35);
      } else if (self.bet[i] == wheel.colour) {
        player.balance += (self.amountBet * 2);
      } else if (self.bet[i] == wheel.oddOrEven) {
        player.balance += (self.amountBet * 2);
      } else if (typeof(self.bet[i]['bet']) == 'string') {
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
    self.bet.push( { 'bet':street } );
    self.confirmBet();
  };

  self.checkStreetBet = function(bet) {
    // returns the street number the player betted on
    var streetNumber = parseInt(bet['bet'].split('').pop());
    if (wheel.streetNumber == streetNumber) {
      player.balance += (self.amountBet * 3);
    }
  };

}]);