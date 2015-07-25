roulette.controller('RouletteController', [function() {

  var self = this;
  var player = new Player();
  var wheel = new Wheel();

  self.amountBet = 0;
  self.bet = [];
  self.pastSpins = [];
  self.playerBalance = player.balance;
  self.previousBet = [];
  self.totalBet = 0;
  self.winnings = 0;

  self.disableButton = function() {
    if (rltCtrl.amountBet === 0 || rltCtrl.playerBalance < rltCtrl.amountBet)
      { return true; }
  };

  self.placeBet = function(amount) {
    self.amountBet = amount;
  };

  self.numberBet = function(number) {
    self.bet.push( { 'bet': parseInt(number), 'amount': self.amountBet } );
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

  self.columnBet = function(column) {
    self.bet.push( { 'bet': column, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.dozenBet = function(dozen) {
    self.bet.push( { 'bet': dozen, 'amount': self.amountBet } );
    self.confirmBet();
  };

  self.highLowBet = function(highLow) {
    self.bet.push( { 'bet': highLow, 'amount': self.amountBet } );
    self.confirmBet();
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
    self.displayNumber();
    self.spinHistory();
    self.previousBet = self.bet;
    self.checkPlayerBets();
    self.endRound();
  };

  self.displayNumber = function() {
    self.number = wheel.number + " " + wheel.colour;
    $('#' + wheel.number).fadeOut(2000);
    $('#' + wheel.number).fadeIn(2000);
  };

  self.spinHistory = function() {
    self.pastSpins.push( { 'number': wheel.number, 'colour': wheel.colour } );
  };

  self.checkPlayerBets = function() {
    for (i = 0; i < self.bet.length; i ++) {
      var amount = self.bet[i].amount;
      var bet = self.bet[i].bet;
      player.colourBetCheck(amount, bet, wheel);
      player.numberBetCheck(amount, bet, wheel);
      player.oddOrEvenBetCheck(amount, bet, wheel);
      if (typeof(bet) == 'string') { self.checkOutsideBets(amount, bet); }
    }
  };

  self.checkOutsideBets = function(amount, bet) {
    if (bet.substring(0, 6) == 'Column') {
      player.columnBetCheck(amount, bet, wheel);
    } else if (bet.substring(0, 5) == 'Dozen') {
      player.dozenBetCheck(amount, bet, wheel);
    } else {
      player.highLowBetCheck(amount, bet, wheel);
    }
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