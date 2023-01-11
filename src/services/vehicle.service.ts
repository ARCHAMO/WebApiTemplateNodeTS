import VehicleModel from '../model/vehicle.schema';
import { IVehicle } from '../interface/vehicle.interface';

/**
 * Crear el objeto vehiculo
 * @param plate 
 * @returns 
 */
const createVehicleService = async (vehicle: IVehicle) => {
    const response = await VehicleModel.create(vehicle);
    return response;
}

export { createVehicleService }