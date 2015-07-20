function Wheel() {}

Wheel.prototype.spin = function() {
	this.number = Math.floor((Math.random() * 36) + 1);
	this.setColour();
	this.isOddOrEven();
};

Wheel.prototype.setColour = function() {
	var reds = [1, 3, 5, 7, 9, 12, 13, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
//	var blacks = [2, 4, 6, 8, 10, 11, 14, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
	if (this.number === 0) {
		this.colour = 'Green';
		return;
	}
	for (i = 0; i < reds.length; i ++ ) {
		if (reds[i] === this.number) {
			this.colour = 'Red';
			return;
		}
	}
	this.colour = 'Black';
};

Wheel.prototype.isOddOrEven = function() {
	if (this.number === 0) {
		this.oddOrEven = 'Zero';
		return;
	} else if (this.number % 2 === 0 ) {
		this.oddOrEven = 'Even';
		return;
	}
	this.oddOrEven = 'Odd';
};
