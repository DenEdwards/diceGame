var heading = document.querySelector("h1");
var dice1 = document.querySelector("img.img1");
var dice2 = document.querySelector("img.img2");
var rand1;
var rand2;

function changeDice(){
  rand1 = (Math.floor(Math.random() *6)+1);
  rand2 = (Math.floor(Math.random() *6)+1);
  console.log("rand1:"+rand1);
  console.log("rand2:"+rand2);
}

changeDice();
dice1.src="images/dice"+rand1+".png";
dice2.src="images/dice"+rand2+".png";

if(rand1 > rand2){
  heading.innerHTML = "Player 1 Wins!";
}else if(rand2 > rand1){
  heading.innerHTML = "Player 2 Wins!";
}else if(rand2 === rand1){
  heading.innerHTML = "It's A Tie!";
}
