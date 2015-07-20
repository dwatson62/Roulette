function Wheel() {
};

Wheel.prototype.spin = function() {
	return Math.floor((Math.random() * 36) + 1);	
};
