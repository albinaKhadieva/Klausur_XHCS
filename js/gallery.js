const galleryWrapper = document.querySelector(".gallery"); //Element-Wrapper für Bilder
const inputAnzahl = document.getElementById("anzahl"); //Input für Anzahl
const inputSubmit = document.getElementById("submit"); // Submit-button


//Funktion, die abhängig von der eingegebenen Anzahl Bilder anzeigt
function zeigeImages(anzahl) { 
    galleryWrapper.innerHTML = '';
    if(anzahl >= 1 && anzahl <= 20){
        for (let i = 1; i <= anzahl; i++) {
            let figure = document.createElement("figure");
            let titleName = `Katze ${i}`;
            figure.setAttribute("title", titleName);
            figure.innerHTML = `<img src="./bilder/cat${i}.jpg" alt="bild${i}">
            <figcaption>Katze ${i}</figcaption>`;
            galleryWrapper.appendChild(figure);
        }
    } else {
        galleryWrapper.innerHTML = '<div id="message">Die Anzahl muss 1 bis 20 sein. Versuch noch mal!</div>';
    }
    
}


inputSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    zeigeImages(inputAnzahl.value);
});