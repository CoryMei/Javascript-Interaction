var yourFortune = ["YOU DON’T REALLY CARE",

"UNQUESTIONABLY",

  "YOUR ACTIONS WILL IMPROVE THINGS",

"TRUST YOUR INSTITUTION",

"DON’T WASTE YOUR TIME",

"YOU’ BE HAPPY YOU DID",

"THIS WILL AFFECT OTHER’S VIEWS ON YOU",

"GENTLE PERSISTENCE WILL PAY OFF",

"DON’T MAKE A BET ON THIS",

"FACING IT WITH A MORE RELAXED ATTITUDE",

"BETTER TO WAIT",

"ACCEPT A CHANGE TO YOUR ROUTINE"];

var colors = ["red","purple","blue","green","orange","brown","grey","pink","silver"];

var sizes = ["30px","40px","50px","60px"];

var weights = [500, 600, 700, 800, 900, 1000];

halfButton.addEventListener("click", halfNumber);

fortuneButton.addEventListener("click", fortune);

function halfNumber (){
  var halfInputNum = document.getElementById("halfInput").value;
  var halfOutputNum = halfInputNum / 2;
  alert("Half of " + halfInputNum + " is " + halfOutputNum + " ~");
  console.log(halfNumber);
}

function fortune () {
  var name = document.getElementById("fortuneInput").value;
  var fortuneRandom = yourFortune[Math.floor(Math.random() * yourFortune.length)];
  fortuneOutput.innerHTML = name + ", " + fortuneRandom;
  restyle();
}

function restyle (){
  var colorRandom = colors[Math.floor(Math.random() * colors.length)];
  fortuneOutput.style.color = colorRandom;
  var sizeRandom = sizes[Math.floor(Math.random() * sizes.length)];
  fortuneOutput.style.fontSize = sizeRandom;
  var weightRandom = weights[Math.floor(Math.random() * weights.length)];
  fortuneOutput.style.fontWeight = weightRandom;
}
