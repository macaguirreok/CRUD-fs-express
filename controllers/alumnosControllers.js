
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

export const postAlumnos = (req,res) => {
    //leemos el archivo de alumnos.json
    const data = fs.readFileSync(filepath , "utf-8");
    //Convertimos el json en array de js
    const alumnos = JSON.parse(data);
    //Agregamos el nuevo alumno DESDE el cliente
    alumnos.push(req.body);// ya no lo cargamos manualmente hardcodeado como antes
    //Guardamos el array actualizado en el JSON
    fs.writeFileSync(
        filepath,
        JSON.stringify(alumnos, null, 2)
    );
    //Ahora, le respondemos al cliente:
    //(antes, en el que hice manualmente, solo llegaba hasta guardar el nuevo objeto en el json.)
    //Acá es un paso más, le respondemos al cliente: 
    res.status(201).json({ //201: recurso creado correctamente
        mensaje: "Alumno creado",
        alumno: req.body
    });
}