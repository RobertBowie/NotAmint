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

Game.prototype.set_check = function(first, second, third) {
  this.first = first;
  this.second = second;
  this.third = third;
  if(first === X && second === X && third === X){
      return this.on_win(X);
  } else if (first === O && second === O && third === O){
      return this.on_win(O);
  }
  return false;
};

Game.prototype.win_check = function() {
  return this.set_check(this.board[0][0], this.board[0][1], this.board[0][2]) ||
         this.set_check(this.board[1][0], this.board[1][1], this.board[1][2]) ||
         this.set_check(this.board[2][0], this.board[2][1], this.board[2][2]) ||
         this.set_check(this.board[0][0], this.board[1][0], this.board[2][0]) ||
         this.set_check(this.board[0][1], this.board[1][1], this.board[2][1]) ||
         this.set_check(this.board[0][2], this.board[1][2], this.board[2][2]) ||
         this.set_check(this.board[0][0], this.board[1][1], this.board[2][2]) ||
         this.set_check(this.board[0][2], this.board[1][1], this.board[2][0]);
};

Game.prototype.on_win = function(player){
  console.log(player + "'s win!");
  return true;
};

Game.prototype.cats_game = function(){
  console.log("Tie Game!");
};