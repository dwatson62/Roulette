describe('Roulette', function () {

  var playerBalance = element(by.id('player-balance'));

  beforeEach(function (){
    browser.get('http://localhost:3000')
  });

  it('Has a title', function () {
    expect(browser.getTitle()).toEqual('Roulette');
  });

  it('Displays player balance', function() {
    expect(playerBalance.getText()).toEqual('£100');
  });

});