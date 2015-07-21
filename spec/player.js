beforeEach(function() {
	player = new Player();
});

describe('Player starts with', function() {
	it('£100 balance', function() {
		expect(player.balance).toEqual(100);
	});
});

describe('Player can bet and win', function() {

	it('on red', function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		wheel.spin();
		player.bet(10, 'Red', wheel);
		expect(player.balance).toEqual(120);
	});

	it('on black', function() {
		spyOn(Math, 'random').and.returnValue(0.06);
		wheel.spin();
		player.bet(10, 'Black', wheel);
		expect(player.balance).toEqual(120);
	});

	it('on a number', function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		wheel.spin();
		player.bet(10, 1, wheel);
		expect(player.balance).toEqual(450);
	});

	it('on even', function() {
		spyOn(Math, 'random').and.returnValue(0.06);
		wheel.spin();
		player.bet(10, 'Even', wheel);
		expect(player.balance).toEqual(120);
	});

	it('on odd', function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		wheel.spin();
		player.bet(10, 'Odd', wheel);
		expect(player.balance).toEqual(120);
	});
});

describe('Player can bet and lose', function() {

	it('on red', function() {
		spyOn(Math, 'random').and.returnValue(0.06);
		wheel.spin();
		player.bet(10, 'Red', wheel);
		expect(player.balance).toEqual(90);
	});

	it('on black', function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		wheel.spin();
		player.bet(10, 'Black', wheel);
		expect(player.balance).toEqual(90);
	});

	it('on a number', function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		wheel.spin();
		player.bet(10, 36, wheel);
		expect(player.balance).toEqual(90);
	});

	it('on even', function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		wheel.spin();
		player.bet(10, 'Even', wheel);
		expect(player.balance).toEqual(90);
	});

	it('on odd', function() {
		spyOn(Math, 'random').and.returnValue(0.06);
		wheel.spin();
		player.bet(10, 'Odd', wheel);
		expect(player.balance).toEqual(90);
	});
});
