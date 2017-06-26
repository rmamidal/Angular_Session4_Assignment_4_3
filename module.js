"use strict";
/**
 *  File module.
 */
exports.__esModule = true;
// Exporting function vehicleDetails.
function vehicleDetails(vehicle) {
    console.log("Type of Vehicle: " + vehicle.type + ",\n    Name of Vehicle: " + vehicle.name + ", \n    Model of Vehicle: " + vehicle.model);
}
exports.vehicleDetails = vehicleDetails;
// Exporting function vehicleSpeed.
function vehicleSpeed(vehicle) {
    console.log(vehicle.name + " with model " + vehicle.model + " \n    drives at speed of " + vehicle.speed + " Kmph");
}
exports.vehicleSpeed = vehicleSpeed;
