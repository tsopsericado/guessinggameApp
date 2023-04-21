let output = document.getElementById('outputText'); 
let gespoint = document.getElementById('enterBtn');
let guesagain = document.getElementById('againBtn');

let answer = Math.floor(Math.random() * 100);  

function checkNumber(){
   let input = document.getElementById("userInput").value;
   if(input == answer){
    output.innerHTML = "guess right" + "," + "guess was" + answer 
    output.style.color = "blue"
   }
   else if(input>answer && input<100){
    output.innerHTML = "bet too high" + "it should be a number between 1 and 100" + "start back" ;
   }
   else if (input < answer && input>1){
    output.innerHTML = "sorry you lost" + "," + "try again";
   }
   else if(input < 1){
       output.innerHTML = "Higher, too low your bet";
   } 
   else if (isNaN(input)){
       output.innerHTML = "That is not enter a number";
   }
   else{
    output.innerHTML = "Low, it has to be between 1 and 100";

   }

}
 gespoint.addEventListener("click", checkNumber);
 guesagain.addEventListener('click',function(){
  location.reload();
 })
