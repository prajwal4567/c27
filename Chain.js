class Chain{
    constructor(ba,bb){
        var Option={
            bodyA:ba,
            bodyB:bb,
            stiffness:0.08,
            length:10
        }
        this.chain=Matter.Constraint.create(Option);
        World.add(world,this.chain); 
    }
   display() {
       var pa=this.chain.bodyA.position;
       var pb=this.chain.bodyB.position;
       strokeWeight(4);
       line(pa.x,pa.y,pb.x,pb.y);
   }
}