const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var engine,world

function preload()
{

   polygon = loadImage("polygon.png")

}
    
function setup()
{
    createCanvas(1200,550)
    engine = Engine.create();
    world = engine.world


    var options = 
    {
        density:1
    }
    
    striker = Bodies.circle(150,250,70,options)
    World.add(world,striker)

    string = new String(this.striker,{x:150,y:250})

    
    ground = new Ground(1000,300,300,20)
    ground1 = new Ground(600,500,300,20)

   
    box1 = new Box(500,470)
    box2 = new Box(540,470)
    box3 = new Box(580,470)
    box4 = new Box(620,470)
    box5 = new Box(660,470)
    box6 = new Box(700,470)
    
    box7 = new Box(520,430)
    box8 = new Box(560,430)
    box9 = new Box(600,430)
    box10 = new Box(640,430)
    box11 = new Box(680,430)
   

    box12 = new Box(540,390)
    box13 = new Box(580,390)
    box14 = new Box(620,390)
    box15 = new Box(660,390)

    box16 = new Box(560,350)
    box17 = new Box(600,350)
    box18 = new Box(640,350)

    box19 = new Box(580,310)
    box20 = new Box(620,310)

    box21 = new Box(600,270)





    box01 = new Box(900,270)
    box02 = new Box(940,270)
    box03 = new Box(980,270)
    box04 = new Box(1020,270)
    box05 = new Box(1060,270)
    box06 = new Box(1100,270)

    box07 = new Box(920,230)
    box08 = new Box(960,230)
    box09 = new Box(1000,230)
    box010 = new Box(1040,230)
    box011 = new Box(1080,230)

    box012 = new Box(940,190)
    box013 = new Box(980,190)
    box014 = new Box(1020,190)
    box015 = new Box(1060,190)

    box016 = new Box(960,150)
    box017 = new Box(1000,150)
    box018 = new Box(1040,150)

    box019 = new Box(980,110)
    box020 = new Box(1020,110)

    box021 = new Box(1000,70)

}

function draw()
{
   background("black")

    textSize(20)
    fill(255,165,165)
    text("DRAG THE HEXAGONAL STONE AND RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCKS",160,30)

   Engine.update(engine)

   imageMode(CENTER)
   image(polygon,striker.position.x,striker.position.y,70,70)
   
   string.display()

   ground.display()
   ground1.display()


   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()
   box7.display()
   box8.display()
   box9.display()
   box10.display()
   box11.display()
   box12.display()
   box13.display()
   box14.display()
   box15.display()
   box16.display()
   box17.display()
   box18.display()
   box19.display()
   box20.display()
   box21.display()

   box01.display()
   box02.display()
   box03.display()
   box04.display()
   box05.display()
   box06.display()
   box07.display()
   box08.display()
   box09.display()
   box010.display()
   box011.display()
   box012.display()
   box013.display()
   box014.display()
   box015.display()
   box016.display()
   box017.display()
   box018.display()
   box019.display()
   box020.display()
   box021.display()

}

function mouseDragged()
{
    Matter.Body.setPosition(this.striker,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    string.fly()
}
