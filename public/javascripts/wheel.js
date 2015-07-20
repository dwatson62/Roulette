function Wheel() {
	this.colour;
	this.number;
};

Wheel.prototype.spin = function() {
	this.number = Math.floor((Math.random() * 36) + 1);	
	this.setColour();
};

Wheel.prototype.setColour = function() {
	var reds = [1, 3, 5, 7, 9, 12, 13, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
	for (i = 0; i < reds.length; i ++ ) {	
		if (i == this.number) {
			this.colour = 'Red'
			return;
		}
		else {
			this.colour = 'Black'
		}
	}
};
