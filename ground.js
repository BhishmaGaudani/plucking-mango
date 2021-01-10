class ground{
constructor(){

    var options={
        isStatic:true,
        friction:0.4,
    }
    this.body=bodies.rectangle(500,625,1200,20,options);
    World.add(world,this.body)
}
display(){
    rectMode(CENTER);
    Fill("silver");
    rect(500,625,1200,20)
}
}