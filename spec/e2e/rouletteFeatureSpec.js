var playerBalance = element(by.id('player-balance'));
var playerBet = element(by.id('player-bet'));
var numberBtn = element(by.className('number-btn'));
var spinBtn = element(by.id('spin-btn'));
var spinResult = element(by.id('spin-result'));
var redBtn = element(by.id('red-btn'));

beforeEach(function (){
  browser.get('http://localhost:3000');
});

describe('Roulette table', function () {

  it('Has a title', function () {
    expect(browser.getTitle()).toEqual('Roulette');
  });

  xit('Displays player balance', function() {
    expect(playerBalance.getText()).toEqual('£100');
  });


});

describe('Betting', function () {

  it('Can bet on a number', function() {
    numberBtn.click();
    expect(playerBet.getText()).toEqual('You bet on 0');
  });

  it('Can bet on a colour', function() {
    redBtn.click();
    expect(playerBet.getText()).toEqual('You bet on Red');
  });

  it('Can spin the wheel and see the result', function() {
    spinBtn.click();
    expect(spinResult.getText()).toContain('Landed on');
  });

  xit('Can bet on 0 and win if the wheel spins 0', function() {
    numberBtn.click();
    spinBtn.click();
    expect(playerBalance.getText()).toChange();
  });
});