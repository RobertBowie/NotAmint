var X = "X", O = "O", Blank = "_"; //BLANK not Blank

var Controller = function(){
//what should controller take as args and do?
//probably take 
};

Controller.prototype.on_win = function(player){
  console.log(player + "'s win!");
  return true;
};

Controller.prototype.cats_game = function(){
  console.log("Tie Game!");
};

var Game = function() {
  this.board = this.new_game();
};

Game.prototype.new_game = function() {
  return [["_","_","_"],["_","_","_"],["_","_","_"]];
};

var Computer = function(ai_lvl){
  this.ai_lvl = ai_lvl;
  if(ai_lvl === "simple"){
    //simple_ai_move() ??
  }
};

Computer.prototype.random_index = function(){
  return Math.floor(Math.random() * 3);
};

Computer.prototype.simple_ai_move = function(){
  var ai_row = random_index();
  var ai_col = random_index();
  if(this.make_move(ai_row, ai_col, O)){
      console.log('AI move made');
  }else{
    this.simple_ai_move();
  }
};

Game.prototype.print_board = function(){
  console.log(this.board[0] + "\n" + this.board[1] + "\n" + this.board[2]);
};


Game.prototype.make_move = function(row, column, x_o){
  if(this.board[row][column] === Blank){
    this.board[row][column] = x_o;
    return true;
  }
  return false;
};

var set_check = function(first, sec, third){
    if(first === X && sec === X && third === X){
        return on_win(X);
    } else if (first === O && sec === O && third === O){
        return on_win(O);
    }
    return false;
};
var game = new Game();
// write yourself an each() function and try to use it here
//two diff loops and two conditions that can't be done programatically
var win_check = function(){ // wincheck and setcheck should be part of game
    return set_check(board[0][0], board[0][1], board[0][2]) || 
           set_check(board[1][0], board[1][1], board[1][2]) ||
           set_check(board[2][0], board[2][1], board[2][2]) ||
           set_check(board[0][0], board[1][0], board[2][0]) ||
           set_check(board[1][0], board[1][1], board[1][2]) ||   
           set_check(board[2][0], board[2][1], board[2][2]) ||
           set_check(board[0][0], board[1][1], board[2][2]) ||
           set_check(board[0][2], board[1][1], board[2][0]);
};

//the_game is obsolete at this point-- ToDo: pull any logic/flow and functions out and delete remains
var the_game = function(){
  var x_o;  var row;  var col;
  game.new_game();
  game.print_board();
//repeat until either a win or full board
  for(var i = 1; i < 10; i++){
    x_o = "X";
    if(x_o !== "X" && x_o !== "O"){
      console.log("Invalid Choice!");
      x_o = window.prompt("X's or O's?", "O");
    }
    row = window.prompt("What row?");
    col = window.prompt("What column?");
    if(board[row][col] !== "_" || 0 > row > 2 || 0 > col > 2){
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
