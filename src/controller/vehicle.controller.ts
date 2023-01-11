import { createVehicleService } from '../services/vehicle.service'
import { Response, Request } from 'express'

/**
 * 
 * @param req 
 * @param res 
 */
const createVehicleController = async (req: Request, res: Response) => {
    const { body } = req;
    const vehicle = await createVehicleService(body);
    res.send({ vehicle })
}

/**
 * 
 * @param req 
 * @param res 
 */
const vehicleFindByIdController = async (req: Request, res: Response) => {
    const { body } = req;
    res.send({ body })
}

export { createVehicleController, vehicleFindByIdController }