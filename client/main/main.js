

let navBttn = document.getElementById("nav-bttn");
let navCntn = document.getElementById("nav-container");
let navBar = document.getElementById("nav-bar-3");
let testBttn = document.getElementById('test-bttn');
let testBttn2 = document.getElementById('testBoy');
let testBttn3 = document.getElementById('crit');
const fj = [
    "https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg",
    "https://brandeps.com/logo-download/H/HTML-5-logo-vector-01.svg",
    "https://brandeps.com/logo-download/J/Java-logo-vector-01.svg",
    "https://brandeps.com/logo-download/P/Python-logo-vector-01.svg",
    "https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg",
    "https://brandeps.com/logo-download/S/Swift-logo-vector-01.svg",
    "https://brandeps.com/logo-download/A/Arduino-logo-vector-01.svg",
    "https://brandeps.com/icon-download/C/Console-sql-icon-vector-01.svg",
    "https://brandeps.com/logo-download/H/Heroku-logo-vector-01.svg"
];

let animContain = document.getElementById('anim-contain');
navBar.addEventListener("transitionend",createAnimation);

navBttn.addEventListener("click",addNavClass);
let toggledNav = false;


function addNavClass(event){
    console.log("yeeeah");
        navBar.classList.add("nav-bar-anim");
        toggledNav = !toggledNav;
        
        // navCntn.classList.toggle("hidden");
}
function createAnimation(event){
    if(navBar.classList.contains("nav-bar-anim")){
        navBar.classList.toggle("nav-bar-anim");
        navBar.classList.toggle('nav-bar-anim2');
        
    }else if(navBar.classList.contains("nav-bar-anim2") && toggledNav){
        navCntn.classList.add("display-nav");
    }
}
async function createAnimationElem(){
    let anim = document.getElementById("anim-contain");
    anim.innerHTML = `
    `;
    let elementsStr = '<div class="anim-element-container">';
    let insideStuff = ``;
    for(let i = 0; i < 10; i ++){
        insideStuff += `
        <div class="element-container">
            <div class="anim-element" style="background-image:url('${fj[i]}');">
            </div>
        </div>`;
    }
    elementsStr += insideStuff;
    elementsStr += `</div>`;
    elementsStr += `<div class="anim-element-container" style="animation-delay: -12s;"> ${insideStuff} </div>`;



    anim.innerHTML = elementsStr;
    //await sleep(200);
    // anim.classList.remove("start-anim");
    // anim.classList.add('move-anim');
}
createAnimationElem();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }




 


 /////CANVAS stuff
var canvas = document.getElementById('project-drawer');

canvas.addEventListener('mouseenter',stopMove);
canvas.addEventListener('mouseleave',startMove);
startMove();
function stopMove(){

    document.body.style.overflow = 'hidden';
     window.blockMenuHeaderScroll = false;
}
function startMove(){
    document.body.style.overflow = 'visible';
    // window.blockMenuHeaderScroll = true;
}

var ctx = canvas.getContext('2d');

let halfWidth = window.innerWidth / 2;
canvas.width = window.innerWidth;
canvas.height = 600;
const projects = [
    "week-1",
    "week-2",
    "week-3",
    "week-4",
    "week-5",
    "week-6",
    "week-7",
    "week-8",
    "others",
    "sticky slime block",
    "diverse gem",

];
var windowMousePos = {x:0,y:0};

canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
	windowMousePos = new Vector(mousePos.x ,mousePos.y );
   // console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
  }, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
let fullAngle = -25;
let fullAngleMove = 0;  
function moveAngle( event ){
    fullAngleMove = event.deltaY / 50;
}

document.onwheel = moveAngle;


function clearCanvas(){
    ctx.setTransform(1,0,0,1,0,0);
	ctx.fillStyle = 'rgba(29,29,29,'+ 1 + ')';
	ctx.fillRect(0,0,canvas.width,canvas.height);
}
function drawTextEl(x,y,degree,text,color,fontSize){
    let tWidth = (fontSize / 2 * (text.length / 2));
    let tHeight = -5;
    ctx.save(); 
    ctx.translate(x,y);
    ctx.rotate(degree*Math.PI/180);
    ctx.translate(-(x + tWidth),-(y + tHeight));
    ctx.font = fontSize + "px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text,x,y);
    ctx.restore();
}

function drawPoint(x,y,size){
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(x - size / 2,y - size / 2,size,size);
    ctx.closePath();
}
function drawQuad(x,y,sizeX,sizeY){

    ctx.beginPath();
    ctx.fillRect(x,y,sizeX,sizeY);
    ctx.closePath();
}
function drawLine(p1,p2,color){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.closePath();
    ctx.stroke();
}
/**
function testFunction(p1,p2,p3){
    let inside= PointInTriangle(windowMousePos,p1,p2,p3);
    ctx.strokeStyle = (inside ? "rgb(255,0,255)" : "rgb(255,255,255)");
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();
    ctx.closePath();

    drawPoint(p2.x,p2.y,10);
    let v1 = new Vector(p1.y - windowMousePos.y,-(p1.x - windowMousePos.x));
    let v2 = new Vector((p2.y - windowMousePos.y),-(p2.x - windowMousePos.x));
    let v3 = new Vector( p3.y - windowMousePos.y, -(p3.x - windowMousePos.x));
    let p12 = new Vector(p1.x - p2.x, p1.y - p2.y);
    let p23 = new Vector(p2.x - p3.x, p2.y - p3.y);
    let p31 = new Vector(p3.x - p1.x, p3.y - p1.y);
    let d1 = v1.dotProduct(p12);
    let d2 = v2.dotProduct(p23);
    let d3 = v3.dotProduct(p31);
    drawLine(p1,windowMousePos,"rgb(0,0,255");
    let c1 = (d1 > 0 ? "rgb(255,39,39)":"rgb(39,255,39)" );
    let c2 = (d2 > 0 ? "rgb(255,39,39)":"rgb(39,255,39)" );
    let c3 = (d3 > 0 ? "rgb(255,39,39)":"rgb(39,255,39)" );
    drawTextEl(100,300,0,d1,c1);
    drawTextEl(100,330,0,d2,c2);
    drawTextEl(100,360,0,d3,c3);
    
    
}
*/
function checkBox(x,y,sizeX,sizeY,p){
    if(x - p.x > sizeX && y - p.y > sizeY) return true;
    return false;
}

function sign ( p1,  p2,  p3)
{
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function PointInTriangle ( pt,  v1,  v2,  v3)
{
    let d1, d2, d3;
    let has_neg, has_pos;

    d1 = sign(pt, v1, v2);
    d2 = sign(pt, v2, v3);
    d3 = sign(pt, v3, v1);

    has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(has_neg && has_pos);
}
function testGradStuff(x1,y1,x2,y2,boxX1,boxY1,boxSX,boxSY,col1,col2){
    ctx.beginPath();
    var grd = ctx.createLinearGradient(x1, y1, x2, y2);
    grd.addColorStop(0, col1);
    grd.addColorStop(1, col2);
    ctx.fillStyle = grd;
    ctx.fillRect(boxX1, boxY1, boxSX, boxSY);
    ctx.closePath();
}

function drawGrad(){
    ctx.beginPath();
    var grd = ctx.createLinearGradient(0, 100, 200, 0);
    grd.addColorStop(0, "rgba(29,29,29,1)");
    grd.addColorStop(1, "rgba(29,29,29,0.001)");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, halfWidth, 600);

    ctx.beginPath();
    var grd = ctx.createLinearGradient(200, 200,500, 600);
    grd.addColorStop(0, "rgba(29,29,29,1)");
    grd.addColorStop(0.5, "rgba(29,29,29,0.01)");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, halfWidth, 600);
}
let angleOffset = [];
let offsetX = 0;
let color1 = {r: 255,g: 10,b: 10, cr: 0.2,cg: 0.01,cb: 0};
let color2 = {r: 10,g: 100,b: 10, cr: 0.2,cg: 0.01,cb: 0};
let color3 = {r: 10,g: 10,b: 255, cr: 0.2,cg: 0.01,cb: 0};
let cPos1 = {x:0,y:300,cx:0,cy:0};
let cPos2 = {x:300,y:300,cx:0,cy:0};
let cPos3 = {x:500,y:300,cx:0,cy:0};


function updatePos(pos){
    let addCx = Math.random() * 0.1 - 0.05;
    let addCy = Math.random() * 0.1 - 0.05;
    pos.cx += addCx;
    pos.cy += addCy;
    pos.x += pos.cx;
    pos.y += pos.cy;
    for(key in pos){
        if(key === "x" || key === "y"){
            if(pos[key] < 0){
                pos[key] = 0;
            } else if(pos[key] > 1000) {
                pos[key] = 1000;
            }
        } else {
            if(pos[key] > 1){
                pos[key] = 1;
            } else if(pos[key] < -1){
                pos[key] = -1;
            }
        }
    }
}

function gradStuff(){
    testGradStuff(cPos1.x,cPos1.y,cPos2.x,cPos2.y,0,0,1000,600,`rgba(${color1.r},${color1.g},${color1.b},1)`, `rgba(${color2.r},${color2.g},${color2.b},1)`);
    //testGradStuff(300,300,cPos3.x,cPos3.y,300,0,600,600,`rgba(${color2.r},${color2.g},${color2.b},1)`,`rgba(${color3.r},${color3.g},${color3.b})`);
    randomizeColors();
    updatePos(cPos1);
    updatePos(cPos2);
    updatePos(cPos3);
}
function randomizeColors(){
    colorUpdate(color1);
    colorUpdate(color2);
    colorUpdate(color3);
}
function colorUpdate(color){
    let addCR = Math.random() * 0.1 - 0.05;
    let addCG = Math.random() * 0.1 - 0.05;
    let addCB = Math.random() * 0.1 - 0.05;
    color.cr += addCR;
    color.cg += addCG;
    color.cb += addCB;
    color.r += color.cr;
    color.g += color.cg;
    color.b += color.cb;
    for(key in color){
        if(key === "r" || key === "g" || key === "b"){
            if(color[key] > 255){
                color[key] = 255;
            } else if(color[key] < 0){
                color[key] = 0;
            }
        } else {
            if(color[key] > 1){
                color[key] = 1;
            } else if(color[key] < -1){
                color[key] = -1;
            }
        }
    }
}

drawMenu();
function drawMenu(){


    fullAngle += fullAngleMove;
    fullAngleMove = fullAngleMove * 0.9;
    if(Math.abs(fullAngleMove) < 0.01){
        fullAngleMove = 0.05;
    }
    clearCanvas();

   
    
    for(let i = 0; i < 10; i ++){
        let p = new Vector(Math.cos(toRadians(5 * i + fullAngle)) * (halfWidth / 2), 300 + Math.sin(toRadians(5 * i + fullAngle)) * (halfWidth / 2));
        let sDis = squaredDis(p,windowMousePos);
        
        let fSize = 40;
        if(sDis < 1000){
            sDis = 1050 - sDis;
            fSize = Math.max((sDis / 10),40);
        }
        let addRot = 0;
            //addRot = (sDis / 1000 - 10);
        let degree = 5 * i + fullAngle;
        drawTextEl(Math.cos(degree*Math.PI/180) * (halfWidth / 2),Math.sin(degree*Math.PI/180) * (halfWidth / 2) + 300, degree,projects[i],"rgb(255, 39, 39)", fSize);
        //drawTextEl(500,500, degree,projects[i],"rgb(255, 39, 39)", fSize);
        
        // drawPoint(p.x,p.y,10);
        //
    }
    //testFunction(new Vector(400,400),new Vector(500,500),new Vector(500,400));
    
    drawGrad();
    drawPoint(windowMousePos.x,windowMousePos.y);
    gradStuff();
    requestAnimationFrame(drawMenu);
    offsetX += 0.1;
    

}

//UTILITY stuff

function squaredDis(pos1,pos2){
    return (pos1.x - pos2.x) * (pos1.x - pos2.x) + (pos1.y - pos2.y) * (pos1.y - pos2.y);
}

function rotatePoint(point,center,angle){

	angle = toRadians(angle);
	var cx = center.x;
	var cy = center.y;
	var p = new Vector(point.x - cx,point.y - cy);
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var xNew = p.x * c - p.y * s;
	var yNew = p.x * s + p.y * c;
	p.x = xNew + cx;
	p.y = yNew + cy;
	return p;

}

function toRadians(degrees){
	var value = degrees * Math.PI / 180;
	return value;
}