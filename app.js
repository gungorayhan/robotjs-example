const robot = require('robotjs');
// https://robotjs.io/docs/syntax#keys
const mouse = () => {
    var mouse = robot.getMousePos();
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);



    robot.scrollMouse(50, 0);

    setTimeout(function () {
        robot.scrollMouse(50, 0);
        let mouseXY = robot.getMousePos();
        console.log("Mouse is at x:" + mouseXY.x + " y:" + mouseXY.y);
    }, 5000);
}

// mouse()

const mouseToogle=()=>{
   

setTimeout(function()
{
    robot.mouseToggle("down");
    robot.mouseToggle("up");

}, 2000);
}

// mouseToogle()


const mouseDrag = ()=>{
    robot.moveMouse(0, 0);
robot.mouseToggle("down");
robot.dragMouse(500, 500);
robot.mouseToggle("up");

}

mouseDrag()
//-----------------------------------------------------------------

const screen = () => {
    //Get a 100x100 screen capture starting at 0, 0.

    var img = robot.screen.capture(0, 0, 500, 500);

    console.log(img.width)

    //Get pixel color at 50, 50.
    var hex = img.colorAt(88, 122);
    console.log(hex);
}


// screen()

//--------------------------------------------------
const mouseExapmleApp = () => {

    // Speed up the mouse.
    robot.setMouseDelay(2);

    var twoPI = Math.PI * 2.0;
    var screenSize = robot.getScreenSize();
    var height = (screenSize.height / 2) - 10;
    var width = screenSize.width;

    for (var x = 0; x < width; x++) {
        y = height * Math.sin((twoPI * x) / width) + height;
        robot.moveMouse(x, y);
    }

}

// mouseExapmleApp()

//---------------------------------
const keyBoardApp = () => {

 setTimeout(()=>{
       // Type "Hello World".
       robot.typeString("Hello World");

       // Press enter.
       robot.keyTap("enter");
 },5000)

}

// keyBoardApp()



const screenApp=()=>{
    
// Get mouse position.
var mouse = robot.getMousePos();

// Get pixel color in hex format.
var hex = robot.getPixelColor(mouse.x, mouse.y);
console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
}
// screenApp()