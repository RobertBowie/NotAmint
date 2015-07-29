var board = [["_","_","_"],["_","_","_"],["_","_","_"]];
var new_game = function(){
    this.board = [["_","_","_"],["_","_","_"],["_","_","_"]];
};

var print_board = function(){
    console.log(board[0] + "\n" + board[1] + "\n" + board[2]);
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

var win_check = function(){
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

var the_game = function(){
  var x_o;  var row;  var col;
  new_game();
  print_board(board);
//repeat until either a win or full board
  for(var i = 1; i < 10; i++){
    x_o = window.prompt("X's or O's?", "X");
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
    print_board(board);
    if(win_check()){
      break;
    }else if(i === 9){
      cats_game();
    }
  }
};
the_game();
/*Thoughts on designing an AI for TicTacToe.  The AI could be made a number of ways.  
The simplest way to design it would be to move in any empty square at random.  This would be the least likely to win.
The next level of complexity would involve random placement Unless the human opponent was about to win.  This
would lead to more games ending in a draw than the first plan but would be beatable once the player observed and noted
that behavior.  The final, most complex and winning, strategy would involve having a specific plan in response to the
board setup.  This AI could be designed to always go second (probably less complex than an offensive AI) and would end
almost every game in a draw. */


//most, if not all of this will have to be inside the_game() possibly
var board_squares = [[board[0][0], [0,0]], [board[0][1], [0,1]], [board[0][2], [0,2]], [board[1][0], [1,0]],
        [board[1][1], [1,1]], [board[1][2], [1,2]], [board[2][0], [2,0]], [board[2][1], [2,1]], [board[2][2], [2,2]]];

var random_empty_space = function() { //returns coordinates of random blank in board
  var emptys = [];
  for(var i in board_squares){
    if(board_squares[i][0] === "_"){
      emptys.push(board_squares[i][1]);
    }
  }
  return emptys[Math.floor(Math.random() * emptys.length)];
};
var ai_row = 0, ai_col = 0;
var splitter = function(coords){
    ai_row = coords[0];
    ai_col = coords[1];
    
};
var simple_ai_move = function(){
  /*place an O in random_empty_space*/
  splitter(random_empty_space());
  make_move(ai_row, ai_col, "O");
};
