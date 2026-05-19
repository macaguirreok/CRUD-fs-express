import fs from "fs";

const path = "alumnos.json";

const data = fs.readFileSync( path , "utf-8");

//convertir el array en json, a js

const alumnos = JSON.parse(data);

// Declaro el id del alumno que quiero eliminar

const idEliminar = 1;

// Utilizo el filter para NO incluir el id que quiero eliminar, en el nuevo array

const alumnosNuevo = alumnos.filter( alumno => alumno.id !== idEliminar);

// Verificamos si la longitud del array cambió,
//si no cambió es porque no se eliminó ningún estudiante, porque ya no existía
//si es que si cambió, es porque si existía un alumno con ese id que
//se quiere eliminar, y si se eliminó:

if(alumnos.length === alumnosNuevo.length){
    console.log("Alumno no encontrado")
}else{
    //si entra acá, si se eliminó y ahora tenemos que guardar el nuevo array
    //en el alumnos.json en formato json

    fs.writeFileSync(
        path,
        JSON.stringify( alumnosNuevo , null , 2)
    );

    console.log("Alumno eliminado");

}

