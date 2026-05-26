
import {Router} from "express";
import {getAlumnos, getUnAlumno , postAlumnos} from "../controllers/alumnosControllers.js";

const router = Router();

//rutas
router.get("/", getAlumnos);
router.post("/", postAlumnos);
router.get("/:id", getUnAlumno);

export default router;