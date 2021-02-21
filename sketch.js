var canvas;
var gameState = 0;
var contestantCount;
var database;
var quiz,contestant,question,allContestants;

function setup(){
  canvas = createCanvas(900,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("#FFBEC4");
  if (contestantCount === 4) {
    quiz.update(1);
  }

  if (gameState === 1) {
    clear();
    quiz.play();
  } 
}
