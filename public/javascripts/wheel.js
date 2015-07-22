function Wheel() {}

Wheel.prototype.spin = function() {
	this.number = Math.floor(Math.random() * 37);
	this.setColour();
	this.isOddOrEven();
  this.setStreetNumber();
	this.setColumnNumber();
};

Wheel.prototype.setColour = function() {
	var reds = [1, 3, 5, 7, 9, 12, 13, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
	if (this.number === 0) {
		this.colour = 'Green';
		return;
	}
	for (i = 0; i < reds.length; i ++) {
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

Wheel.prototype.setStreetNumber = function() {
  var streets = [ [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
                  [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
                  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36] ];
  for (i = 0; i < streets.length; i ++) {
    for (j = 0; j < streets[i].length; j ++) {
      if (this.number == streets[i][j]) { this.streetNumber = i + 1; }
    }
  }
};

Wheel.prototype.setColumnNumber = function() {
  if (this.number <= 12 ) {
    this.columnNumber = 1;
    return;
  } else if (this.number <= 24) {
    this.columnNumber = 2;
    return;
  }
  this.columnNumber = 3;
};
