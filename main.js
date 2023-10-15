function preload()
{

}

function setup()
{
    canvas = createCanvas(600,600);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw()
{
    image(video,100,100,400,400);
    fill("red");
    stroke("red");
    circle(50,50,50);

    fill("green");
    stroke("green");
    rect(35,75,30,450);

    fill("red");
    stroke("red");
    circle(50,550,50);

    fill("green");
    stroke("green");
    rect(75,545,450,30);

    fill("red");
    stroke("red");
    circle(550,560,50);

    fill("green");
    stroke("green");
    rect(535,85,30,450);

    fill("red");
    stroke("red");
    circle(550,60,50);

    fill("green");
    stroke("green");
    rect(70,40,455,30);

}

function take_snapshot()
{
    save('birthday.png');
}