const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function(){

    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Congratulations on learning Practical Javascript!";
    paragraphContainer.appendChild(newParagraph);
});