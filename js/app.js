//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
const min = max - 14;


//Generar un objeto de busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}





document.addEventListener('DOMContentLoaded', () => {
monstrarAutos(autos);//muestra los autos al cargar

//Llena las opciones de años
llenarSelect();
});

//Event Listener para los select de busqueda

marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e =>{
    datosBusqueda.year = Number(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = Number(e.target.value);
    filtrarAuto();
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo =Number(e.target.value);
    filtrarAuto();
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = Number(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});



//Funciones

function monstrarAutos(autos){
    limpiarHTML();//elimina el html previo

    autos.forEach(auto=>{
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.precio} - ${auto.puertas} Puertas - ${auto.color}`;

        resultado.appendChild(autoHTML);
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
    for(let i=max; i>=min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones de año al select
    }


}



//funcion que filtra en base a la busqueda

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if(resultado.length){
        monstrarAutos(resultado);
    } else{
        noResultado();
    }

}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado);
}


// Aplica los filtros
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}
    