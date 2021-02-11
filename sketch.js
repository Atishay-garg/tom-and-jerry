
function preload() {
    //load the images here
bgImg=loadImage("images/garden.png")
tomImg2= loadAnimation("images/cat2.png","images/cat3.png");
jerryImg1=loadAnimation("images/mouse1.png");
tomImg1= loadAnimation("images/cat1.png");
tomImg3=loadAnimation("images/cat4.png");
jerryImg3=loadAnimation("images/mouse4.png");




}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    jerry = createSprite(200, 600);
tom.addAnimation("cat",tomImg1)
tom.scale=0.1
jerry.addAnimation("mouse",jerryImg1)
jerry.scale=0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
         tom.velocityX=0;
         tom.x=300;
          tom.addAnimation("tomLastImage", tomImg3);
          jerry.addAnimation("jerryLastImage",jerryImg3);
          jerry.changeAnimation("jerryLastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocityX=-5
tom.addAnimation("tom running",tomImg2)
tom.changeAnimation("tom running")
}

}
