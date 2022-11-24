class Ground 
{
    constructor(x,y,w,h){
      this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
      World.add(world,this.body)
      this.w=w
      this.h=h
     }

     display(){
      var p=this.body.position;
      push();
      fill("yellow")
      rect(p.x,p.y,this.w,this.h)
      pop();
      
     }
}