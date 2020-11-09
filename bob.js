class bob {
    constructor(x,y,width,height) {
   
       var options = {
           'isStatic': false,
           'restitution': 0.3,
           'friction': 0.5,
           'density': 1.0
       }
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.w = width
         this.h = height 
         this.image = loadImage("images.jpg");

       World.add(world,this.body);
    } 
      display(){
       var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     imageMode(CENTER);
     image(this.image,0,0,this.w,this.h);
       pop();
   
   
      }
   
   }