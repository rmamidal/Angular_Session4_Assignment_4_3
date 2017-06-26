// importing Interface and 2 functions.
import {IVehicle, vehicleDetails, vehicleSpeed} from './module'

// Consuming Interface.
let hondaCity: IVehicle = {type:'Four Wheeler', name:'HondaCity', model:'2017', speed: 300} 

// Consuming Function1.
vehicleDetails(hondaCity);

// Consuming Function2.
vehicleSpeed(hondaCity);