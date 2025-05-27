const incrementButton = document.getElementById('incrementButton');
const decrementButon = document.getElementById('decrementButton');
const counterdisplay = document.getElementById('counter');
let counter = 0;

incrementButton.addEventListener('click', function () {
    counter++;
    counterdisplay.textContent = counter;
    
});
decrementButon.addEventListener('click', function () {
    counter--;
    counterdisplay.textContent = counter;
    
});
