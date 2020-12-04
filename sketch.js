const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
	world = engine.world;
	
  Engine.run(engine);
  


  ground1 = new Ground(100,790,800,10)
  division1 = new Division(480,635,15,300)
  division2 = new Division(400,635,10,300)
  division3 = new Division(320,635,10,300)
  division4 = new Division(240,635,10,300)
  division5 = new Division(160,635,10,300)
  division6 = new Division(80,635,10,300)
  division7 = new Division(0,635,15,300)

  plinko1 = new Plinko(10,255,10)
  plinko2 = new Plinko(60,255,10)
  plinko3 = new Plinko(110,255,10)
  plinko4 = new Plinko(160,255,10)
  plinko5 = new Plinko(210,255,10)
  plinko6 = new Plinko(260,255,10)
  plinko7 = new Plinko(310,255,10)
  plinko8 = new Plinko(360,255,10)
  plinko9 = new Plinko(410,255,10)
  plinko10 = new Plinko(460,255,10)

  plinko11 = new Plinko(35,190,10)
  plinko12 = new Plinko(85,190,10)
  plinko13 = new Plinko(135,190,10)
  plinko14 = new Plinko(185,190,10)
  plinko15 = new Plinko(235,190,10)
  plinko16 = new Plinko(285,190,10)
  plinko17 = new Plinko(335,190,10)
  plinko18 = new Plinko(385,190,10)
  plinko19 = new Plinko(435,190,10)
  
}

function draw() {
  background(205); 

  var particles = [];
  var plinkos = [];
  var divisions = [];

  var divisionHeight=300


  ground1.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()

  plinko1.display()
  plinko2.display()
  plinko3.display()
  plinko4.display()
  plinko5.display()
  plinko6.display()
  plinko7.display()
  plinko8.display()
  plinko9.display()
  plinko10.display()

  plinko11.display()
  plinko12.display()
  plinko13.display()
  plinko14.display()
  plinko15.display()
  plinko16.display()
  plinko17.display()
  plinko18.display()
  plinko19.display()
}



for (var j = 40; j <=this.r; j=j+50)
{
  plinkos.uh(new Plinko(j,75));
}

for (var j = 15; j <=this.r-10; j=j+50) 
{
  plinkos.push(new Plinko(j,175));
}