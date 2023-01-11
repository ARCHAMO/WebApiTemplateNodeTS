import "dotenv/config";
import express from "express";
import cors from "express";

// Definimos las rutas del WebApi
import plateRecognizerRoute from './router/platerocognizer.router';
import vehicleRoute from './router/vehicle.router';

import dbInit from "./db/mongo";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(plateRecognizerRoute);
app.use(vehicleRoute);

dbInit().then();
app.listen(port, () => console.log(`Listo por el puerto ${port}`));