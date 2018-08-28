//create a class called Helper, instantiate as a variable called helper
class Helper {
  constructor () {

  }
  //add method called playPauseAndUpdate that takes one parameter, song
  playPauseAndUpdate(song = player.currentlyPlaying) {
    player.playPause(song);
    $('#time-control .total-time').text( player.getDuration );
  }
  //call player.playPause, pass song parameter, update total time
  /*$('#total-time input').on('input', function (event) {
    player.playPause(song);
  });*/

  //replace every call of player.playPause with helper.playPauseAndUpdate
  //player.playPause = helper.playPauseAndUpdate
}

const helper = new Helper();
