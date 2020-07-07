class Doctor{
constructor(x,y,width,height){
this.body = createSprite(x,y,width,height);
this.image = loadAnimation("doc1.png","doc2.png","doc3.png","doc4.png","doc5.png");
this.body.addAnimation("running",this.image);
//this.body.collide(ground.body);
}
check(){
    if(this.body.isTouching(ground.body)){
console.log("touching")
    }
}
}