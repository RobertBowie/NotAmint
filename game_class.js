var Game = function() {
  this.board = this.new_game();
};

Game.prototype.new_game = function() {
  return [[BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK],[BLANK,BLANK,BLANK]];
};

Game.prototype.print_board = function() {
  console.log(this.board[0] + "\n" + this.board[1] + "\n" + this.board[2]);
};

Game.prototype.make_move = function(row, column, x_o) {
  this.row = row;
  this.column = column;
  this.x_o = x_o;
  if(this.board[row][column] === BLANK){
    this.board[row][column] = x_o;
    return true;
  }
  return false;
};

Game.prototype.set_check = function(first, sec, third) {
  this.first = first;
  this.sec = sec;
  this.third = third;
  if(first === X && sec === X && third === X){
      return on_win(X);
  } else if (first === O && sec === O && third === O){
      return on_win(O);
  }
  return false;
};

Game.prototype.win_check = function(argument) {
  return this.set_check(board[0][0], board[0][1], board[0][2]) ||
         this.set_check(board[1][0], board[1][1], board[1][2]) ||
         this.set_check(board[2][0], board[2][1], board[2][2]) ||
         this.set_check(board[0][0], board[1][0], board[2][0]) ||
         this.set_check(board[1][0], board[1][1], board[1][2]) ||
         this.set_check(board[2][0], board[2][1], board[2][2]) ||
         this.set_check(board[0][0], board[1][1], board[2][2]) ||
         this.set_check(board[0][2], board[1][1], board[2][0]);
};