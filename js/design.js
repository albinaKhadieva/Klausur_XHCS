//Funktionen, die das Design der Seite verändern

//Variablen für alle Bereichen der Seite, die verändert werden
const header = document.querySelector('header'); 
const body = document.querySelector('body');
const footer = document.querySelector('footer');

//Array von Buttons für einen Event-Handler
const buttons = document.querySelectorAll('button'); 


//Funktion
function design1(){
    header.classList.remove('design2__header');
    body.classList.remove('design2__body');
    footer.classList.remove('design2__footer');
    buttons.forEach(button => button.classList.remove('design2__button'));
    
    header.classList.add('design1__header');
    body.classList.add('design1__body');
    footer.classList.add('design1__footer');
    buttons.forEach(button => button.classList.add('design1__button'));
}

function design2(){
    header.classList.remove('design1__header');
    body.classList.remove('design1__body');
    footer.classList.remove('design1__footer');
    buttons.forEach(button => button.classList.remove('design1__button'));

    header.classList.add('design2__header');
    body.classList.add('design2__body');
    footer.classList.add('design2__footer');
    buttons.forEach(button => button.classList.add('design2__button'));
}


//Funktion, um das Seitendesign auf den ursprünglichen Zustand zurückzusetzen
function reset(){
    header.classList.remove('design1__header', 'design2__header');
    body.classList.remove('design1__body', 'design2__body');
    footer.classList.remove('design2__footer', 'design1__footer');
    buttons.forEach(button => button.classList.remove('design1__button', 'design2__button'));
}