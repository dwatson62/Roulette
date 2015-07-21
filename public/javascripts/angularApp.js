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
  self.totalBet = 0;

  self.confirmBet = function() {
    player.balance -= self.amountBet;
    self.playerBalance = player.balance;
    self.totalBet += self.amountBet;
  };

  self.numberBet = function(number) {
    self.bet.push( { 'bet': number, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.colourBet = function(colour) {
    self.bet.push( { 'bet':colour, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.oddOrEvenBet = function(option) {
    self.bet.push( { 'bet':option, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.repeatBet = function() {
    self.bet = self.previousBet;
    for (i = 0; i < self.bet.length; i ++) {
      player.balance -= self.bet[i]['amount'];
      self.totalBet += self.bet[i]['amount'];
    }
    self.playerBalance = player.balance;
  };

  self.clearBets = function() {
    player.balance += self.amountBet;
    self.playerBalance = player.balance;
    self.bet = [];
    self.amountBet = 0;
    self.totalBet = 0;
  };

  self.spin = function() {
    wheel.spin();
    self.spinHistory();
    self.previousBet = self.bet;
    if (self.bet.length === 0) { return; }
    self.checkResult();
    self.bet = [];
    self.totalBet = 0
  };

  self.spinHistory = function() {
    self.pastSpins.push( { 'number': wheel.number, 'colour': wheel.colour } );
  };

  self.checkResult = function() {
    for (i = 0; i < self.bet.length; i ++) {
      if (self.bet[i]['bet'] == wheel.number) {
        player.balance += (self.bet[i]['amount'] * 35);
      } else if (self.bet[i]['bet'] == wheel.colour) {
        console.log("I win")
        player.balance += (self.bet[i]['amount'] * 2);
      } else if (self.bet[i]['bet'] == wheel.oddOrEven) {
        player.balance += (self.bet[i]['amount'] * 2);
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
    self.bet.push( { 'bet': street, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.checkStreetBet = function(bet) {
    // returns the street number the player betted on
    var streetNumber = parseInt(bet['bet'].split('').pop());
    if (wheel.streetNumber == streetNumber) {
      player.balance += (bet['amount'] * 3);
    }
  };

}]);