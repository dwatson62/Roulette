function Player() {
	this.balance = 100;
}

Player.prototype.bet = function(amount, option, wheel) {
	if (option == 'Red' || option == 'Black') {
		this.colourBet(amount, option, wheel);
	 } else if (option == 'Odd' || option == 'Even') {
	 		this.oddOrEvenBet(amount, option, wheel);
	 } else if (option <= 36 && option >= 0) {
		this.numberBet(amount, option, wheel);
	}
};

Player.prototype.colourBet = function(amount, option, wheel) {

	if (wheel.colour == 'Red' && option == 'Red') {
		return this.balance += (parseInt(amount) * 2);
	} else if (wheel.colour == 'Black' && option == 'Black') {
		return this.balance += (parseInt(amount) * 2);
	}
	return this.balance -= parseInt(amount);
};

Player.prototype.numberBet = function(amount, option, wheel) {
	if (wheel.number == option) {
		return this.balance += (parseInt(amount) * 35);
	}
	return this.balance -= parseInt(amount);
};

Player.prototype.oddOrEvenBet = function(amount, option, wheel) {
	if (wheel.oddOrEven == option) {
		return this.balance += (parseInt(amount) * 2);
	}
	return this.balance -= parseInt(amount);
};
