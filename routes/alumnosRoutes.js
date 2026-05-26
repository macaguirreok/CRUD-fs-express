
import {Router} from "express";
import {getAlumnos, getUnAlumno , postAlumnos, deleteAlumno} from "../controllers/alumnosControllers.js";

const router = Router();

//rutas
router.get("/", getAlumnos);
router.post("/", postAlumnos);
router.get("/:id", getUnAlumno);
router.delete("/:id", deleteAlumno);

export default router;