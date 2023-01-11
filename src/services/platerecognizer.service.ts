import PlateRecognizerModel from '../model/plateRecognizer.schema';
import { IPlateRecognizer } from '../interface/platerecognizer.interface';
import VehicleModel from '../model/vehicle.schema';

/**
 * Crear el objeto de placa reconocida
 * @param plate 
 * @returns 
 */
const createPlateService = async (plate: IPlateRecognizer) => {
    const response = await PlateRecognizerModel.create(plate);
    sendVehicles(response.results);
    return response;
}

async function sendVehicles(results) {
    for (let index = 0; index < results.length; index++) {
        const element = results[index];
        let vehicle = new VehicleModel();
        vehicle.plate = element.plate;
        vehicle.codeRegion = element.region.code;
        vehicle.score = element.score;
        vehicle.type = element.vehicle.type;
        const response = await VehicleModel.create(vehicle);
    }
}

export { createPlateService }