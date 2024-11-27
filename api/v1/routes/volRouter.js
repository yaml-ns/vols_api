import { Router } from "express";
import {getVols, getVol, deleteVol, createVol, update} from "../controllers/volController.js";

const router = Router();

router.get("/",getVols);
router.post("/",createVol);
router.put("/",update);
router.get("/:id",getVol);
router.delete("/:id",deleteVol)
export default router;