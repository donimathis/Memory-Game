

let card = document.getElementsByClassName("card");
let cards = [...card]
let openedCards = [];
let interval;
let moves = 0;
let counter = document.querySelector(".moves");
let matchedCard = document.getElementsByClassName("match");
let starsList = document.querySelectorAll(".stars li");
let closeicon = document.querySelector(".close");
let modal = document.getElementById("popup1")
const stars = document.querySelectorAll(".fa-star");
const deck = document.getElementById("card-deck");

// shuffledarray
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


//reLoad Window
window.onload = startGame();


//startGame
function startGame() {
    cards = shuffle(cards);
    let cardDeck = cards.length;
    for (let i = 0; i < cardDeck; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    let starsMove = stars.length;
    for (let i= 0; i < starsMove; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
    //reset timer
    second = 0;
    minute = 0;
    hour = 0;
    let timer = document.querySelector(".timer");
    timer.innerHTML = `mins 0 secs 0`;
    clearInterval(interval);
}


// @description toggles open and show class to display cards
let displayCard = function () {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// openedCards
function cardOpen() {
    openedCards.push(this);
    var duo = openedCards.length;
    if(duo === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            cardMatched();
        } else {
            cardUnmatched();
        }
    }
};


 //cardsMatch
function cardMatched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    openedCards = [];
}


// Unmatched Cards
function cardUnmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },600);
}


// DisableCards
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}


// Enable Cards
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(let i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}


// Move Counter
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }

    if (moves > 8 && moves < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }
}


//GameTimer
var second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
function startTimer(){
    interval = setInterval(() => {
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second % 60 === 0){
            minute++;
            second=0;
        }
        if(minute % 60 === 0){
            hour++;
            minute = 0;
        }
    },600);
}


// @description congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add("show");

        // declare star rating variable
        var starRating = document.querySelector(".stars").innerHTML;

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        //closeicon on modal
        closeModal();
    };
}



function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}



document.getElementById('play-again').addEventListener('click', function() {
  modal.style.display = "none";
    startGame();
});


for (let i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulations);
};
