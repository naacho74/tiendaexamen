//Funcion para llenar dinamicamente
//la tienda
// poner el array fuera de la funcion para reutilizar la funcion. 
let productosBD = [

    { nombre: "Batimovil a escala", precio: 400000, foto: "", descripcion: "Batimovil a escala de la ultima pelicula" },
    { nombre: "Camiseta Batman", precio: 80000, foto: "", descripcion: "Camiseta original DC" },
    { nombre: "Gorra Batman", precio: 50000, foto: "", descripcion: "Gorra original DC" },
    { nombre: "Bati termo DC", precio: 35000, foto: "", descripcion: "Termo para bati chocolate" },
    { nombre: "Batmav v Superman", precio: 300000, foto: "", descripcion: "Imagen a escala de la pelicula Batman v Superman" },
    { nombre: "Bati morral Totto", precio: 80000, foto: "", descripcion: "Bolso original DC" },
    { nombre: "Silla Gaming Batman", precio: 2000000, foto: "", descripcion: "Silla comoda y original DC" },
    { nombre: "caja de comics Batman", precio: 300000, foto: "", descripcion: "comics Batman originales" },
    { nombre: "Bati caja sorpresa", precio: 250000, foto: "", descripcion: "Caja sorpresa con productos de batman" },
    { nombre: "Bati lonchera totto", precio: 80000, foto: "", descripcion: "Lonchera para llevar tus bati alimentos" } // comas que separaban los objetos del arreglo

]

console.log(productosBD)
function llenarTienda(productos) {



    //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

    //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
    
    let fila = document.getElementById("fila")// agregar id a la fila, para decirle a la funcion donde va pintar 

    //2. Necesito recorrer un arreglo
    productos.forEach(function (producto) {  // foreach por forEach  y el auxiliar producto

        //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
        let columna = document.createElement("col-4")
        columna.classList.add("col-md-12")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card","h-100")  // optimizar codigo juntando las clases 
        
        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top","p-3","h-100")
        imagen.src = producto.foto

        let separador = document.createElement("hr") // es createElement
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold","text-center","mx-3")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center","text-muted")
        precio.textContent = producto.precio

        let botonAmpliarInfo = document.createElement("button")
        botonAmpliarInfo.setAttribute("type", "button")
        botonAmpliarInfo.classList.add("btn","btn-outline-dark","mx-3","mb-3")
        botonAmpliarInfo.textContent = "Ver producto"


        //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
        //QUE ACABAMOS DE CREAR EN NUESTRA BASE
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonAmpliarInfo)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)



    })



}


llenarTienda(productosBD)   // llamar la funcion
