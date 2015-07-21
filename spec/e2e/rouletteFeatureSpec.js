var amountBet = element(by.id('amount-bet'));
var betBtn = element(by.className('bet-btn'));
var numberBtn = element(by.className('number-btn'));
var oddBtn = element(by.id('odd-btn'));
var pastSpins = element.all(by.repeater('pastSpins in rltCtrl.pastSpins'));
var playerBalance = element(by.id('player-balance'));
var playerBet = element.all(by.repeater('bets in rltCtrl.bet'));
var redBtn = element(by.id('red-btn'));
var repeatBtn = element(by.id('repeat-btn'));
var spinBtn = element(by.id('spin-btn'));
var spinResult = element(by.id('spin-result'));
var streetBtn = element(by.className('street-btn'));

beforeEach(function(){
  browser.get('http://localhost:3000');
});

describe('Roulette table', function() {

  it('Has a title', function() {
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

  it('Can repeat the previous bet', function() {
    betBtn.click();
    numberBtn.click();
    spinBtn.click();
    repeatBtn.click();
    expect(playerBet.getText()).toContain('£1 on 0');
    expect(amountBet.getText()).toEqual('Total bet £1')
  })

});

describe('Betting', function() {

  beforeEach(function () {
    betBtn.click();
  });

  it('Can bet on a number (0)', function() {
    numberBtn.click();
    expect(playerBet.getText()).toContain('£1 on 0');
  });

  it('Can bet on a colour', function() {
    redBtn.click();
    expect(playerBet.getText()).toContain('£1 on Red');
  });

  it('Can bet on odd/even', function() {
    oddBtn.click();
    expect(playerBet.getText()).toContain('£1 on Odd');
  });

  it('Can bet on a street (3)', function() {
    streetBtn.click();
    expect(playerBet.getText()).toContain('£1 on Street 3');
  });

  it('displays the total bet on each round', function() {
    betBtn.click();
    oddBtn.click();
    numberBtn.click();
    streetBtn.click();
    expect(amountBet.getText()).toEqual('Total bet £3')
  });

});

xdescribe('Player balance', function() {

  it('is deducted for each bet', function() {
    betBtn.click();
    numberBtn.click();
    expect(playerBalance.getText()).toEqual('£99');
  });

});

describe('Player cannot', function() {

  it('Confirm a bet until money has been put down', function() {
    expect(numberBtn.isEnabled()).toBe(false);
    expect(redBtn.isEnabled()).toBe(false);
    expect(oddBtn.isEnabled()).toBe(false);
    expect(streetBtn.isEnabled()).toBe(false);
  });

  xit('Bet more money than they have', function() {
    playerBalance.getText() = 0;
    expect(betBtn.isEnabled()).toBe(false);
  });

});