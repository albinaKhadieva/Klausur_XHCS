const mobile = document.getElementById('contacts'); //Element-Wrapper fürs Handy-logo und Handynummer
const addresse = document.getElementById('addresse'); //Element-Wrapper fürs Addresse-logo und Addresse


//Funktionen des Evant-Handlers für Handy-logo und Addresse-logo
function zeigeMobile(){

    //Funktion zeigt eine Handynummer anstatt des Handy-logos
    mobile.innerHTML = '<p>Handy:<br> <a href="tel:+490162899xxxx">+49162899XXXX</a></p>';
}

function hideMobile(){

    //Funktion zeigt das Handy-logo anstatt der Handynummer
    mobile.innerHTML = '<img src="./bilder/contacts.svg" alt="contacts" id="contacts_img">';
}

function zeigeAddresse(){

     //Funktion zeigt eine Addresse anstatt des Addresse-logos
    addresse.innerHTML = '<p>Addresse: </p><address>Schxxxxxer Landstr. 150 22589 Hamburg</address>';
}

function hideAddresse(){

    //Funktion zeigt das Addresse-logo anstatt der Addresse
    addresse.innerHTML = '<img src="./bilder/addresse.svg" alt="addresse" id="addresse_img" >';
}