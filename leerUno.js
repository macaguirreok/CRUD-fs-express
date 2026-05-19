 //Leer uno, se usa find

 import fs from "fs";

 const path = "alumnos.json";

 //leemos el archivo
 const data = fs.readFileSync( path, "utf-8");

 //convertimos el json en array

 const alumnos = JSON.parse(data);

 // ID del alumno que queremos buscar:

 const idBuscado = 1;

 //Buscamos el alumno

 const alumnoBuscado = alumnos.find( alumno => alumno.id == idBuscado );

 //mostramos el alumno buscado

 if(alumnoBuscado){
     console.log("El alumno buscado es: " , alumnoBuscado);
 }else{
    console.log("Alumno no encontrado");
 }

