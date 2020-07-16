class BaseBlock{
    constructor(x,y,width,height){
      var options = {
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    this.Visiblity = 255;
    console.log("Width - " + width)
    console.log("Height - " + height)
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height
    World.add(world, this.body);
}
display(){
    push()
    fill("Pink")
   
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    rectMode(CENTER)
    pop()
}
}