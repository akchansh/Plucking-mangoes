class Stone {
    constructor(x,y,w,h){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.width = w
        this.height = h
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        this.image = loadImage("image/stone.png")
        World.add(world,this.body)

    }
    display(){
        var pos =this.body.position;
        push()
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop()
      }
}