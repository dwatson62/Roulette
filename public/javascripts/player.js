function Player() {
	this.balance = 100;
};

Player.prototype.bet = function(amount, option, wheel) {
	if (option == 'Red' || option == 'Black') {
		this.colourBet(amount, option, wheel);
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
