var Controller = function(game_type){
  switch (game_type) {
    case single_player:
      //AI lvl selection and game start
      [break;]
    case two_player:
      //X or O selection for player1 and game start
      [break;]
    default:
      //Controller(single_player)
      [break;]
  }
};

Controller.prototype.game_type = function(selection){
  //should the switch in Controller go in here?
};

Controller.prototype.game_start = function(){
  //action (call to game_class?)
};

Controller.prototype.on_win = function(player){
  console.log(player + "'s win!");
  return true;
};

Controller.prototype.cats_game = function(){
  console.log("Tie Game!");
};