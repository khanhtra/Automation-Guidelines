let client;
let server;
let clientId;
let serverMagic;

let blue = false;
let red = true;

function changefont()
{
   
  clientId = 5;  
  url = "Processing client request..." + clientId;

  serverMagic = 5 * 2;
  server = "Server magic, Client Id is now: " + serverMagic;
  console.log(server);

  alert("Don't leave me...")
  window.location = "http://www.amazon.com";

}

function clickRed()
{
    red = true;
    console.log("Red is Clicked");

}

function clickBlue()
{
    blue = true;
    console.log("Blue is Clicked");

}

function purpleAppears(){
    console.log(red);
    console.log(blue);
    if (red && blue){
        document.getElementById("purple").className = "purple";
    }
    else {
        alert("Follow the instructions ya doofus")
    }
}