const url = 'https://randomuser.me/api/?results=10';
let divDatos = document.getElementById('user-data');

const cargarDatos = async ()=>{
    try {
        const res = await fetch(url);
        const datos = await res.json();
        divDatos.innerHTML += `<h1>Datos Usuario</h1>`;
        datos.results.forEach(element => {
        
            divDatos.innerHTML +=  `<img src="${element.picture.medium}" alt="Girl in a jacket" height="150">
                                    <p> ${element.name.first} ${element.name.last} </p>
                                    <p> ${element.email}</p>
                                    <p> ${element.cell}</p><br>`
            
        });
    } catch (error) {
        console.log(error.name)
    }
}

(() =>{
    cargarDatos();
})();