class Grey{
    constructor(x,y){
    var options = {
      restitution :0.4,
      friction :0.0,
      }
       this.body= Bodies.rectangle(x,y,40,70);
       World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(3);
      rectMode(CENTER);
      fill(128, 128, 128);
      rect(pos.x, pos.y,40,70);
    }


}