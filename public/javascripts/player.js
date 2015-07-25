function Player() {
	this.balance = 100;
	this.winnings = 0;
}

Player.prototype.placeBet = function(amount) {
	this.balance -= amount;
};

Player.prototype.resetWinnings = function() {
	this.winnings = 0;
};

Player.prototype.colourBetCheck = function(amount, option, wheel) {
	if (wheel.colour === option) {
		this.balance += (amount * 3);
		this.winnings += (amount * 2);
	}
};

Player.prototype.numberBetCheck = function(amount, option, wheel) {
	if (wheel.number === option) {
		this.balance += (amount * 36);
		this.winnings += (amount * 35);
	}
};

Player.prototype.oddOrEvenBetCheck = function(amount, option, wheel) {
	if (wheel.oddOrEven === option) {
		this.balance += (amount * 3);
		this.winnings += (amount * 2);
	}
};

Player.prototype.columnBetCheck = function(amount, option, wheel) {
	var columnNumber = parseInt(option.split('').pop());
    if (wheel.columnNumber === columnNumber) {
      this.balance += (amount * 3);
      this.winnings += (amount * 2);
    }
};

Player.prototype.dozenBetCheck = function(amount, option, wheel) {
  var dozenNumber = parseInt(option.split('').pop());
  if (wheel.dozenNumber === dozenNumber) {
    this.balance += (amount * 3);
    this.winnings += (amount * 2);
   }
};

Player.prototype.highLowBetCheck = function(amount, option, wheel) {
  var first = parseInt(option.split('').splice(0, 2).join(''));
  var second = parseInt(option.split('').splice(-2).join(''));
  if (first <= wheel.number && wheel.number <= second) {
    this.balance += (amount * 3);
    this.winnings += (amount * 2);
  }
};
