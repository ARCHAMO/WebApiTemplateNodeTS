import { Router } from "express";
import { createVehicleController } from "../controller/vehicle.controller";

const route = Router()

route.post('/vehicle', createVehicleController)

export default route