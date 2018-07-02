
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

  let chosenNumber = [i];
  console.log(chosenNumber);
  localStorage.setItem("theCard", chosenNumber );
  document.getElementById("yourCard").innerHTML = localStorage.getItem("theCard");
}
