let NASA_URL = "https://images-api.nasa.gov/search?q=";

let buscarCampo = document.getElementById("inputBuscar");
let buscarBoton = document.getElementById("btnBuscar");
let contenedor = document.getElementById("contenedor")

buscarBoton.addEventListener("click", function(e){
    fetch(NASA_URL + buscarCampo.value)
    .then(res => res.json())
    .then(datos =>{
        console.log(datos)
        let addContent =""

        for(let i =0; i < datos.collection.items.length;i++){
            if(datos.collection.items[i].links){
            let imagen = datos.collection.items[i].links[0].href
            let titulo = datos.collection.items[i].data[0].title
            let descripcion = datos.collection.items[i].data[0].description
            let date = datos.collection.items[i].data[0].date_created
            
            addContent += `
            <div class="nasa-container">
            <img class="nasa-imagen"src="${imagen}">
            <p class="nasa-titulo"><b>${titulo}</b></p>
            <div id="nasa-d-container">
                <p class="nasa-description">${descripcion}</p>
            </div>
            <p class="nasa-date">${date}</p>
            </div>
            `
            }

        } contenedor.innerHTML = addContent
    })
});