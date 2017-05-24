
/*
  Explain Canvas transition
  
  Canvas 1.0 - intro
  Canvas 2.0 - Prison map + toilet paper
  Canvas 2.1 - Password Codes (KeyPads) (8912)
  Cavnas 2.2 - Second room Under Canvas 2
  Canvas 3 - Password Codes (Circles) (1234)
  Canvas 4 - Cells -> Prison Corridor
  Canvas 5 - Outside
*/


function preload()
{
  //Background Music 1
  BGMU1 = loadSound('https://dl.dropbox.com/s/dktapss5jq0qjgp/Game-of-Revenge-Sound-Track-1.mp3?dl=0');
  
  //Background Music 2
  BGMU2 = loadSound('https://dl.dropbox.com/s/a9wru4uahh7dpda/Music%201.mp3?dl=0');
  
  //Background Music 3
  BGMU3 = loadSound('https://dl.dropbox.com/s/7iyptd644az1pcw/Music%202.mp3?dl=0');
  
  //Background Music 4
  BGMU4 = loadSound('https://dl.dropbox.com/s/i9b4yz2fwwaop2x/Music%203.mp3?dl=0');
  
  //Background Music 5
  BGMU5 = loadSound('https://dl.dropbox.com/s/jx6uipvi9jmxl99/Music%205.mp3?dl=0');
  
  
  //Background Image Canvas 1
  BGIC1 = loadImage('https://dl.dropbox.com/s/wbt3vfwy5cre630/Kanye%27s%20Perspective%20800%20X%20600.jpg?dl=0');
  
  
  //canvas 2 files
  
  //Background Image Canvas 2
  BGIC2 = loadImage('https://dl.dropbox.com/s/vdhwsx377zah38t/Jail%20room%20_1.png?dl=0');
  
  //Window Image Canvas 2
  WDIC2 = loadImage('https://dl.dropbox.com/s/ywswqerch0nmk2c/window1.png?dl=0');
  
  //Paper Roll Image Canvas 2
  PRIC2 = loadImage('https://dl.dropbox.com/s/cqrgbfo37c7e4h7/rotolo.png?dl=0');
  
  //Lock Image Canvas 2
  LKIC2 = loadImage('https://dl.dropbox.com/s/6qmtlr6j38pp54j/26053.png?dl=0');
  
  //Number 5 Image Canvas 2
  N5IC2 = loadImage('https://dl.dropbox.com/s/2dm5uxvc2rd97ia/5.png?dl=0');
  
  //Number 4 Image Canvas 2
  N4IC2 = loadImage('https://dl.dropbox.com/s/lquue9ivhgdufty/4.png?dl=0');
  
  //Key Pad Image Canvas 2
  KPIC2 = loadImage('https://dl.dropbox.com/s/cj8xxsxgo3hsfi0/Phone_keypad_layout%2C_grayscale.png?dl=0');
  
  
  //canvas 3 files
  
  //Background Image Canvas 3
  BGIC3 = loadImage('https://dl.dropbox.com/s/4yajfpsdtdfc5e7/prison%20Room%20800%20x%20600.jpg?dl=0');
  
  //Air vent Image Canvas 3
  AVIC3 = loadImage('https://dl.dropbox.com/s/wuid67ua0nx48mf/air%20vent.png?dl=0');
  
  //Screw Driver Image Canvas 3
  SDIC3 = loadImage('https://dl.dropbox.com/s/igv66fd5gqxe7j8/screwdriver-33634_640.png?dl=0');
  
  //Circle Canvas 3
  C1C3 = loadImage('https://dl.dropbox.com/s/l5cj9i4408f8fwy/123.png');
  
  
  //canvas 4 files
  
  //Background Canvas 4
  C4Background =    loadImage('https://dl.dropboxusercontent.com/s/gcwl31qjnovx82t/cell.jpg');
  
  //KeyPad Canvas 4
  C4Keypad =    loadImage('https://dl.dropboxusercontent.com/s/x0egvvhrpobh5l9/lock.png');
  
  //Lock Canvas 4
  C4Lock =    loadImage('https://dl.dropboxusercontent.com/s/auhvp0qy80dll5t/locks.png');
  
  //Choco #trash Canvas 4
  C4Choco =    loadImage('https://dl.dropboxusercontent.com/s/en9rfv1mchgfas8/chocolate%20layer.png');

  //Fingerprint Canvas 4
  C4Fingerprint1 =   loadImage('https://dl.dropboxusercontent.com/s/cg4ozqc65vovq6i/fingerprint%201.png');

  //Fingerprint Canvas 4
  C4Fingerprint2 =   loadImage('https://dl.dropboxusercontent.com/s/7x5osvdugcjkpkn/fingerprint%202.png');
  
  
  //Canvas 5
  
  //Vent Canvas 5
  C5Vent =   loadImage('https://dl.dropboxusercontent.com/s/53rp3vzvp7pcmwu/vent.png');

  C5Spoon =   loadImage('https://dl.dropboxusercontent.com/s/r9c8qxtizpy4cgb/spoon.png');

  C5Bolt =   loadImage('https://dl.dropboxusercontent.com/s/837h3qpxgqzqlgx/bolt%201.png');

  C5BoltA =   loadImage('https://dl.dropboxusercontent.com/s/837h3qpxgqzqlgx/bolt%201.png');

  C5BoltB =   loadImage('https://dl.dropboxusercontent.com/s/l65fekapd6eol42/bolt%202.png');

  C5BoltC =   loadImage('https://dl.dropboxusercontent.com/s/masdlp7yx73k706/bolt%203.png');

  C5BoltD =   loadImage('https://dl.dropboxusercontent.com/s/eh1cybiffh9400y/bolt%204.png');
  
  
  //CanvasRS files
  
  //Bed
  CRSBI = loadImage('https://dl.dropbox.com/s/aa0t9exsciecs14/bed%20re.png?dl=0');
  
  //Table
  CRSTI = loadImage('https://dl.dropbox.com/s/m0vdwhjgmouvtni/table.png?dl=0');

  //Metal Shelf
  CRSMI = loadImage('https://dl.dropbox.com/s/qq2sj4h166odcgc/metal%20shelf.png?dl=0');
  
  //Small Metal Shelf
  CRSmI = loadImage('https://dl.dropbox.com/s/arsx7nygonleqvz/small%20metal%20shelf.png?dl=0');
  
  //Door
  CRSDI = loadimage('https://dl.dropbox.com/s/44qvffr5z0evjy6/Door4.png?dl=0');
  
  
  //Canvas 6
  ECIMG = loadimage('https://dl.dropbox.com/s/np72j8i3nsx45f6/gj.jpg?dl=0');
}

function setup()
{
  //Canvas Size
  createCanvas(830,600);
  
  //Starting Canvas
  canvas = 1;
  
  //Mouse Setting
  lock = false;
  
  //state of paper roll -> Canvas 2
  movePRIC2X = 450;
  movePRIC2Y = 280;
  endPRIC2X = 30;
  endPRIC2Y = 530;
  stateOfPRIC2 = 1;
  //size changes of the keypad -> Canvas 2
  sizeKeypadX = 200;
  sizeKeypadY = 300;
  nsizeKeypadX = 300;
  nsizeKeypadY = 400;
  stateOfKeypad = 1;
  
  //state of Screwdriver -> Canvas 3
  moveSDIC3X = 500;
  moveSDIC3Y = 400;
  endSDIC3X = 30;
  endSDIC3Y = 530;
  stateOfSDIC3 = 1;
  
  //state of Circle
  sizeC1X = 30;
  sizeC1Y = 30;
  nsizeC1X = 93;
  nsizeC1Y = 93;
  stateOfC1 = 1
  
  //state of Choco -> Canvas 4
  moveChocoX = 430;
  moveChocoY = 430;
  stateOfChoco = 1;
  endChocoX = 30;
  endChocoY = 530;

  moveSpoonX = 430;
  moveSpoonY = 430;
  stateOfSpoon = 1;
  endSpoonX = 30;
  endSpoonY = 530;

  C5SizeX = 40;
  C5SizeY = 30;
  endSizeX = 420;
  endSizeY = 300;
  stateOfC5Vent = 1;
  
  C5BoltX = 0;
  C5BoltY = 0;
  C5BoltZ = 0;
  
  //passwords #1 Number Key Pad
  a = false;
  b = false;
  c = false;
  d = false;
  
  //passwords #2 Clicking Circles in order
  A = false;
  B = false;
  C = false;
  D = false;
  
  //passwords #3 Number Key Pad
  Q = false;
  W = false;
  E = false;
  R = false;
  
  Z = false;
  X = false;
  V = false;
  N = false;

  AA = false;
  BB = false;
  CC = false;
}

function draw()
{
  if (canvas == 1)
  {
    canvas1();
    if (BGMU2.isPlaying() == false)
      {
        BGMU2.play();
      }
  }
  else if (canvas == 2)
  {
    canvas2();
    if (BGMU2.isPlaying() == true && BGMU3.isPlaying() == false)
      {
        BGMU2.stop();
        BGMU3.play();
      }
  }
  else if (canvas == 2.1)
  {
    canvas2_1();
  }
  else if (canvas == 2.2)
  {
    canvas2_2();
  }
  else if (canvas == 3)
  {
    canvas3();
    if (BGMU3.isPlaying() == true && BGMU1.isPlaying() == false)
    {
      BGMU3.stop();
      BGMU1.play();
    }
  }
  else if (canvas == 3.1)
  {
    canvas3_1();
  }
  else if (canvas == 4)
  {
    canvas4();
    if (BGMU1.isPlaying() == true && BGMU4.isPlaying() == false)
      {
        BGMU1.stop();
        BGMU4.play();
      }
  }
  else if (canvas == 4.1)
  {
    canvas4_1();
  }
  else if (canvas == 4.2)
  {
    canvas4_2();
  }
  else if (canvas == 5)
  {
    canvas5();
    if (BGMU4.isPlaying() == true && BGMU5.isPlaying() == false)
      {
        BGMU4.stop();
        BGMU5.play();
      }
  }
  else if (canvas == 5.1)
  {
    canvas5_1();
  }
  else if (canvas == 6)
  {
    canvasRS();
  }
  else if (canvas == 7)
  {
    endcanvas();
  }
  else
  {
    canvas = 1;
  }
}

function canvas1() // Courtroom
{
  //Background Image
  image(BGIC1,0,0,830,600);
  
  //Starting button #1
  fill(255,0,0);
  rect(330,370,120,70);
  fill(0,0,0);
  textSize(40);
  text("Start",345,420);
  if(mouseX > 330 && mouseX < 450 && mouseY > 370 && mouseY < 440)
  {
    fill(204,0,0);
    rect(330,370,120,70);
    fill(0,0,0);
    textSize(40);
    text("Start",345,420);
    if (mouseIsPressed == true)
      {
        fill(255,51,51);
        rect(330,370,120,70);
        fill(0,0,0);
        textSize(40);
        text("Start",345,420);
        canvas = 2;
      }
  }
}

function canvas2() // Prison Corridor -> Cell
{
  //Background Image
  image(BGIC2,0,0,830,600);
  //Window Image
  image(WDIC2,460,90,100,85);
  //Lock Image
  image(LKIC2,312.5,315,25,25);

  //Room number
  //5
  image(N5IC2,50,50,50,50);
  image(N5IC2,100,50,50,50);
  //4
  image(N4IC2,150,50,50,50);
  itemGrid();
  
  //Settings for Paper Rolls
  if (stateOfPRIC2 == 1)
  {
    movePRIC2X = 450;
    movePRIC2Y = 280;
    image(PRIC2,movePRIC2X,movePRIC2Y,50,50);
  }
  else if (stateOfPRIC2 == 2)
  {
    image(PRIC2,endPRIC2X,endPRIC2Y,50,50);
  }
  else if (stateOfPRIC2 == 3)
  {
    noCursor();
    image(PRIC2,mouseX-25,mouseY-25,50,50);
  }
  else if (stateOfPRIC2 == 4)
  {
    stateOfPRIC2 = 1;
    canvas = 2.1;
    stateOfKeypad = 2;
  }
  
  //Action for mouse to take
  /*image(WDIC2,460,90,100,85);*/
  if (mouseX > 460 && mouseX < 560 && mouseY > 90 && mouseY < 175)
  {
    cursor(HAND);
    if (stateOfPRIC2 == 3)
    {
      noCursor();
      image(PRIC2,mouseX-40,mouseY-40,80,80);
      if (mouseIsPressed == true)
      {
        stateOfPRIC2 = 4;
      }
    }
  }
  
  else if (mouseX > 445 && mouseX < 470 && mouseY > 280 && mouseY < 305)
  {
    cursor(HAND);
  }
  
  //Paper Roll PRIC2 I
  /*movePRIC2X = 450;
  movePRIC2Y = 280;
  image(PRIC2,movePRIC2X,movePRIC2Y,50,50);*/
  else if (mouseX > 450 && mouseX < 500 && mouseY > 280 && mouseY < 330)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfPRIC2 = 2;
    }
  }
  //Paper Roll PRIC2 II
  /*endPRIC2X = 30;
  endPRIC2Y = 530;*/
  else if (mouseX > 30 && mouseX < 80 && mouseY > 530 && mouseY < 580 && stateOfPRIC2 == 2)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
     stateOfPRIC2 = 3;
    }
  }
  
  else if (stateOfPRIC2 == 3 && mouseIsPressed == true && mouseY < 510)
  {
    stateOfPRIC2 = 2;
  }
  
  else if (stateOfPRIC2 != 3) // != not equal
  {
    cursor(ARROW);
  }
}

function canvas2_1() // Password Codes (KeyPads) (8912)
{
  //turn back the mouse setting
  cursor(ARROW);
  lock = false;
  //Key Pad password setting up
  //KPIC2, 250, 80, 300, 400
  if(stateOfKeypad == 1)
  {
    sizeKeypadX = 200;
    sizeKeypadY = 300;
    image(KPIC2,250,80,sizeKeypadX,sizeKeypadY);
  }
  else if (stateOfKeypad == 2)
  {
    image(KPIC2,250,80,sizeKeypadX,sizeKeypadY);
    
    if (sizeKeypadX < nsizeKeypadX)
    {
      sizeKeypadX = sizeKeypadX + 1;
    }
    if (sizeKeypadY < nsizeKeypadY)
    {
      sizeKeypadY = sizeKeypadY + 1;
    }
    if (!(sizeKeypadX < nsizeKeypadX && sizeKeypadY < nsizeKeypadY))
    {
      stateOfKeypad = 3;
    }
  }
  else if (stateOfKeypad == 3)
  {
    image(KPIC2,250,80,nsizeKeypadX,nsizeKeypadY);
    lock = true;
  }
  
  //1
  if (mouseX > 250 && mouseX < 350 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,85,90,90);
      textSize(50);
      text("1",570+50,120);
      if (b == true && a == true) // Third Requirement
      {
        c = true;
      }
    }
  }
  //4
  else if (mouseX > 250 && mouseX < 350 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  //7
  else if (mouseX > 250 && mouseX < 350 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,285,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  //*
  else if (mouseX > 250 && mouseX < 350 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  //2
  else if (mouseX > 350 && mouseX < 450 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,85,90,90);
      textSize(50);
      text("2",570+75,120);
      if (c == true && a == true && b == true) //Last Requirement
      {
        d = true;
      }
    }
  }
  //5
  else if (mouseX > 350 && mouseX < 450 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  //8
  else if (mouseX > 350 && mouseX < 450 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,285,90,90);
      textSize(50);
      text("8",570+25,120);
      a = true; // First Requirement
    }
  }
  //0
  else if (mouseX > 350 && mouseX < 450 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  //3
  else if (mouseX > 450 && mouseX < 550 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true && lock == true)
    {
      rect(455,85,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  //6
  else if (mouseX > 450 && mouseX < 550 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  //9
  else if (mouseX > 450 && mouseX < 550 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,285,90,90);
      textSize(50);
      text("9",570,120);
      if (a == true) //Second Requirement
      {
        b = true;
      }
    }
  }
  //#
  else if (mouseX > 450 && mouseX < 550 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      lock = false;
    }
  }
  else
  {
    cursor(ARROW);
  }
  //Answers
  if (d == true)
  {
    canvas = 3;
  }
}

function canvas2_2() // Second Room
{
  background(172,172,172);
}

function canvas3() // Prison Courtyard -> Cell
{ 
  //Background Image
  image(BGIC3,0,0,830,600);
  //Air vent Image
  image(AVIC3,50,400,50,50);
  itemGrid();
  
  //Settings for the Screw Driver 
  if (stateOfSDIC3 == 1)
  {
    moveSDIC3X = 500;
    moveSDIC3Y = 400;
    image(SDIC3,moveSDIC3X,moveSDIC3Y,50,50);
  }
  else if (stateOfSDIC3 == 2)
  {
    image(SDIC3,endSDIC3X,endSDIC3Y,50,50);
  }
  else if (stateOfSDIC3 == 3)
  {
    noCursor();
    image(SDIC3,mouseX-25,mouseY-25,50,50);
  }
  
  //Mouse on Play
  if (mouseX > 50 && mouseX < 100 && mouseY > 400 && mouseY < 450)
  {
    cursor(HAND);
    if (stateOfSDIC3 == 3)
    {
      noCursor();
      image(SDIC3,mouseX-40,mouseY-40,80,80);
      if (mouseIsPressed == true)
      {
        canvas = 3.1;
        stateOfC1 = 2;
      }
    }
  }
  else if (mouseX > 500 && mouseX < 550 && mouseY > 400 && mouseY < 450)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfSDIC3 = 2;
    }
  }
  else if (mouseX > 30 && mouseX < 80 && mouseY > 530 && mouseY < 580 && stateOfSDIC3 == 2)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfSDIC3 = 3;
    }
  }
  else if (stateOfSDIC3 == 3 && mouseIsPressed == true && mouseY < 510)
  {
    stateOfSDIC3 = 2;
  }
  else if (stateOfSDIC3 != 3)
  {
    cursor(ARROW);
  }
}

function canvas3_1() // Password Codes (Circles) (1234)
{ 
  stroke(0,0,0);
  fill(172,172,172);
  rect(190,197.5,370,100);
  
  cursor(ARROW);
  
  //BIGGER CIRCLE!
  if (stateOfC1 == 1)
  {
    image(C1C3,194,204,sizeC1X,sizeC1Y);
    image(C1C3,284,204,sizeC1X,sizeC1Y);
    image(C1C3,374,204,sizeC1X,sizeC1Y);
    image(C1C3,464,204,sizeC1X,sizeC1Y);
  }
  else if (stateOfC1 == 2)
  {
    image(C1C3,194,204,sizeC1X,sizeC1Y);
    image(C1C3,284,204,sizeC1X,sizeC1Y);
    image(C1C3,374,204,sizeC1X,sizeC1Y);
    image(C1C3,464,204,sizeC1X,sizeC1Y);
    
    if (sizeC1X < nsizeC1X)
    {
      sizeC1X = sizeC1X + 2;
    }
    if (sizeC1Y < nsizeC1Y)
    {
      sizeC1Y = sizeC1Y + 2;
    }
    if (!(sizeC1X < nsizeC1X && sizeC1Y < nsizeC1Y))
    {
      stateOfC1 = 3;
    }
  }
  else if (stateOfC1 == 3)
  {
    //Circle 1
    xy = 0+a;
    stroke(255-xy,255-xy,255-xy);
    fill(255-xy,255-xy,255-xy);
    ellipse(240,250,70,70);
    image(C1C3,194,204,nsizeC1X,nsizeC1Y);
    
    //Circle 2
    xz = 0+b
    stroke(255-xz,255-xz,255-xz);
    fill(255-xz,255-xz,255-xz);
    ellipse(330,250,70,70);
    image(C1C3,284,204,sizeC1X,sizeC1Y);
    
    //Circle 3
    xx = 0+c
    stroke(255-xx,255-xx,255-xx);
    fill(255-xx,255-xx,255-xx);
    ellipse(420,250,70,70);
    image(C1C3,374,204,sizeC1X,sizeC1Y);
    
    //Circle 4
    xw = 0+d
    stroke(255-xw,255-xw,255-xw);
    fill(255-xw,255-xw,255-xw);
    ellipse(510,250,70,70);
    image(C1C3,464,204,sizeC1X,sizeC1Y);
  }
  
  //Circle 1 calculation
  Circle1 = sqrt((mouseX - 240)*(mouseX - 240)+(mouseY - 250)*(mouseY - 250));
  //Circle 2 calculation
  Circle2 = sqrt((mouseX - 330)*(mouseX - 330)+(mouseY - 250)*(mouseY - 250));
  //Circle 3 calculation
  Circle3 = sqrt((mouseX - 420)*(mouseX - 420)+(mouseY - 250)*(mouseY - 250));
  //Circle 4 calculation
  Circle4 = sqrt((mouseX - 510)*(mouseX - 510)+(mouseY - 250)*(mouseY - 250));

  //command order
  if (Circle1 < 35)
  {
    cursor(HAND);
    stroke(222,222,222);
    fill(222,222,222);
    ellipse(240,250,70,70);
    if (mouseIsPressed == true)
    {
      stroke(240,240,240);
      fill(240,240,240);
      ellipse(240,250,80,80);
      A = true;
      a = 33;
    }
  }
  else if (Circle2 < 35)
  {
    cursor(HAND);
    stroke(222,222,222);
    fill(222,222,222);
    ellipse(330,250,70,70);
    if (mouseIsPressed == true)
    {
      stroke(240,240,240);
      fill(240,240,240);
      ellipse(330,250,80,80);
      if (A == true)
      {
        B = true;
        b = 33;
      }
    }
  }
  else if (Circle3 < 35)
  {
    cursor(HAND);
    stroke(222,222,222);
    fill(222,222,222);
    ellipse(420,250,70,70);
    if (mouseIsPressed == true)
    {
      stroke(240,240,240);
      fill(240,240,240);
      ellipse(420,250,80,80);
      if (B == true && A == true)
      {
        C = true;
        c = 33;
      }
    }
  }
  else if (Circle4 < 35)
  {
    cursor(HAND);
    stroke(222,222,222);
    fill(222,222,222);
    ellipse(510,250,70,70);
    if (mouseIsPressed == true)
    {
      stroke(240,240,240);
      fill(240,240,240);
      ellipse(510,250,80,80);
      if (A == true && B == true && C == true)
      {
        D = true;
        d = 33;
      }
    }
  }
  else if (D == true)
  {
    canvas = 4;
  }
  else
  {
    cursor(ARROW);
  }
}

function draw1()
{
  if (C5BoltX == 0)
  {
    image(C5BoltD,230,350,40,40);
  }
  else if (C5BoltX == 1)
  {
    image(C5BoltB,230,350,40,40);
  }
  else
  {
    image(C5BoltD,230,350,40,40);
  }
}

function draw2()
{
  if (C5BoltY == 0)
  {
    image(C5BoltC,580,110,40,40);
  }
  else if (C5BoltY == 1)
  {
    image(C5BoltB,580,110,40,40);
  }
  else
  {
    image(C5BoltC,580,110,40,40);
  }
}

function draw3()
{
  if (C5BoltZ == 0)
  {
    image(C5BoltC,580,350,40,40);
  }
  else if (C5BoltZ == 1)
  {
    image(C5BoltB,580,350,40,40);
  }
  else
  {
    image(C5BoltC,580,350,40,40);
  }
}

function canvas4() // Cell -> Prison Corridor
{
  
  image(C4Background,0,0,830,600); 
  itemGrid();

  image(C4Lock,180,280,20,25);
  

  if (stateOfChoco == 1)
  {
    moveChocoX = 430;
    moveChocoY = 430;
    image(C4Choco,moveChocoX,moveChocoY,50,50);
  }
  else if (stateOfChoco == 2)
  {
    image(C4Choco,endChocoX,endChocoY,50,50);
  }
  else if (stateOfChoco == 3)
  {
    noCursor;
    image(C4Choco,mouseX-25,mouseY-25,50,50);
  }
  else if (stateOfChoco == 4)
  {
    stateOfChoco = 3;
    canvas = 4.2;
  }
 
  if (mouseX > 430 && mouseX < 480 && mouseY > 430 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfChoco = 2;
    }
  }
  
  else if (mouseX > 180 && mouseX < 200 && mouseY > 280 && mouseY < 300)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateOfChoco == 3)
    {
      canvas = 4.2;
    }
    else if (mouseIsPressed == true)
    {
      canvas = 4.1;
    }
  }
  
  else if (mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfChoco = 3;
    }
  }

  else
  {
    cursor(ARROW);
  }
  
}

function canvas4_1()
{
  image(C4Keypad,250,80,300,400);
  itemGrid();
  //1
  if (mouseX > 250 && mouseX < 350 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,85,90,90);
      textSize(50);
      text("1",570+50,120);
      canvas = 4;
    }
  }
  
  //0
  else if (mouseX > 350 && mouseX < 450 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //2
  else if (mouseX > 350 && mouseX < 450 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,85,90,90);
      textSize(50);
      text("2",570+0,120);
    }
  }
  
  //3
  else if (mouseX > 450 && mouseX < 550 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,85,90,90);
      textSize(50);
      text("3",570+75,120);
    }
  }
  
  //4
  else if (mouseX > 250 && mouseX < 350 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;

    }
  }
  
  //5
  else if (mouseX > 350 && mouseX < 450 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //6
  else if (mouseX > 450 && mouseX < 550 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //7
  else if (mouseX > 250 && mouseX < 350 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,285,90,90);
      textSize(50);
      text("7",570+50,120);
    }
  }
  
  //8
  else if (mouseX > 350 && mouseX < 450 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,285,90,90);
      textSize(50);
      text("8",570+25,120);
    }
  }
  
  //9
  else if (mouseX > 450 && mouseX < 550 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,285,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  //*
  else if (mouseX > 250 && mouseX < 350 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
  
  
  //#
  else if (mouseX > 450 && mouseX < 550 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
}

function canvas4_2() // Outside
{

  image(C4Keypad,250,80,300,400);
  //2
  image(C4Fingerprint1,355,85,90,90);
  
  //3
  image(C4Fingerprint2,455,85,90,90);

  //7
  image(C4Fingerprint2,255,285,90,90);

  //8
  image(C4Fingerprint1,355,285,90,90);

  itemGrid();

  //1
  if (mouseX > 250 && mouseX < 350 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,85,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }

  //0
  else if (mouseX > 350 && mouseX < 450 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    
    }
  }

  //2
  else if (mouseX > 350 && mouseX < 450 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,85,90,90);
      textSize(50);
      text("2",570+0,120);
      Z = true;
    }
  }

  //3
  else if (mouseX > 450 && mouseX < 550 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,85,90,90);
      textSize(50);
      text("3",570+75,120);
      image(C4Fingerprint1,355,85,90,90);
      
      if (Z == true && X == true && V == true)
      {
        N = true;
      }      

    }
  }

  //4
  else if (mouseX > 250 && mouseX < 350 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;

    }
  }

  //5
  else if (mouseX > 350 && mouseX < 450 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }

  //6
  else if (mouseX > 450 && mouseX < 550 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }

  //7
  else if (mouseX > 250 && mouseX < 350 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,285,90,90);
      textSize(50);
      text("7",570+50,120);
      
      if (Z == true && X == true)
      {
        V = true;
      }

    }
  }

  //8
  else if (mouseX > 350 && mouseX < 450 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,285,90,90);
      textSize(50);
      text("8",570+25,120);
      
      
      if (Z == true)
      {
        X = true;
      }

    }
  }

  //9
  else if (mouseX > 450 && mouseX < 550 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,285,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
      
     

    }
  }

  //4
  else if (mouseX > 250 && mouseX < 350 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }


  //#
  else if (mouseX > 450 && mouseX < 550 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 4;
    }
  }
    
  if (N == true)
  {
    canvas = 5;
  }
    
  
  else
  {
    cursor(ARROW);
  }
  
  
}

function canvas5() // Outside
{
  image(C4Background,0,0,830,600); 
  itemGrid();
  image(C5Vent,400,290,40,30);
  
  if (stateOfSpoon == 1)
  {
    moveSpoonX = 430;
    moveSpoonY = 430;
    image(C5Spoon,moveSpoonX,moveSpoonY,40,40);
  }
  else if (stateOfSpoon == 2)
  {
    image(C5Spoon,endSpoonX,endSpoonY,40,40);
  }
  
  else if (stateOfSpoon == 3)
  {
    noCursor;
    image(C5Spoon,mouseX-25,mouseY-25,40,40);
  }
  else if (stateOfSpoon == 4)
  {
    stateOfSpoon = 3;
    canvas = 5.1;
    stateOfC5Vent = 2;
  }
  
  if (mouseX > 430 && mouseX < 480 && mouseY > 430 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfSpoon = 2;
    }
  }

 
  
  else if (mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateOfSpoon = 3;
    }
  }

  else
  {
    cursor(ARROW);
  }
  
  
  
  if (mouseX > 400 && mouseX < 440 && mouseY > 290 && mouseY < 320)
  {
    cursor(HAND);
    if (stateOfSpoon == 3 && mouseIsPressed == true)
    {
      stateOfC5Vent = 2;
      canvas = 5.1;
    }
  }
}

function canvas5_1()
{
  cursor(ARROW);
  draw1();
  draw2();
  draw3();
  
  C5Bolt1 = 
    sqrt((mouseX - 250)*(mouseX - 250) + (mouseY - 130)*(mouseY - 130))
  C5Bolt2 = 
    sqrt((mouseX - 250)*(mouseX - 250) + (mouseY - 370)*(mouseY - 370))
  C5Bolt3 = 
    sqrt((mouseX - 600)*(mouseX - 600) + (mouseY - 130)*(mouseY - 130))
  C5Bolt4 = 
    sqrt((mouseX - 600)*(mouseX - 600) + (mouseY -370)*(mouseY - 370))
  
  
 if (stateOfC5Vent == 1)
 {
   C5SizeX = 40;
   C5SizeY = 30;
 image(C5Vent,215,100,C5SizeX,C5SizeY);
 } 
  else if (stateOfC5Vent == 2)
 {
  image(C5Vent,215,100,C5SizeX,C5SizeY);
    
    if (C5SizeX < endSizeX)
    {
      C5SizeX = C5SizeX + 4;
    }
    if (C5SizeY < endSizeY)
    {
      C5SizeY = C5SizeY + 3;
    }
    if (!(C5SizeX < endSizeX && C5SizeY < endSizeY))
    {
      stateOfC5Vent = 3;
    }
  }
  else if (stateOfC5Vent == 3)
  {
    image(C5Vent,215,100,endSizeX,endSizeY);
    if (C5Bolt1 <= 1)
    {
      cursor(HAND);
      stateOfC5Vent = 1;
    }

    else if (C5Bolt2 <= 20)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        C5BoltX = 1;
        AA = true;
      }
    }

    else if (C5Bolt3 <= 20)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        C5BoltY = 1;
        BB = true;
      }
    }

    else if (C5Bolt4 <= 20)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        C5BoltZ = 1;
        CC = true;
      }
    }

    else
    {
      cursor(ARROW);
    }
  }
  
  fill(0,0,0)
  image(C5BoltB,230,110,40,40);
  
  fill(255,255,255);
  ellipse(250,370,40,40);
  ellipse(600,130,40,40);
  ellipse(600,370,40,40);


  if (AA == true && BB == true && CC == true)
  {
    canvas = 7;
  }
}

function endcanvas()
{
  background(172,172,172);
}

function itemGrid()
{
  fill(50,50,50);
  rect(10,510,810,580);

  fill(125,125,125);
  rect(20,520,70,70);

  fill(125,125,125);
  rect(100,520,70,70);

  fill(125,125,125);
  rect(180,520,70,70);
  
  fill(125,125,125);
  rect(260,520,70,70);
  
  fill(125,125,125);
  rect(340,520,70,70);
  
  fill(125,125,125);
  rect(420,520,70,70);
  
  fill(125,125,125);
  rect(500,520,70,70);
  
  fill(125,125,125);
  rect(580,520,70,70);
  
  fill(125,125,125);
  rect(660,520,70,70);
  
  fill(125,125,125);
  rect(740,520,70,70);
}

function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
}
