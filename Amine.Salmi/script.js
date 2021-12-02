function numberFx(){
    return Math.floor(Math.random()*(100-1)+1);
}
var randomNum = numberFx();
console.log(randomNum);


var Remaining = 10;
var score = 0;


function amine(){
    Remaining--;
    score++;

    var text = "lives " + Remaining;
    
    document.getElementById("remaining").innerHTML= text;
    var guess = document.getElementById("input").value;

    if(Remaining == 0){
        document.getElementById("btn").style.display = "none";
        document.getElementById("input").style.display = "none";
        document.getElementById("pgain").style.display = "block";
    }else if (guess == randomNum && score <= 2) {
        document.getElementById("para").innerHTML = "congratulations " + score + " tries";
    }else if(guess == randomNum && score >2){
        document.getElementById("para").innerHTML = "congratulations " + score + " tries";
    }else if(guess > randomNum){
        document.getElementById("para").innerHTML = "Big";
    }else if(guess < randomNum){
        document.getElementById("para").innerHTML = " Small";
    }else {
        document.getElementById("para").innerHTML = "erreur";
    }  
}




