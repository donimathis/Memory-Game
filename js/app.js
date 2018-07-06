/*
 * Create a list that holds all of your cards
  array is a list
 */
// in order for the javascript and html to interact, you must use the dom
// Create a list(array) that holds all of your cards

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page //apphend chil
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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

const deck = document.querySelector('.deck');

deck.addEventListener('click',event => {
  const clickTarget = event.target;



  console.log(toggledCards);
         toggleCard(clickTarget);
         addToggleCard(clickTarget);
         if (toggledCards.length === 2) {
             checkForMatch(clickTarget);
             addMove();
             checkScore();
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
  }

function addToggleCard(clickTarget {
  toggleCards.push(clickTarget);
  console.log(toggleCard)
}


function checkForMatch ()

if (
  toggleCards[0].firstElementChild.className
  ===
  toggleCards[1].firstElementChild.className
) {
  toggledCards[0].classList.toggle('match');
  toggledCards[1].classList.toggle('match');
  toggledCards = [];

} else {
  setTimeout (() => {
    toggleCard(toggledCards[0]);
    toggleCard(toggledCards[1]);
    toggeledCards = [];
  }, 1000);

}





// use a loop to attached an event listener to each card
// it's easier to do that than individually


//add the card to a list of open cards
//step1: create a variable which holds and empty earry
//step2: push click targets into it.

let toggledCards = [];




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
