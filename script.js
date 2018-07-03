
window.onload = function startTheSlide(){

  let spinner = document.getElementById("numberSpinner");

  //creates the 10 cards you can choose from
  for(i=1; i<11; i++){
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class","slideNumber");
    cardDiv.setAttribute("id","slide" + [i]);
    cardDiv.setAttribute("onclick", "toResults("+[i]+")");
    if(i !== 1){ //makes sure we se the first card when the page loads
      cardDiv.setAttribute("style", "display: none");
    }
    let cardP = document.createElement("p");
    let cardNum = document.createTextNode([i]);
    cardP.appendChild(cardNum);
    cardDiv.appendChild(cardP);
    spinner.appendChild(cardDiv);
  }
};

//sets a starting number for the carousel when we start pushing the buttons
let slideIndex = 1;
showDivs(slideIndex);

function next(n) {
    showDivs(slideIndex += n);
  }

//shows the cards //more or less the same code you can find on w3schools for slides
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slideNumber");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  x[slideIndex-1].style.display = "flex";
}


//Show the results
function toResults(i){
  let result = document.getElementById("result");
  result.setAttribute("style", "display: flex");

  //hides the carousel
  let numberCarousel = document.getElementById("carouselWhole");
  numberCarousel.setAttribute("style", "display: none");

  let chosenNumber = i;

  //places the right number on the card the user choose
  let resultCard = document.getElementById("yourCard");
  let resultP = document.createElement("p");
  resultP.setAttribute("id","resultP");
  resultP.setAttribute("style","display: none");
  let resultText = document.createTextNode(chosenNumber);
  resultP.appendChild(resultText);
  resultCard.appendChild(resultP);
}

function showCard(){
  //shows the chosen number
  let theResult = document.getElementById("resultP");
  theResult.setAttribute("style","display: flex");
  //changes the background to white
  let resultDiv = document.getElementById("yourCard");
  resultDiv.setAttribute("style","background: white");
  //hides the chas logo
  let img = document.getElementById("logo");
  img.setAttribute("style","display:none");
}
