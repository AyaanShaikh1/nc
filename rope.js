class rope  {
        constructor(bodyA,bodyB){
         var options = {
             bodyA:bodyA,
             bodyB:bodyB,
             stiffness:0.06,
             length:340
         }   
         this.rope = Constraint.create(options);
         World.add(world,this.rope);
        }
        display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(3);
            stroke("cyan");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
        
        
        }