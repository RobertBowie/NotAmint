//created GIT repo and will commit this to show process so far
var board = [["_","_","_"],["_","_","_"],["_","_","_"]];
var new_game = function(){
    board = [["_","_","_"],["_","_","_"],["_","_","_"]];
}
var print_board = function(){
    console.log(board);
};
var make_move = function(row, column, x_o){
  board[row][column] = x_o;
};
//Current issue: win_check is unreliable on an unfinished board.
//Possible solution: helper function that takes out repetition
//and adds a check for X or O specifically.
var win_check = function(board){
    var blankSpace = "_";
    if(board[0][0] !== blankSpace && board[0][0] === board[0][1] && board[0][0] === board[0][2]){
        console.log(board[0][0] + "'s win");
    } else if(board[1][0] !== blankSpace && board[1][0] === board[1][1] && board[1][0] === board[1][2]){
        console.log(board[1][0] + "'s win");
    } else if(board[2][0] !== blankSpace && board[2][0] === board[2][1] && board[2][0] === board[2][2]){
        console.log(board[2][0] + "'s win");
    } else if(board[0][0] !== blankSpace && board[0][0] === board[1][0] && board[0][0] === board[1][2]){
        console.log(board[0][0] + "'s win");
    } else if(board[1][0] !== blankSpace && board[1][0] === board[1][1] && board[1][0] === board[1][2]){
        console.log(board[1][0] + "'s win");
    } else if(board[2][0] !== blankSpace && board[2][0] === board[2][1] && board[2][0] === board[2][2]){
        console.log(board[2][0] + "'s win");
    } else if(board[0][0] !== blankSpace && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
        console.log(board[0][0] + "'s win");
    } else if(board[0][2] !== blankSpace && board[0][2] === board[1][1] && board[0][2] === board[2][0]){
        console.log(board[0][2] + "'s win");
    } else {
        console.log("Tie Game!");
    }
};
var testBoard = [["X","O","O"],
                 ["X","X","_"],
                 ["X","O","X"]];
win_check(testBoard);
//_______________________________________________________
// Went back to naive path with indices
//_______________________________________________________
var UL = "_";
var UM = "_";
var UR = "_";
var upperRow = UL + " " + UM + " " + UR;
var L = "_";
var M = "_";
var R = "_";
var midRow = L + " " + M + " " + R;
var LL = "_";
var LM = "_";
var LR = "_";
var lowerRow = LL + " " + LM + " " + LR;
var board = upperRow + midRow + lowerRow;
var printBoard = function(){
  console.log(UL + " " + UM + " " + UR);
  console.log(midRow);
  console.log(lowerRow);
};
printBoard();
// currently placeMark doesn't update the vars from above such as LL
var placeMark = function(position, mark){
  if(position === "_"){
    position = mark; //need to update the contents of the var that position represents 
    console.log(position);
  }
};
placeMark(UM, "X");
printBoard();
//_______________________________________________________
//_______________________________________________________

var board = [["_","_","_"],["_","_","_"],["_","_","_"]];



var print_board = function(board){
    console.log(board);
};



var make_move = function(line, position, x_o){
    if(line === 1){
        if(position === 1){
            line1 = [[x_o],[],[]];
        } else if(position === 2){
            line1 = [[],[x_o],[]];
        } else {
            line1 = [[],[],[x_o]];
        }
    } else if(line === 2){
        if(position === 1){
            line2 = [[x_o],[],[]];
        } else if(position === 2){
            line2 = [[],[x_o],[]];
        } else {
            line2 = [[],[],[x_o]];
        }
    } else {
        if(position === 1){
            line3 = [[x_o],[],[]];
        } else if(position === 2){
            line3 = [[],[x_o],[]];
        } else {
            line3 = [[],[],[x_o]];
        }
    }
    print_board(line1, line2, line3);
};
make_move(3,2,"0");

