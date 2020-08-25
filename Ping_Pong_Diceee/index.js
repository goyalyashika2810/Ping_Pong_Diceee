
function playGame()
{
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomImage1 = "Images/dice" + randomNumber1 +".png";
	document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

	var randomNumber2 = Math.floor(Math.random() * 6) + 1;
	var randomImage2 = "Images/dice" + randomNumber2 + ".png";
	document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

	if(randomNumber1 > randomNumber2)
	{
		document.querySelector("h1").innerHTML="🚩Play 1 Wins!";
	}
	else if(randomNumber2 > randomNumber1)
	{
		document.querySelector("h1").innerHTML="Play 2 Wins! 🚩";
	}
	else
	{
		document.querySelector("h1").innerHTML="Draw!";
	}
}

document.querySelector("button").addEventListener("click", playGame);
