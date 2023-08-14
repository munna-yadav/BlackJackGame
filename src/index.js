function getRandomCard() {
  let sum = 0;
  isAlive = true;
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber == 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function rendergame() {
  document.getElementById("card").textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    document.getElementById("card").textContent += cards[i] + " ";
  }
  document.getElementById("sum").textContent = "sum: " + sum;
  if (sum <= 20) {
    document.getElementById("message").textContent =
      "do you want to take another card😀 ";
    isAlive = true;
  } else if (sum === 21) {
    document.getElementById("message").textContent =
      "whoo! you got the balckjack!!😀 ";
    isAlive = false;
  } else {
    document.querySelector("#message").textContent = "you are out of game!";
    isAlive = false;
  }
}

function startgame() {
  let firstcard = getRandomCard();
  let secondCardd = getRandomCard();
  cards = [firstcard, secondCardd];
  sum = firstcard + secondCardd;
  rendergame();
}

function newcard() {
  if (isAlive == true) {
    let new_card = getRandomCard();
    sum += new_card;
    cards.push(new_card);
    rendergame();
  }
}
