var timer = 10;

setInterval (function() {
  $('#spin-btn').click();
}, 15000);

setInterval (function() {
  timer --;
  $('#timer').html(self.timer);
  if (timer === 0) { noMoreBets(); }
  if (self.timer === -5) { timer = 10; }
  if (self.timer === 9) { placeYourBets(); }
}, 1000);

function placeYourBets() {
  $('.chip').draggable('enable');
  $("input[type=button]").attr("disabled", "enabled");
  $('#display-msg').html('Place your bets...');
  $('#timer').fadeIn(100);
}

function noMoreBets() {
  $('#display-msg').html('No more bets please');
  $('#timer').hide();
  $("input[type=button]").attr("disabled", "disabled");
  $('.chip').draggable('disable');
}

$(document).ready(function() {

  $('.chip').draggable({
    helper: 'clone'
  });

  $('.rednumber-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('.blacknumber-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('#0').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('#black-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('#red-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('#odd-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('#even-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('.doz-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('.highlow-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('.oddeven-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });

  $('.column-btn').droppable({
    drop: function( event, ui ) {
      $('#' + ui.draggable.text() + 'bet-btn').click();
      $(this).click();
    }
  });
});