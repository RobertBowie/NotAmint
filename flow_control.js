document.querySelector('div').onclick = function() {
  test_game = new Game();
  test_ai = new Ai('simple');
  running = new Controller();
  running.game_start();
};

var Controller = function(){
};

Controller.prototype.move_prompt = function(){
  this.row = window.prompt("What row?");
  this.column = window.prompt("What column?");
  if(0 > this.row > 2 || 0 > this.column > 2 || test_game.board[this.row][this.column] !== BLANK){
    console.log("Invalid Move!");
    row = window.prompt("What row?");
    column = window.prompt("What column?");
  };
};

Controller.prototype.game_type = function(type){
  var game_select = window.prompt("Would you like to start a 1 player game or 2?", "1");
  switch (game_select) {
    case "1":
      //AI lvl selection and game start
      break;
    case "2":
      //X or O selection for player1 and game start
      break;
    default:
      //Controller(single_player)
      break;
  }
};


Controller.prototype.on_win = function(player){
  console.log(player + "'s win!");
  return true;
};

Controller.prototype.cats_game = function(){
  console.log("Tie Game!");
};

Controller.prototype.game_start = function(){
  test_game.print_board();
  while(!test_game.win_check()){
    this.move_prompt();
    test_game.make_move(this.row, this.column, X);
    test_game.print_board();
    test_game.win_check();
    test_ai.simple_ai_move();
    test_game.print_board();
    test_game.win_check();
  }
};
