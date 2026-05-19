import fs from "fs";

const path = "alumnos.json";

const data = fs.readFileSync( path, "utf-8");

const alumnos = JSON.parse(data); //ya tengo los alumnos en array de objetos js

//ahora creo el alumno que quiero agregar

const alumno = { 
    id: 1,
    nombre: "Macarena",
    edad: 28
} 

//Buscamos si ya existe

const alumnoExistente = alumnos.find( a =>
    a.id === alumno.id
);

if(alumnoExistente){
    console.log("El alumno ya existe")
}else{

    // Una vez creamos el alumno ---> esto después se lo hace desde una VISTA
// lo agregamos al array de alumnos

alumnos.push(alumno);

//ahora guardamos esto que tenemos en js, en el archivo .json

fs.writeFileSync ( path, JSON.stringify(alumnos, null, 2));

console.log("Alumno añadido exitosamente");


}

