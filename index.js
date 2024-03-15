const datos = fetch("./archivo.json")

datos.then((res) =>res.json()).then((datos) => {

    const claves = Object.keys(datos)

    claves.forEach((clave) => {
        //console.log(clave)
        console.log(clave, datos[clave])
    })

})