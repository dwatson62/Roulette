var roulette = angular.module('Roulette', []);

roulette.controller('RouletteController', [function() {
  var self = this;
  var player = new Player();
  var wheel = new Wheel();

  self.playerBalance = player.balance;

  self.numberBet = function(number) {
    console.log(number);
    self.number = number;
  };

}]);