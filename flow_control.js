document.querySelector('.single_player_start').onclick = function() {
  single_player_game = new Game();
  single_player_ai = new Ai('simple');
  single_player_controller = new Controller();
  single_player_controller.one_player_game_start(single_player_game, single_player_controller);
};

document.querySelector('.single_player_start_med').onclick = function() {
  single_player_game = new Game();
  single_player_ai = new Ai('simple');
  single_player_controller = new Controller();
  single_player_controller.one_player_medium_start(single_player_game, single_player_controller);
};


document.querySelector('.two_player_start').onclick = function() {
  two_player_game = new Game();
  two_player_ai = new Ai('simple');
  two_player_controller = new Controller();
  two_player_controller.two_player_game_start(two_player_game, two_player_controller);
};

var Controller = function(){
};

Controller.prototype.move_prompt = function(current_game, current_controller){
  this.row = window.prompt("What row?");
  this.column = window.prompt("What column?");
  if(0 > this.row || this.row > 2 || 0 > this.column || this.column > 2 || current_game.board[this.row][this.column] !== BLANK){
    console.log("Invalid Move!");
    current_controller.move_prompt(current_game, current_controller);
  };
};

// Controller.prototype.game_type = function(type){
//   var game_select = window.prompt("Would you like to start a 1 player game or 2?", "1");
//   switch (game_select) {
//     case "1":
//       //AI lvl selection and game start
//       break;
//     case "2":
//       //X or O selection for player1 and game start
//       break;
//     default:
//       //Controller(single_player)
//       break;
//   }
// };


Controller.prototype.one_player_game_start = function(current_game, current_controller){
  current_game.print_board();
  while(!current_game.win_check()){
    this.move_prompt(current_game, current_controller);
    current_game.make_move(this.row, this.column, X);
    current_game.print_board();
    single_player_ai.simple_ai_move();
    current_game.print_board();
  }
};

Controller.prototype.one_player_medium_start = function(current_game, current_controller){
  current_game.print_board();
  while(!current_game.win_check()){
    this.move_prompt(current_game, current_controller);
    current_game.make_move(this.row, this.column, X);
    current_game.print_board();
    single_player_ai.medium_ai_move(current_game);
    current_game.print_board();
  }
};

Controller.prototype.two_player_game_start = function(current_game, current_controller){
  current_game.print_board();
  while(!current_game.win_check()){
    this.move_prompt(current_game, current_controller);
    current_game.make_move(this.row, this.column, X);
    current_game.print_board();
    this.move_prompt(current_game, current_controller);
    current_game.make_move(this.row, this.column, O);
    current_game.print_board();
  }
};
