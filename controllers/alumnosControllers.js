
import fs from "fs";// Importa el módulo fs de Node.js 
//..sirve para leer y escribir archivos en el servidor. En mi caso,
//..para manejar profesores.json como si fuera mi "base de datos".

const filepath = "./alumnos.json"; //ruta del archivo json, donde está ubicado.

export const getAlumnos = (req, res) => { //Creamos y exportamos una función, llamada getAlumnos.
    //req, es el objeto request. Contiene la petición del cliente.
    //res, es el objeto response. Sirve para responderle al cliente.
    //primero tenía que traer los datos en JSON, del archivo alumnos.json
    const data = fs.readFileSync(filepath , "utf-8");
    //convertimos la data de alumnos en json, en objetos java script
    const alumnos = JSON.parse(data); //ahora es un arrat de JS
    //ahora, en vez de mostrarlo manualmente como haciamos antes,
    //lo va a mostrar express:
    res.json(alumnos); //express, le responde al cliente y le manda el array alumnos,
    //pero como JSON, automaticamente convierte el array de JS, a JSON.
    //es el stringify, que hacía antes manualmente.
}