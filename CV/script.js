//Elementos HTML
const btnMenu = document.querySelector('.botonNav');
const menu = document.querySelector('.navBar');
const favIcon = document.getElementById('favIcon');

const pfp = document.getElementById('pfp');
const nombreYApellido = document.getElementById('nomYApe');

const presentacion = document.getElementById('presentacion');

const correo = document.getElementById('correo');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');

const barraProgreso = document.getElementsByClassName('barraProgreso');

function generadorPorcentaje(){
        let porcentaje = Math.round(Math.random()*100);
        return porcentaje + "%";
}

function generadorEdad(e){
        if(e < 18){
                edad = e + 18;
        } else{
                edad = e;
        }
        return edad + " años";
}

const requestURL = 'https://randomuser.me/api/?nat=us';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
        const informacion = request.response.results[0];
        //Información de la persona
        pfp.src = informacion.picture.large;
        nombreYApellido.innerHTML = informacion.name.first + " " + informacion.name.last;
        correo.innerHTML = informacion.email;
        telefono.innerHTML = informacion.phone;
        direccion.innerHTML = informacion.location.street.name + " " + informacion.location.street.number;
        favIcon.href = informacion.picture.thumbnail;

        //Presentación
        if (informacion.gender === "female"){
                gen = "a ";
        } else{
                gen = " ";
        }

        presentacion.innerHTML = "Soy desarrollador" + gen + "web front-end y tengo " + generadorEdad(informacion.registered.age);
}

Array.from(barraProgreso).forEach(function(element) {
        let porcentaje = generadorPorcentaje();
        element.style.width = porcentaje;
        element.innerHTML += porcentaje;
        }
);

btnMenu.addEventListener('click', function(){
        menu.classList.toggle('navBar_visible');
})