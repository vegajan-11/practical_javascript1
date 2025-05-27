
const greetButton = document.getElementById('greetButton');
const usernameInput = document.getElementById('username');
const greetingMessage = document.getElementById('greetingMessage');

// function to check if the input contains valid name 

function isValidName(name){
    const namePattern = /^[a-zA-Z]+$/;
return namePattern.test(name);
}

greetButton.addEventListener('click', function (){
const username = usernameInput.value.trim();

if (username === ""){
    greetingMessage.textContent = "Please enter your name.";
} else if(!isValidName(username)){
    greetingMessage.textContent = "Invalid input. Please use only letters.";
} else{
    greetingMessage.textContent = `Hello, ${username}! `;
}
});