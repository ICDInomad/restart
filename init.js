import express from "express";
import {home} from "./controllers/homeController";

const app = express();
const PORT = 3000;

const handleListening = () => console.log(`Listening on ${PORT}`);

app.get("/",home);

app.listen(PORT,handleListening);