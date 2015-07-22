beforeEach(function() {
	player = new Player();
});

describe('Player starts with', function() {
	it('£100 balance', function() {
		expect(player.balance).toEqual(100);
	});
});

describe('(1) Player can bet', function() {

	beforeEach(function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		player.placeBet(10);
		wheel.spin();
	});

	describe('and win', function() {

		it('on red', function() {
			player.colourBetCheck(10, 'Red', wheel);
			expect(player.balance).toEqual(120);
		});

		it('on a number (1)', function() {
			player.numberBetCheck(10, 1, wheel);
			expect(player.balance).toEqual(450);
		});

		it('on odd', function() {
			player.oddOrEvenBetCheck(10, 'Odd', wheel);
			expect(player.balance).toEqual(120);
		});

		it('on a street', function() {
			player.streetBetCheck(10, 'Street 1', wheel);
			expect(player.balance).toEqual(120);
		});

		it('on a column', function() {
			player.columnBetCheck(10, 'Col 1', wheel);
			expect(player.balance).toEqual(120);
		});

	});

	describe('and lose', function() {

		it('on black', function() {
			player.colourBetCheck(10, 'Black', wheel);
			expect(player.balance).toEqual(90);
		});

		it('on even', function() {
			player.oddOrEvenBetCheck(10, 'Even', wheel);
			expect(player.balance).toEqual(90);
		});
	});

});

describe('(22) Player can bet', function() {

	beforeEach(function() {
		spyOn(Math, 'random').and.returnValue(0.6);
		player.placeBet(10);
		wheel.spin();
	});

	describe('and win', function() {

		it('on black', function() {
			player.colourBetCheck(10, 'Black', wheel);
			expect(player.balance).toEqual(120);
		});

		it('on even', function() {
			player.oddOrEvenBetCheck(10, 'Even', wheel);
			expect(player.balance).toEqual(120);
		});

	});

	describe('and lose', function() {

		it('on red', function() {
			player.colourBetCheck(10, 'Red', wheel);
			expect(player.balance).toEqual(90);
		});

		it('on a number', function() {
			player.numberBetCheck(10, 1, wheel);
			expect(player.balance).toEqual(90);
		});

		it('on odd', function() {
			player.oddOrEvenBetCheck(10, 'Odd', wheel);
			expect(player.balance).toEqual(90);
		});

	});
});
