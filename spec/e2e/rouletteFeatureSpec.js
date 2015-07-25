var amountBet = element(by.id('amount-bet'));
var betBtn = element(by.className('bet-btn'));
var clearBtn = element(by.id('clear-btn'));
var columnBtn = element(by.className('column-btn'));
var dozenBtn = element(by.className('doz-btn'));
var numberBtn = element(by.className('number-btn'));
var oddBtn = element(by.id('odd-btn'));
var oneTo18Btn = element(by.id('1to18-btn'));
var pastSpins = element.all(by.repeater('pastSpins in rltCtrl.pastSpins'));
var playerBalance = element(by.id('player-balance'));
var playerBet = element.all(by.repeater('bets in rltCtrl.bet'));
var redBtn = element(by.id('red-btn'));
var repeatBtn = element(by.id('repeat-btn'));
var spinBtn = element(by.id('spin-btn'));
var spinResult = element(by.id('spin-result'));
var winnings = element(by.id('winnings'));

beforeEach(function(){
  browser.get('http://localhost:3000');
});

describe('Roulette table', function() {

  it('Has a title', function() {
    expect(browser.getTitle()).toEqual('Roulette');
  });

  it('Can spin the wheel without placing a bet', function() {
    spinBtn.click();
    pastSpins.then(function(result) {
      expect(result.length).toBeGreaterThan(0);
    });
  });

  it('Displays player balance', function() {
    expect(playerBalance.getText()).toEqual('£100');
  });

  it('Dispays previous spin history', function() {
    betBtn.click();
    numberBtn.click();
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
    expect(amountBet.getText()).toEqual('Total bet £1');
  });

  it('Displays player winnings', function() {
    expect(winnings.getText()).toContain('Your winnings: £');
  });

  it('can clear current bets', function() {
    betBtn.click();
    numberBtn.click();
    clearBtn.click();
    expect(playerBet.getText()).toEqual([]);
    expect(amountBet.getText()).toEqual('Total bet £0');
  });

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

  it('Can bet on a column (3)', function() {
    columnBtn.click();
    expect(playerBet.getText()).toContain('£1 on Column 3');
  });

  it('Can bet on a dozen (1)', function() {
    dozenBtn.click();
    expect(playerBet.getText()).toContain('£1 on Dozen 1');
  });

  it('Can bet on a 1-18', function() {
    oneTo18Btn.click();
    expect(playerBet.getText()).toContain('£1 on 1 - 18');
  });

  it('displays the total bet on each round', function() {
    betBtn.click();
    oddBtn.click();
    numberBtn.click();
    columnBtn.click();
    expect(amountBet.getText()).toEqual('Total bet £3');
  });

});

describe('Player balance', function() {

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
    expect(columnBtn.isEnabled()).toBe(false);
  });

  xit('Bet more money than they have', function() {
    expect(betBtn.isEnabled()).toBe(false);
  });

});