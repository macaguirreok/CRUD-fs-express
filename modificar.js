
import fs from "fs";

const path = "alumnos.json";

// leemos el archivo

const data = fs.readFileSync(path, "utf-8");

// Lo convertimos en array de java script

const alumnos = JSON.parse(data);

//ID del alumno a modificar

const idAlumno = 2;

//Objeto nuevo, con los datos a reemplazar en el viejo objeto alumno de id 2

const alumnoNuevo = {
    id: 2,
    nombre: "Luciano Modificado",
    edad:27
}

//Variable para saber si existía
let encontrado = false;

//Recorremos el array con map
const nuevosAlumnos = alumnos.map( alumno => {
    //si coincide el id
    if(alumno.id == idAlumno){

        encontrado  = true;

        return alumnoNuevo;
    }

    //Si no coincide, lo dejamos al original
    return alumno
})

//Verificamos si existía
if(!encontrado){
    console.log("Alumno no encontrado");
}else{
    //Guardamos en el nuevo array, en el json (porque el alumno si fue encontrado, y modificado)
    fs.writeFileSync(
        path, 
        JSON.stringify(nuevosAlumnos, null , 2)
    );

    console.log("Alumno modificado");
}