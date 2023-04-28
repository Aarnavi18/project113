function preload()
{

}
function setup()
{
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();

}
function draw()
{
image(video,100,80,300,240);
fill("red");
stroke("red");
circle(50,50,70);
circle(450,50,70);
circle(50,350,70);
circle(450,350,70);
fill("green");
stroke("green");
rect(85,40,330,20);
rect(85,340,330,20);
rect(40,85,20,230);
rect(440,85,20,230);
}
function takesnap()
{
save("mypic.png");
}