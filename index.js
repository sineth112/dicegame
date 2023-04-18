var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceimage = "dice" + randomNumber + ".png";
var randomImageSrc = "images/" + randomDiceimage;
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSrc);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdDiceimage2 = "dice" + randomnumber2 + ".png";
var randomImagesrc2 = "images/" + randomdDiceimage2;
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImagesrc2);

if (randomNumber>randomnumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Win";
}

else if(randomNumber<randomnumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 2 Win";
    
}

else {
    document.querySelector("h1").innerHTML =" ❌ Draw";
}