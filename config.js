function openPlayerConfig(event){
    const selectedPlayerId = event.target.dataset.playerid;
    editedPlayer = +selectedPlayerId;
    playerConfigOverlayElement.style.display = 'block'; 
    backdropElement.style.display = 'block' ;
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none'; 
    backdropElement.style.display = 'none' ;
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function updateScore() {
    if (currentPlayer === 'X') {
        playerXScore.textContent = `X: ${parseInt(playerXScore.textContent.split(":")[1].trim()) + 1}`;
    } else {
        playerOScore.textContent = `O: ${parseInt(playerOScore.textContent.split(":")[1].trim()) + 1}`;
    }
}

function savePlayerConfig(event){
       event.preventDefault();
      
       const formData = new FormData(event.target);
       const enteredPlayername = formData.get('playername').trim();    // '     santosh kumar   ' ->  'santosh kumar'
       
       if(enteredPlayername === '')
       {
           event.target.firstElementChild.classList.add('error');
           errorsOutputElement.textContent = 'Please enter a valid name!';
           return;
       }
       
    const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer +'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    /*
    if(editedPlayer === 1)
    {
       players[0].name = enteredPlayername
    }
    else{
        players[1].name = enteredPlayername;
    } 
    */
    players[editedPlayer - 1].name = enteredPlayername;
    closePlayerConfig();

}