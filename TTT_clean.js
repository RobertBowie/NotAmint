var X = "X";
var O = "O";
var Blank = "_";
var board_squares;
var board, ai_row, ai_col;

var Game = function() {
  this.board = this.new_game();
};
Game.prototype.new_game = function() {
  return [["_","_","_"],["_","_","_"],["_","_","_"]];
};
Game.prototype.print_board = function(){
  console.log(this.board[0] + "\n" + this.board[1] + "\n" + this.board[2]);
};
var game = new Game();
Game.prototype.make_move = function(row, column, x_o){
  if(this.board[row][column] === Blank){
    this.board[row][column] = x_o;
    return true;
  }
  return false;  
};

var random_index = function(){
  return Math.floor(Math.random() * 3);
};
game.make_move(0,0,X);
game.make_move(0,1,X);
game.make_move(0,2,X);
game.make_move(1,0,X);
game.make_move(2,2,X);
game.make_move(1,2,X);
game.make_move(2,0,X);
game.make_move(2,1,X);
game.print_board();
Game.prototype.simple_ai_move = function(){
  this.ai_row = random_index();
    console.log(this.ai_row);
  this.ai_col = random_index();
    console.log(this.ai_col);
  if(this.make_move(this.ai_row, this.ai_col, O)){
    this.make_move(this.ai_row, this.ai_col, O);
      console.log('move made');
  }else{
    this.simple_ai_move();
      console.log("went to else");
  }
  
};
game.simple_ai_move();
game.print_board();
/*

var make_move = function(row, column, x_o){
  board[row][column] = x_o;
};

var on_win = function(player){
    console.log(player + "'s win!");
    return true;
};

var cats_game = function(){
    console.log("Tie Game!");
};

var set_check = function(first, sec, third){
    if(first === X && sec === X && third === X){
        return on_win(X);
    } else if (first === O && sec === O && third === O){
        return on_win(O);
    }
    return false;
};

var win_check = function(){
    return set_check(board[0][0], board[0][1], board[0][2]) || 
           set_check(board[1][0], board[1][1], board[1][2]) ||
           set_check(board[2][0], board[2][1], board[2][2]) ||
           set_check(board[0][0], board[1][0], board[2][0]) ||
           set_check(board[1][0], board[1][1], board[1][2]) ||   
           set_check(board[2][0], board[2][1], board[2][2]) ||
           set_check(board[0][0], board[1][1], board[2][2]) ||
           set_check(board[0][2], board[1][1], board[2][0]);
};


var the_game = function(){
  var x_o;  var row;  var col;
  game.new_game();
  game.print_board();
  var ai_row = 0, ai_col = 0;
  //took board_squares out of here
  var splitter = function(coords){
    ai_row = coords[0];
    ai_col = coords[1];
  };
  var random_empty_space = function() { //returns coordinates of random blank in board
    var emptys = [];
    for(var i in board_squares){
      if(board_squares[i][0] === "_"){
        emptys.push(board_squares[i][1]);
      }
    console.log(emptys);
    }
  return emptys[Math.floor(Math.random() * 3)];
  };
  var simple_ai_move = function(){
  splitter(random_empty_space());
  make_move(ai_row, ai_col, "O");
  };
//repeat until either a win or full board
  for(var i = 1; i < 10; i++){
    x_o = "X";
    if(x_o != "X" && x_o != "O"){
      console.log("Invalid Choice!");
      x_o = window.prompt("X's or O's?", "O");
    }
    row = window.prompt("What row?");
    col = window.prompt("What column?");
    if(board[row][col] != "_" || 0 > row > 2 || 0 > col > 2){
      console.log("Invalid Move!");
      row = window.prompt("What row?");
      col = window.prompt("What column?");
    }
    make_move(row, col, x_o);
    board_squares = [[board[0][0], [0,0]], [board[0][1], [0,1]],
                     [board[0][2], [0,2]], [board[1][0], [1,0]],
                     [board[1][1], [1,1]], [board[1][2], [1,2]],
                     [board[2][0], [2,0]], [board[2][1], [2,1]],
                     [board[2][2], [2,2]]];
    print_board();
    simple_ai_move();
    print_board();
    if(win_check()){
      break;
    }else if(i === 9){
      cats_game();
    }
  }
};
//the_game();

/*Thoughts on designing an AI for TicTacToe.  The AI could be made a number of ways.  
The simplest way to design it would be to move in any empty square at random.  This would be the least likely to win.
The next level of complexity would involve random placement Unless the human opponent was about to win.  This
would lead to more games ending in a draw than the first plan but would be beatable once the player observed and noted
that behavior.  The final, most complex and winning, strategy would involve having a specific plan in response to the
board setup.  This AI could be designed to always go second (probably less complex than an offensive AI) and would end
almost every game in a draw. */
