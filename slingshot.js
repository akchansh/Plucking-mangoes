class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        Matter.Body.setPosition(body, {x : 173, y: 378})
        this.sling.bodyA = body;
    }
    display(){
        if (this.sling.bodyA){
            var p1 = this.sling.bodyA.position
            var p2 = this.sling.pointB
            strokeWeight(4)
            line(p1.x,p1.y,p2.x,p2.y)
          }
    }
    
    
}