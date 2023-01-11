import { createPlateService } from '../services/platerecognizer.service'
import { Response, Request } from 'express'

/**
 * 
 * @param req 
 * @param res 
 */
const createPlateController = async (req: Request, res: Response) => {
    const { body } = req;
    const plateRecognizer = await createPlateService(body);
    res.send({ plateRecognizer })
}

/**
 * 
 * @param req 
 * @param res 
 */
const plateFindByIdController = async (req: Request, res: Response) => {
    const { body } = req;
    res.send({ body })
}

export { createPlateController, plateFindByIdController }