canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90; 
rover_x = 10;
rover_y = 10;
rover_img = "rover.png";
background_img = "mars.jpg";

function add(){
    bg_img = new Image();
    bg_img.onload = uploadBg;
    bg_img.src = background_img;
    rover_img1 = new Image();
    rover_img1.onload = uploadRover;
    rover_img1.src = rover_img;

}

function uploadBg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img1, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);
 
function my_keydown(e){
    kp = e.keyCode;
    console.log(kp);
    if(kp == 37){
        left();
    }

    if(kp == 38){
        up();
    }

    if(kp == 39){
        right();
    }

    if(kp == 40){
        down();
    }
    
}

function up()
{
   if( rover_y>=0){
    rover_y = rover_y -10;
    console.log("UP rover position is: " + rover_x + " X, " + rover_y + " Y");
    uploadBg();
    uploadRover();
   }
}

function down()
{
   if( rover_y<=500){
    rover_y = rover_y + 10;
    console.log("DOWN rover position is: " + rover_x + " X, " + rover_y + " Y");
    uploadBg();
    uploadRover();
   }
}

function left()
{
   if( rover_x>=0){
    rover_x = rover_x -10;
    console.log("LEFT rover position is: " + rover_x + " X, " + rover_y + " Y");
    uploadBg();
    uploadRover();
   }
}

function right()
{
   if( rover_x<=700){
    rover_x = rover_x +10;
    console.log("RIGHT rover position is: " + rover_x + " X, " + rover_y + " Y");
    uploadBg();
    uploadRover();
   }
}