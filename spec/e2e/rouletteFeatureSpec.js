var playerBalance = element(by.id('player-balance'));
var playerBet = element(by.id('player-bet'))
var numberBtn = element(by.className('number-btn'));

beforeEach(function (){
    browser.get('http://localhost:3000')
  });

describe('Roulette table', function () {

  it('Has a title', function () {
    expect(browser.getTitle()).toEqual('Roulette');
  });

  it('Displays player balance', function() {
    expect(playerBalance.getText()).toEqual('£100');
  });


});

describe('Betting', function () {

  it('Can bet on a number', function() {
    numberBtn.click();
    expect(playerBet.getText()).toEqual('You bet on 0');
  });
});