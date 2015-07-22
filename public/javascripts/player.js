function Player() {
	this.balance = 100;
}

Player.prototype.placeBet = function(amount) {
	this.balance -= parseInt(amount);
};

Player.prototype.colourBetCheck = function(amount, option, wheel) {
	if (wheel.colour == option) {
		this.balance += parseInt(amount);
		this.balance += (parseInt(amount) * 2);
	}
};

Player.prototype.numberBetCheck = function(amount, option, wheel) {
	if (wheel.number == option) {
		this.balance += parseInt(amount);
		this.balance += (parseInt(amount) * 35);
	}
};

Player.prototype.oddOrEvenBetCheck = function(amount, option, wheel) {
	if (wheel.oddOrEven == option) {
		this.balance += parseInt(amount);
		this.balance += (parseInt(amount) * 2);
	}
};

Player.prototype.streetBetCheck = function(amount, option, wheel) {
	var streetNumber = parseInt(option.split('').pop());
    if (wheel.streetNumber == streetNumber) {
      this.balance += (amount * 3);
    }
};

Player.prototype.columnBetCheck = function(amount, option, wheel) {
  var columnNumber = parseInt(option.split('').pop());
  if (wheel.columnNumber == columnNumber) {
    this.balance += (amount * 3);
   }
};
