import { Router } from "express";
import { createPlateController } from "../controller/platerecognizer.controller";

const route = Router()

route.post('/plateRecognizer', createPlateController)

export default route