song="";
song2="";
leftx=0;
lefty=0;
rightx=0;
righty=0;

function preload()
{
    song= loadSound("music1.mp3");
    song2=loadSound("music2.mp3");
}

function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet( video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log( 'PoseNet is initialized');
}


function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
    song2.play();
    song.setVolume(1);
    song.rate(1);
    song2.setVolume(1);
    song2.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        leftx= results[0].pose.leftWrist.x;
        lefty= results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftx + "Left Wrist Y = " + lefty);

        rightx= results[0].pose.rightWrist.x;
        righty= results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightx + "Right Wrist Y = " + righty);

    }
}
