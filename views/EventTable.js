document.getElementById("Btn").addEventListener("click",test);

function test()
{
    console.log("Single Click");
    alert("Rutvi Rupani");
}

document.getElementById("Btn2").addEventListener("dblclick",()=> {
    console.log("Double Click");
    test();
})

document.getElementById("Btn3").addEventListener("contextmenu",(e)=>{
    // e.preventDefault();
    console.log("Right Click");
    test();
})

document.getElementById("Btn4").addEventListener("mousedown",()=> {
    console.log("Mouse Down");
    test();
})

let x = 0;
let y = 0;
let z = 0;
function myMoveFunction() {
  document.getElementById("demo1").innerHTML = z+=1;
}

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = x+=1;
  }
  
  function myOverFunction() {
    document.getElementById("demo3").innerHTML = y+=1;
  }

  function myLeaveFunction() {
    document.getElementById("demo4").innerHTML = x+=1;
  }

  function myOutFunction() {
    document.getElementById("demo5").innerHTML = y+=1;
  }

  function mouseDown() {
    document.getElementById("Btn5").style.fontSize = "20px" ;
  }
  
  function mouseUp() {
    document.getElementById("Btn6").style.color = "blue";
  }

document.getElementById("myDIV").addEventListener("wheel", wheeleve);

function wheeleve() {
  this.style.fontSize = "20px";
}

document.getElementById("detailsID").addEventListener("toggle",togEx);

function togEx()
{
  alert("onToggle Event called");
}

function selEx()
{
  console.log("onSelect event occurred");
  alert("onSelect event occurred");
}

let ex=0;
function scrollEx()
{
  document.getElementById("demo").innerHTML = ex+= 1;
}

// attaching addEventListener for keydown
function keydn()
{
  document.addEventListener('keydown', (event) => {
  var keyName = event.key;
  var keyCode = event.code;
  // alert(`Keydown: The key pressed is ${keyName} and its code value is ${keyCode}`);
  document.getElementById("txt").innerHTML = "KeyPressed  : "+keyName + ", Code : "+keyCode;
}, false);

}

function keyprs()
{
  document.addEventListener('keypress', (event) => {
  var keyName = event.key;
  var keyCode = event.code;
  // alert(`Keydown: The key pressed is ${keyName} and its code value is ${keyCode}`);
  document.getElementById("txt2").innerHTML = "KeyPressed  : "+keyName + ", Code : "+keyCode;
}, false);

}

function keyup()
{
  document.addEventListener('keyup', (event) => {
  var keyName = event.key;
  var keyCode = event.code;
  // alert(`Keydown: The key pressed is ${keyName} and its code value is ${keyCode}`);
  document.getElementById("txt3").innerHTML = "KeyPressed  : "+keyName + ", Code : "+keyCode;
}, false);

}

const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});


document.getElementById("drag").addEventListener("drag", ()=>{
  document.getElementById("d1").innerHTML = "Text is Dragged";
})

document.getElementById("dragent").addEventListener("dragenter", ()=>{
  document.getElementById("d2").innerHTML = "Text is Entered";
})

document.getElementById("drop").addEventListener("drop", ()=>{
  document.getElementById("d3").innerHTML = "Text is Dropped";
})

const image = document.getElementById("image");
image.onload = () => {
  document.getElementById("loadmsg").style.color="red";
  document.getElementById("loadmsg").innerHTML += "<p>loaded!</p>";
};

function reload() {
  image.src = "favicon144.png";
}
