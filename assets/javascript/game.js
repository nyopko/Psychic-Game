//// The varibles 

var computerChoices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var points = 0;
var loses =0;
var test = [];
var lives = 10;

///// Picking up the user's key inputs //////

document.onkeyup = function(event) {

//// Picking a random letter from the array /////

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


  //// Assigning the user's guess 

  var userGuess = event.key;

  //// Making the lives, wins, loses, and guesses show up /////

  test.push(userGuess);
  document.getElementById("gusses").innerHTML = test;
  document.getElementById("header").innerHTML = points;
  document.getElementById("loses").innerHTML = loses;
  document.getElementById("remaining").innerHTML = lives;


  
  ///// ***************** THE GAME **************** ///////

    //////// Win / Win conditions /////////

    if (userGuess === computerGuess) {
        points++;
        test = [];
        lives = 10;

    }

    ///////// Losses / Lose conditions /////////

    if (userGuess !== computerGuess){
        lives--;
        
    }

    /////// Game over defintion / conditions //////////

    if (lives === 0){
        loses++;
        test = [];
        lives= 10;
    }


};