class Question {
    constructor(){
      this.input = createInput("Name");
      this.button = createButton("Play");
      this.title = createElement("h3")
    }
  
    hide(){
      this.title.hide();
      this.input.hide();
      this.button.hide();
    }
  
    display(){
      title.html("My Quiz Game");
      title.position(130, 0);

      this.question.html("Question:- What is your favourite mobile game?");
      this.question.position(150,80);
      this.option1.html("1: Call Of Duty");
      this.option1.position(150,100);
      this.option2.html("2: FortNight");
      this.option2.position(150,100);
      this.option3.html("3: Free Fire");
      this.option3.position(150,100);
      this.option4.html("4: Pubg");
      this.option4.position(150,100);
      
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();
        contastant.name = this.input.value();
        contastantCount+=1;
        contastant.index = contastantCount;
        contastant.update();
        contastant.updateCount(contastantCount);
      });
  
    }
  }
  