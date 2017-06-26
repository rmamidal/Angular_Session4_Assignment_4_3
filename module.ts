/**
 *  File module.
 */

// Exporting interface.
export interface IVehicle {
    type: string; // proprty type
    name: string; // proprty name
    model: string; // proprty model
    speed: number; // proprty Speed
}

// Exporting function vehicleDetails.
export function vehicleDetails(vehicle: IVehicle) {
  console.log(`Type of Vehicle: ${vehicle.type},
    Name of Vehicle: ${vehicle.name}, 
    Model of Vehicle: ${vehicle.model}`);
}

// Exporting function vehicleSpeed.
export function vehicleSpeed(vehicle: IVehicle) {
  console.log(`${vehicle.name} with model ${vehicle.model} 
    drives at speed of ${vehicle.speed} Kmph`);
}
