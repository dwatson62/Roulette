describe('Returns a number', function() {
	it('between 0 and 36', function() {
		wheel = new Wheel;
		var result = wheel.spin();
		expect(result >= 0 && result < 37).toBeTruthy();
	});
});
