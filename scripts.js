// for coding quiz
var counter = document.getElementsByClassName("timetest");
var startButton = document.getElementsByClassName("start");
var startCountDown = document.getElementsByClassName("startCountDown");
var QBox = document.getElementsByClassName("question");
var submit = document.getElementsByClassName("submitButton");
var choice = document.getElementsByClassName("choice");
var numHolder = 3;
var elapsed = 0;
// console.log(choice.length);
console.log(choice);

// console.log(startCountDown[0].textContent);
var start = false;
var ready = false;
var score = document.getElementsByClassName("paratest");
var qNo = 0;
var q1Answered = false;
var q2Answered = false;
var q3Answered = false;
var q4Answered = false;

startButton[0].addEventListener("click", function(){
    //alert("Click"); //works
    start = true;
    counter[0].setAttribute("class", "hide");
    startButton[0].setAttribute("class", "hide");
    changeNumber();
    
})//working

for(i = 0; i < choice.length; i++){
    choice[i].addEventListener("click", function(){
        console.log("click");//works    
    })
    console.log(choice[i].value);    
}
function changeNumber(){
    if(start){
        var interval = setInterval(function(){
            elapsed++;
            startCountDown[0].textContent = numHolder - elapsed;
            console.log(startCountDown[0].textContent);
            
            if(startCountDown[0].textContent === "0"){
                clearInterval(interval);
                ready = true;
                numHolder = 60;
                startTest();
            }
            if(startCountDown[0].textContent === "0" && ready === true){
                clearInterval(interval);
            }
            // console.log(elapsed);
        },1000);
    }
}
function startTest(){
    if(start === true && ready === true){
       // console.log("start the test!");//works
       if(qNo === 0){
           elapsed = 0;
        }
       QBox[qNo].setAttribute("class", "show");
       //remove previous question visibility here
       changeNumber(); 

    }
}




for(i = 0; i < submit.length; i++){
    submit[i].addEventListener("click", function(){
        // alert("click!");
        if(choice[2]){
            q1Answered = true;
        }
        else if(choice[0] || choice[1] ||choice[3]){
            elapsed = elapsed + 5;
        }
        if(choice[5]){
            q2Answered = true;
        }
        else if(choice[4] || choice[6] ||choice[7]){
            elapsed = elapsed + 5;
        }
        if(choice[8]){
            q3Answered = true;
        }
        else if(choice[9] || choice[10] ||choice[11]){
            elapsed = elapsed + 5;
        }
        if(choice[14]){
            q4Answered = true;
        }
        else if(choice[12] || choice[13] ||choice[15]){
            elapsed = elapsed + 5;
        }
    })
}
