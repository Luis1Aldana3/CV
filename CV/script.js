//Elementos HTML
const btnMenu = document.querySelector('.botonNav');
const menu = document.querySelector('.navBar');

//Información de la persona
const nombreYApellido = document.getElementById('nomYApe');
const pfp = document.getElementById('pfp');
const correo = document.getElementById('correo');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');

const requestURL = 'https://randomuser.me/api/?inc=picture,name,email,phone,location';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
        const informacion = request.response;
        pfp.src = informacion.results[0].picture.large;
        nombreYApellido.innerHTML = informacion.results[0].name.first + " " + informacion.results[0].name.last;
        correo.innerHTML = informacion.results[0].email;
        telefono.innerHTML = informacion.results[0].phone;
        direccion.innerHTML = informacion.results[0].location.street.name + " " + informacion.results[0].location.street.number;
}

btnMenu.addEventListener('click', function(){
        menu.classList.toggle('navBar_visible');
})