document.addEventListener("DOMContentLoaded", ()=>{

  const cards = document.querySelectorAll(".memory-card");
  //hace una lista de todas las cartas y las almacena
  
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        
  
      return;
    } 
      
      secondCard = this;
     
      checkForMatch();
  
  
  }
  
  function checkForMatch() {
    let isMatch = firstCard.dataset.framework ===
    secondCard.dataset.framework
  
    isMatch ? disableCards() : unflipCards(); 
    //ternary o conditional operator, te deja escribir un if o ifelse o else en una sola linea
  
    
  }
  
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
   secondCard.removeEventListener("click", flipCard);

   resetBoard();
  }
  function unflipCards(){

    lockBoard = true;
    setTimeout(()=> {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
     }, 1500);
  
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    
  }
  (function shuffle(params) {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() *12)
      card.style.order = randomPos;
    });
    
  })(); //al encerrar todo entre parentesis, esta funcion para revolver las cartas se llama inmediatamente, por lo tanto
  //las cartas siempre arrancan en un orden diferente.
  
  cards.forEach(card=>card.addEventListener("click", flipCard));

})