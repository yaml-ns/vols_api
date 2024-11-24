import http from "http"
import path from "path";
import dotenv from "dotenv";
import express from "express"
import { fileURLToPath } from "url";
import apiRouter from "./api/routes/apiRouter.js";

const app = express();
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static("./client"));
app.use(express.json())
app.use("/api",apiRouter);

const serveur = http.createServer(app);

const PORT = process.env.APP_PORT || 3000
const HOST = process.env.APP_HOST || "127.0.0.1"
serveur.listen(PORT,HOST,()=>{
    console.log(`Serveur en route sur ${HOST}:${PORT}`);
})
