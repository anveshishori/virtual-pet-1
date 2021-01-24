//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dogImage, doghImg

function preload()
{
  //load images here
  
dogImage = loadAnimation("images/dogImg.png")
doghImg = loadAnimation("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
database = firebase.database();
dog = createSprite(250,250,20,20)
dog.addAnimation("doggie", dogImage)
dog.addAnimation("happy doggie", doghImg)
dog.scale = 0.2

foodStock = database.ref('food')

foodStock.on("value",readStock)
  
}


function draw() {  
background(rgb(46, 139, 87))

if (keyWentDown(UP_ARROW)){
  foodS -= 1
writeStock(foodS);
dog.changeAnimation("happy doggie",doghImg)

}
if(keyWentUp(UP_ARROW)){

  dog.changeAnimation("doggie",dogImage)
}

  drawSprites();
  //add styles here
  fill("white")
text("Press Up Arrow to feed the Doggie",170,20);
  textSize(20)
  text("FOOD REMAINING : " + foodS, 150,100)
}





function readStock(data){
  foodS = data.val();

}

function writeStock(data){

database.ref('/').update({
  food: data
})

}
