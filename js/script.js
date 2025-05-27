const menu = document.getElementById('menu');
const toggleButton = document.getElementById("menuButton");


toggleButton.addEventListener('click', function () {
    if(menu.style.display === 'none'){
        menu.style.display ='block';
    } else{
        menu.style.display = 'none';
    }

});