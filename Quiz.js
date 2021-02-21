class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      textSize(30);
      text("Game Start",120,100);
      Contestant.getContestantInfo();
      if(allContestants !== undefined){
        for(var plr in allContestants){
            var correctAnswer = "3";
          if (correctAnswer === allContestants[plr].answer) {
            fill("Green");
          } else {
            fill("Red");
          }
        }
      }
    }
  }