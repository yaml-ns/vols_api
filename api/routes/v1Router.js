import { Router} from "express";
import cocktailRouter from "../v1/routes/volRouter.js";
const v1Router = Router();

v1Router.use("/vols", cocktailRouter)

export default v1Router;