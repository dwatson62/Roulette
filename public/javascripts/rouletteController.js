  roulette.controller('RouletteController', [function() {
  var self = this;
  var player = new Player();
  var wheel = new Wheel();

  self.amountBet = 0;
  self.bet = [];
  self.pastSpins = [];
  self.playerBalance = player.balance;
  self.previousBet = [];
  self.spinResults = [];
  self.totalBet = 0;
  self.winnings = 0;

  self.numberBet = function(number) {
    self.bet.push( { 'bet': number, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.colourBet = function(colour) {
    self.bet.push( { 'bet': colour, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.oddOrEvenBet = function(option) {
    self.bet.push( { 'bet': option, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.streetBet = function(street) {
    self.bet.push( { 'bet': street, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.columnBet = function(column) {
    self.bet.push( { 'bet': column, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.placeBet = function(amount) {
    self.amountBet = amount;
  };

  self.confirmBet = function() {
    player.placeBet(self.amountBet);
    self.playerBalance = player.balance;
    self.totalBet += self.amountBet;
  };

  self.repeatBet = function() {
    self.bet = self.previousBet;
    for (i = 0; i < self.bet.length; i ++) {
      player.balance -= self.bet[i].amount;
      self.totalBet += self.bet[i].amount;
    }
    self.playerBalance = player.balance;
  };

  self.clearBets = function() {
    player.balance += self.amountBet;
    self.endRound();
  };

  self.spin = function() {
    wheel.spin();
    self.number = wheel.number + " " + wheel.colour;
    // $('#' + wheel.number).fadeOut(2000);
    // $('#' + wheel.number).fadeIn(2000);
    self.spinHistory();
    self.previousBet = self.bet;
    self.checkResult();
  };

  self.spinHistory = function() {
    self.pastSpins.push( { 'number': wheel.number, 'colour': wheel.colour } );
  };

  self.checkResult = function() {
    for (i = 0; i < self.bet.length; i ++) {
      var amount = self.bet[i].amount
      var bet = self.bet[i].bet
      player.colourBetCheck(amount, bet, wheel)
      player.numberBetCheck(amount, bet, wheel)
      player.oddOrEvenBetCheck(amount, bet, wheel)
      if (typeof(bet) == 'string' && bet.substring(0, 1) == 'S') {
        player.streetBetCheck(amount, bet, wheel);
      } else if (typeof(bet) == 'string' && bet.substring(0, 1) == 'C') {
        player.columnBetCheck(amount, bet, wheel);
      }
    }
    self.endRound();
  };

  self.endRound = function() {
    self.playerBalance = player.balance;
    self.winnings = player.winnings;
    player.resetWinnings();
    self.amountBet = 0;
    self.bet = [];
    self.totalBet = 0;
  };

}]);