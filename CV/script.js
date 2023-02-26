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

const barraProgreso = [document.getElementsByClassName('barraProgreso')];

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
        if (informacion.gender === "male"){
                des = "desarrollador";
                gen = "o";
        } else{
                des = "desarrolladora";
                gen = "a"
        }

        if (informacion.registered.age <=16){
                edad = informacion.registered.age * 2;
        } else{
                edad = informacion.registered.age;
        }
        
        presentacion.innerHTML = "Soy " + des + " web front-end y tengo " + edad + " años."
}

//Datos aleatorios para Habilidades
for (let x = 0; x <= 3; x++){
        barraProgreso.forEach(element => {
        let porcentaje = Math.round(Math.random()*100);
        element[x].style.width =  porcentaje + "%";
        element[x].innerHTML += " " + porcentaje + "%";
    }
)};

btnMenu.addEventListener('click', function(){
        menu.classList.toggle('navBar_visible');
})