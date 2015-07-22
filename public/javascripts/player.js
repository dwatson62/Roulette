function Player() {
	this.balance = 100;
}

Player.prototype.bet = function(amount) {
	this.balance -= parseInt(amount);
};

Player.prototype.colourBet = function(amount, option, wheel) {

	if (wheel.colour == option) {
		this.balance += parseInt(amount);
		this.balance += (parseInt(amount) * 2);
	}

};

Player.prototype.numberBet = function(amount, option, wheel) {
	if (wheel.number == option) {
		this.balance += parseInt(amount);
		this.balance += (parseInt(amount) * 35);
	}
};

Player.prototype.oddOrEvenBet = function(amount, option, wheel) {
	if (wheel.oddOrEven == option) {
		this.balance += parseInt(amount);
		this.balance += (parseInt(amount) * 2);
	}
};

Player.prototype.streetBet = function(amount, option, wheel) {
	var streetNumber = parseInt(option.split('').pop());
    if (wheel.streetNumber == streetNumber) {
      this.balance += (amount * 3);
    }
};
