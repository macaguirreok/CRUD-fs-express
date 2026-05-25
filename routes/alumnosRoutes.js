
import {Router} from "express";
import {getAlumnos} from "../controllers/alumnosControllers.js";

const router = Router();

//rutas
router.get("/", getAlumnos);
//router.post("/", postAlumnos);

export default router;