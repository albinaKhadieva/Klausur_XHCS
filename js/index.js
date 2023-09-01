const mobile = document.getElementById('contacts');
const addresse = document.getElementById('addresse');

function zeigeMobile(){
    mobile.innerHTML = '<p>Handy:<br> <a href="tel:+4901628995842">+491628995842</a></p>';
}

function hideMobile(){
    mobile.innerHTML = '<img src="./bilder/contacts.svg" alt="contacts" id="contacts_img">';
}

function zeigeAddresse(){
    addresse.innerHTML = '<p>Addresse: </p><address>Schenefelder Landstr. 150 22589 Hamburg</address>';
}

function hideAddresse(){
    addresse.innerHTML = '<img src="./bilder/addresse.svg" alt="addresse" id="addresse_img" >';
}