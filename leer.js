
import fs from "fs";

const path = "alumnos.json";

//traigo los datos existentes desde el json

const data = fs.readFileSync(path, "utf-8"); //acá está como texto, lo tengo que pasar a js para poder mostrarlo

const alumnos = JSON.parse(data);

console.log(alumnos);

