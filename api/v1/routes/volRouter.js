import { Router } from "express";
import {getVols, getVol, deleteVol, createVol, update, reserverVol} from "../controllers/volController.js";

const router = Router();

router.get("/",getVols);
router.post("/",createVol);
router.put("/",update);
router.get("/:id",getVol);
router.put("/:id/reserver/:reservations",reserverVol);
router.delete("/:id",deleteVol)
export default router;