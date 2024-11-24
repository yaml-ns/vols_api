import http from "http"
import dotenv from "dotenv";
import express from "express"
import apiRouter from "./api/routes/apiRouter.js";

const app = express();
dotenv.config()


app.use(express.json())
app.use("/api",apiRouter);

const serveur = http.createServer(app);

const PORT = process.env.APP_PORT || 3000
const HOST = process.env.APP_HOST || "127.0.0.1"
serveur.listen(PORT,HOST,()=>{
    console.log(`Serveur en route sur ${HOST}:${PORT}`);
})
