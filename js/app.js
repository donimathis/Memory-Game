//Global scopes
const deck = document.querySelector('.deck');
let moves = 0; //the moves counter
let time = 0; //set the clock variable
let matched = 0;
let clockOff = true;//whether the clock is on or off.
let toggledCards = [];
let clockId;

time = 121;
displayTime();
moves = 16
checkScore();

writeModalStats();
toggleModal();

function writeModalStats() {
    const timeStat = document.querySelector('.modal__time');
    const clockTime = document.querySelector('.clock').innerHTML;
    const movesStat = document.querySelector('.modal__moves');
    const starsStat = document.querySelector('.modal__stars');
    const stars = getStars();

    timeStat.innerHTML = `Time = ${clockTime}`;
    movesStat.innerHTML = `Moves = ${moves}`;
    starsStat.innerHTML = `Stars = ${stars}`;
}

function getStars() {
    stars = document.querySelectorAll('.stars li');
    starCount = 0;
    for (star of stars) {
        if (star.style.display !== 'none') {
            starCount++;
        }
    }
    return starCount;
}

document.querySelector('.modal__cancel').addEventListener('click', () => {
    toggleModal();
});

document.querySelector('.modal__replay').addEventListener('click', replayGame);

document.querySelector('.restart').addEventListener('click', resetGame);

document.querySelector('.modal__replay').addEventListener('click', resetGame);

const TOTAL_PAIRS = 8;
if (matched === TOTAL_PAIRS) {
  gameOver();
}


function gameOver() {
  stopClock();
  writeModalStats();
  toggleModal();
}


function replayGame() {
  resetGame();
  toggleModal();
}

function resetMoves() {
  moves = 0;
  document.querySelector('.moves').innerHTML = moves;
}

function resetStars() {
  stars = 0;
  const starList = document.querySelectorAll('.stars li');
  for (star of starList) {
    star.style.display = 'inline';
  }
}


function resetGame()  {
  resetClockandTime();
  resetMoves();
  shuffleDeck();
}

function resetClockandTime() {
  stopClock();
  clockOff = true;
  time = 0;
  displayTime();
}

function resetCards() {
  const cards = document. querySelectorAll('.deck li');
  for(let card of cards) {
    card.className = 'card';
  }
}

// * Create a list that holds all of your cards
//  array is a list
 //*/
// in order for the javascript and html to interact, you must use the dom
// Create a list(array) that holds all of your cards

//moves function
function addMove() {
  moves++
  const movesText = document.querySelector('.moves');
  movesText.innerHTML = moves;
}

//stars
function checkScore() {
  if(moves === 16 || moves === 24
  ){ removeStar();

  }
}

function hideStar() {
  const starlist = document.querySelectorAll('.stars li');
  for (star of starlist) {
    if (star.style.display !== 'none') {
        star.style.display = 'none';
        break;
    }
  }
}

hideStar();
hideStar();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page //apphend chil
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffleDeck () {
  const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
  console.log('Cards to shuffle', cardsToShuffle);
  const shuffledCards = shuffle(cardsToShuffle);
  console.log('Shuffled cards', shuffledCards);
}
shuffleDeck();


function shuffleDeck () {
  const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
  const shuffledCards = shuffle(cardsToShuffle);
  for (card of shuffledCards) {
    deck.appendChild(card);
  }
}
shuffleDeck();


function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


//step 1. all the cards have a "card" class
//step 2. use querySelector to store all valules in a variable
//step 3. the variable is called "deck" to represent the deck of cards
// what is a querySelectorAll?


deck.addEventListener('click',event => {
  const clickTarget = event.target;
if (isClickValid(clickTarget)){
  if(clockOff) {
    startClock();
    clockOff = false;
  }
}

  console.log(toggledCards);
         toggleCard(clickTarget);
         addToggleCard(clickTarget);
         if (toggledCards.length === 2) {
             checkForMatch(clickTarget);
             addMove(); //moves to increment after cards are toggled
             checkScore(); //check stars, call function everytime i complete move.
         }
     }
 });




  function isClickValid(clickTarget) {
    return (
        clickTarget.classList.contains('card') &&
        !clickTarget.classList.contains('match') &&
        toggledCards.length < 2 &&
        !toggledCards.includes(clickTarget)
    );
}



function.toggleCard(card) {
    card.classList.toggle('open');
    card.classList.toggle('show');
=======
  if (clickTarget.classList.contains('card') && toggledCards.length < 2) {
    toggleCard(clickTarget);
    addToggleCard(clickTarget);
    if(toggledCards.length === 2) {

    }
  }
});

function.toggleCard(clickTarget) {
    clickTarget.classList.toggle('open');
    clickTarget.classList.toggle('show');
  }

function addToggleCard(clickTarget {
  toggleCards.push(clickTarget);
  console.log(toggleCard)
}


function checkForMatch () {
if (
  toggleCards[0].firstElementChild.className ===
  toggleCards[1].firstElementChild.className
) {
  toggledCards[0].classList.toggle('match');
  toggledCards[1].classList.toggle('match');
  toggledCards = [];
  matched++;
} else {
  setTimeout (() => {
    toggleCard(toggledCards[0]);
    toggleCard(toggledCards[1]);
    toggeledCards = [];
  }, 1000);

}




function startClock() {
  time = 0;
  clockId= setInterval(() => {
    time++;
    displayTime();
    console.log(time);
  }, 1000);
}
startClock();

function displayTime() {
  const clock = document.querySelector('.clock');
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (seconds < 10 ) {
    clock.innerHTML = `${minutes}:0${seconds}`;
  } else {
    clock.innerHTML = `${minutes}:${seconds}`;
  };
}

function stopClock() {
  clearInterval(clockId);
}

stopClock();

function toggleModal() {
  const modal = document.querySelector('.modal__backgroud');
  modal.classList.toggle('hide');
}
toggleModal(); //open modal
toggleModal();//off

// use a loop to attached an event listener to each card
// it's easier to do that than individually


//add the card to a list of open cards
//step1: create a variable which holds and empty earry
//step2: push click targets into it.





/*
 * set up the event listener for a card. If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
