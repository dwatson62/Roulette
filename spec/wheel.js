beforeEach(function() {
	wheel = new Wheel;
});
describe('Returns a number', function() {
	it('between 0 and 36', function() {
		wheel = new Wheel;
		wheel.spin();
		expect(wheel.number >= 0 && wheel.number < 37).toBeTruthy();
	});
});

// reds 1 3 5 7 9 12 13 16 18 19 21 23 25 27 30 32 34 36

describe('Return the correct colour', function() {
	it('when given 1', function() {
		spyOn(Math, 'random').and.returnValue(0.01);
		wheel.spin();
		console.log(wheel.number)
		console.log(wheel.colour)
		expect(wheel.colour).toEqual('Red');
	});
});
