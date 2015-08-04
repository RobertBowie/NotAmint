var Ai = function(current_game){ //Feed this more of the flow_control parameters and propagate throughout 
  this.current_game = current_game;
};

Ai.prototype.random_index = function(){
  return Math.floor(Math.random() * 3);
};

Ai.prototype.simple_ai_move = function(){
  var ai_row = this.random_index();
  var ai_col = this.random_index();
  if(!(single_player_controller.max_move(single_player_game))){
    if(single_player_game.make_move(ai_row, ai_col, O)){
      console.log("AI has moved randomly!");
    }else{
      this.simple_ai_move();
    }
  }
};

Ai.prototype.medium_ai_move = function(){
  var ai_row, ai_col;
  var threat = this.current_game.threat_check();
  var offense = this.current_game.offensive_check();
  if(offense){
    ai_row = offense[0];
    ai_col = offense[1];
    this.current_game.make_move(ai_row, ai_col, O);
    console.log("AI moved offensively!");
  } else if(threat){
    ai_row = threat[0];
    ai_col = threat[1];
    this.current_game.make_move(ai_row, ai_col, O);
    console.log("AI countered a threat!");
  } else {
    this.simple_ai_move();
  }
};


// Ai.prototype.get_all_sets = function(){
//   var sets = [];

// };