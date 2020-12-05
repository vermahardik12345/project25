class Dustbin{
  constructor(x,y){
      
    this.x=x;
      this.y=y;
     this.ypos=655;
     this.xpos=1150;
     this.xpos2=1190;
     this.ypos2=625;
     this.xpos3=1050;
     this.ypos3=630;
     this.width=100;
     this.height=10;
    this.image=loadImage("hello.png");
    // World.add(world,this.image);
     this.lbody=Bodies.rectangle(this.xpos3,this.ypos3,this.width-90,this.height+90,{isStatic:true});
     World.add(world,this.lbody);
     this.rbody=Bodies.rectangle(this.xpos2,this.ypos2,this.width-90,this.height+90,{isStatic:true});
     World.add(world,this.rbody);
     this.bbody=Bodies.rectangle(this.xpos,this.ypos,this.width,this.height,{isStatic:true});
     World.add(world,this.bbody);
     

  }
  display(){
    var lpos=this.lbody.position;
    var rpos=this.rbody.position;
    
    pop();
    //translate(lpos.x,lpos.y);
   // translate(rpos.x,rpos.y);
    fill("blue");
    //rectMode(CENTER);
    //rect(lpos.x,lpos.y,this.width-90,this.height+90);
   imageMode(CENTER);
   image(this.image,1120,580,160,160);
    push();
  }
}