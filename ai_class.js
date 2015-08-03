var Ai = function(ai_lvl){
  this.ai_lvl = ai_lvl;
  if(ai_lvl === "simple"){
    //simple_ai_move() ??
  }
};

Ai.prototype.random_index = function(){
  return Math.floor(Math.random() * 3);
};

Ai.prototype.simple_ai_move = function(){
  var ai_row = this.random_index();
  var ai_col = this.random_index();
  if(single_player_game.make_move(ai_row, ai_col, O)){
      console.log('AI move made');
  }else{
    this.simple_ai_move();
  }
};

Ai.prototype.medium_ai_move = function(current_game){
  var ai_row, ai_col;
  var threat = current_game.threat_check();
  if(threat){
    ai_row = threat[0];
    ai_col = threat[1];
    console.log("AI countered a threat!")
    current_game.make_move(ai_row, ai_col, O);
  } else {
    this.simple_ai_move();
  }
};
// Ai.prototype.get_all_sets = function(){
//   var sets = [];

// };