import { Router } from "express";
import {getVols, getVol, deleteVol, createVol} from "../controllers/volController.js";

const router = Router();

router.get("/",getVols);
router.post("/",createVol);
router.get("/:id",getVol);
router.delete("/:id",deleteVol)
export default router;