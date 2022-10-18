import express, { Application } from "express";
import cors from "cors"
import productsRoute from "./routes/productsRoutes";
import "dotenv/config"

const app:Application = express();

app.use(cors());
app.use(express.json());



app.use("/api/allProducts", productsRoute);


export {app};