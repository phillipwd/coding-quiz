// for coding quiz
var counter = document.getElementsByClassName("timetest");
var startButton = document.getElementsByClassName("start");
var startCountDown = document.getElementsByClassName("startCountDown");
var numHolder = 5;
var elapsed = 0;
console.log(startButton);//works
console.log(startCountDown[0].textContent);
var start = false;

startButton[0].addEventListener("click", function(){
    //alert("Click"); //works
    start = true;
    changeNumber();
    
})//working

function changeNumber(){
    if(start){
        var interval = setInterval(function(){
            elapsed++;
            startCountDown[0].textContent = numHolder - elapsed;
            console.log(startCountDown[0].textContent);
            
            if(startCountDown[0].textContent === "0"){
                clearInterval(interval);
                startTest();
            }
            console.log(elapsed);
            
        },1000);
    }
}
function startTest(){
    if(start === true || startCountDown[0].textContent === "0"){
        console.log("start the test!");
        
    }
}