var betBtn = element(by.className('bet-btn'));
var numberBtn = element(by.className('number-btn'));
var oddBtn = element(by.id('odd-btn'));
var pastSpins = element.all(by.repeater('pastSpins in rltCtrl.pastSpins'));
var playerBalance = element(by.id('player-balance'));
var playerBet = element.all(by.repeater('bets in rltCtrl.bet'));
var redBtn = element(by.id('red-btn'));
var spinBtn = element(by.id('spin-btn'));
var spinResult = element(by.id('spin-result'));
var streetBtn = element(by.className('street-btn'));

beforeEach(function (){
  browser.get('http://localhost:3000');
});

describe('Roulette table', function () {

  it('Has a title', function () {
    expect(browser.getTitle()).toEqual('Roulette');
  });

  it('Displays player balance', function() {
    expect(playerBalance.getText()).toEqual('£100');
  });

  it('Dispays previous spin history', function() {
    spinBtn.click();
    pastSpins.then(function(result) {
      expect(result.length).toBeGreaterThan(0);
    });
  });

});

describe('Betting', function () {

  beforeEach(function () {
    betBtn.click();
  });

  it('Can bet on a number (0)', function() {
    numberBtn.click();
    expect(playerBet.getText()).toContain('0');
  });

  it('Can bet on a colour', function() {
    redBtn.click();
    expect(playerBet.getText()).toContain('Red');
  });

  it('Can bet on odd/even', function() {
    oddBtn.click();
    expect(playerBet.getText()).toContain('Odd');
  });

  it('Can bet on a street (3)', function() {
    streetBtn.click();
    expect(playerBet.getText()).toContain('Street 3');
  });

});