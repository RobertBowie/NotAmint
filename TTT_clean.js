var board = [["_","_","_"],["_","_","_"],["_","_","_"]];
var new_game = function(){
    this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
};

var print_board = function(game){
    console.log(game[0] + "\n" + game[1] + "\n" + game[2]);
};


var make_move = function(row, column, x_o){
  board[row][column] = x_o;
};
var win_flag = false;
var on_win = function(player){
    console.log(player + "'s win!");
    return true;
};

var cats_game = function(){
    console.log("Tie Game!");
};

var set_check = function(first, sec, third){
    var X = "X";
    var O = "O";
    if(first === X && sec === X && third === X){
        return on_win(X);
    } else if (first === O && sec === O && third === O){
        return on_win(O);
    }
};

var win_check = function(board){
    if(set_check(board[0][0], board[0][1], board[0][2])){
        return true;
    }else if(set_check(board[1][0], board[1][1], board[1][2])){
        return true;
    }else if(set_check(board[2][0], board[2][1], board[2][2])){
        return true;
    }else if(set_check(board[0][0], board[1][0], board[2][0])){
        return true;
    } else if(set_check(board[1][0], board[1][1], board[1][2])){
        return true;
    }else if(set_check(board[2][0], board[2][1], board[2][2])){
        return true;
    }else if(set_check(board[0][0], board[1][1], board[2][2])){
        return true;
    }else if(set_check(board[0][2], board[1][1], board[2][0])){
        return true;
    }
};

//experimenting with for loop.  Prefer the idea of using the win_check to determine game runtime
//try to implement a less intensive check for win and tie it into the games run cycle.
var the_game = function(){
  var x_o;  var row;  var col;
  new_game();
  print_board(board);
//need to repeat until EITHER a win or board is full
  for(var i = 1; i < 10; i++){
    x_o = window.prompt("X's or O's?", "X");
    row = window.prompt("What row?");
    col = window.prompt("What column?");
    make_move(row, col, x_o);
    print_board(board);
    if(win_check(board)){
      break;
    } else if(i === 9){
      cats_game();
    }
  }
};
/*Thoughts on designing an AI for TicTacToe.  The AI could be made a number of ways.  
The simplest way to design it would be to move in any empty square at random.  This would be the least likely to win.
The next level of complexity would involve random placement Unless the human opponent was about to win.  This
would lead to more games ending in a draw than the first plan but would be beatable once the player observed and noted
that behavior.  The final, most complex and winning, strategy would involve having a specific plan in response to the
board setup.  This AI could be designed to always go second (probably less complex than an offensive AI) and would end
almost every game in a draw. */