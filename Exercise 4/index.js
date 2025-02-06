 // Define the correct code
 const SECRET_CODE = "168";
 let chancesRemaining = 3; // Initial chances
 
 // Get UI elements
 const passwordInput = document.getElementById("passwordInput");
 const checkButton = document.getElementById("checkButton");
 const tryAgainButton = document.getElementById("tryAgainButton");
 
 const passwordView = document.getElementById("passwordView");
 const lostView = document.getElementById("lostView");
 const wonView = document.getElementById("wonView");
 
 const instructionLabel = document.getElementById("instructionLabel");
 const lostMessage = document.createElement("p");
 
 // Style lost message
 lostMessage.style.color = "white";
 lostMessage.style.fontSize = "1.5rem";
 lostMessage.style.fontWeight = "bold";
 lostMessage.style.marginTop = "1rem";
 lostView.appendChild(lostMessage);
 
 // Function to show/hide elements
 function show(element) {
     element.style.display = "block";
 }
 
 function hide(element) {
     element.style.display = "none";
 }
 
 // Check entered code
 function checkCode() {
     const enteredCode = passwordInput.value;
 
     if (enteredCode === SECRET_CODE) {
         // Win scenario
         hide(passwordView);
         hide(lostView);
         show(wonView);
     } else {
         // Reduce chances
         chancesRemaining--;
 
         if (chancesRemaining >0){
             hide(passwordView);
             show(lostView);
             lostMessage.innerHTML = `Wrong code! Try again. (${chancesRemaining} chances left)`;
         } else {
             // Out of chances = Game Over
             hide(passwordView);
             show(lostView);
             lostMessage.innerHTML = "YOU LOST!";
             checkButton.disabled = true;
         }
     }
 }
 
 // Refresh to reset game
 function resetGame() {
     location.reload(); // Reload page to reset everything
 }
 
 checkButton.addEventListener("click", checkCode);
 tryAgainButton.addEventListener("click", resetGame);
 