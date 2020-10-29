class Blue{
      constructor(x,y){
      var options = {
        restitution :0.4,
        friction :0.0,
        }
         this.body= Bodies.rectangle(x,y,40,70,options);
         World.add(world, this.body);
      }
      display(){


        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill(135,206,234);
        rect(0,0,40,70);
        pop();

      }


}