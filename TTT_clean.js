var board = [["_","_","_"],["_","_","_"],["_","_","_"]];
var new_game = function(){
    board = [["_","_","_"],["_","_","_"],["_","_","_"]];
};
var print_board = function(game){
    console.log(board[0] + "\n" + board[1] + "\n" + board[2]);
};
var tie_flag = true;
var make_move = function(row, column, x_o){
  board[row][column] = x_o;
};
var on_win = function(player){
    tie_flag = false;
    console.log(player + "'s win!");
};
var cats_game = function(){
    console.log("Tie Game!");
};
var set_check = function(first, sec, third){
    var X = "X";
    var O = "O";
    if(first === X && sec === X && third === X){
        on_win(X);
    } else if (first === O && sec === O && third === O){
        on_win(O);
    }
};

var win_check = function(board){
    set_check(board[0][0], board[0][1], board[0][2]);
    set_check(board[1][0], board[1][1], board[1][2]);
    set_check(board[2][0], board[2][1], board[2][2]);
    set_check(board[0][0], board[1][0], board[2][0]);
    set_check(board[1][0], board[1][1], board[1][2]);
    set_check(board[2][0], board[2][1], board[2][2]);
    set_check(board[0][0], board[1][1], board[2][2]);
    set_check(board[0][2], board[1][1], board[2][0]);
    if(tie_flag === true){
        cats_game();
    }
};
var test_board = [["O","X","O"],
                 ["O","X","_"],
                 ["X","O","X"]];
print_board(test_board);
win_check(test_board);