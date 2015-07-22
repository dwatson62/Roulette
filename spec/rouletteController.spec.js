describe('RouletteController', function() {
  beforeEach(module('Roulette'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('RouletteController');
  }));

  it('Player starts with £100', function() {
    expect(ctrl.playerBalance).toEqual(100)
  });

  describe('(1) Player can bet and win', function() {

    beforeEach(function() {
      // return 1
      spyOn(Math, 'random').and.returnValue(0.03);
      ctrl.amountBet = 10;
    });

    it('on Red', function() {
      ctrl.colourBet('Red');
      ctrl.spin();
      expect(ctrl.playerBalance).toEqual(120)
    });

    it('on 1', function() {
      ctrl.numberBet('1');
      ctrl.spin();
      expect(ctrl.playerBalance).toEqual(450)
    });

    it('on odd', function() {
      ctrl.oddOrEvenBet('Odd');
      ctrl.spin();
      expect(ctrl.playerBalance).toEqual(120)
    });

    it('on a street', function() {
      ctrl.streetBet('Street 1');
      ctrl.spin();
      expect(ctrl.playerBalance).toEqual(120)
    });

    it('on a column', function() {
      ctrl.columnBet('Col1');
      ctrl.spin();
      expect(ctrl.playerBalance).toEqual(120)
    });

  });

  describe('(22) Player can bet and win', function() {

    beforeEach(function() {
      // return 22
      spyOn(Math, 'random').and.returnValue(0.06);
      ctrl.amountBet = 10;
    });

    it('on even', function() {
      ctrl.oddOrEvenBet('Even');
      ctrl.spin();
      expect(ctrl.playerBalance).toEqual(120)
    });

    it('on black', function() {
      ctrl.colourBet('Black');
      ctrl.spin();
      expect(ctrl.playerBalance).toEqual(120)
    });

  });

});