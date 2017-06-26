"use strict";
exports.__esModule = true;
// importing Interface and 2 functions.
var module_1 = require("./module");
// Consuming Interface.
var hondaCity = { type: 'Four Wheeler', name: 'HondaCity', model: '2017', speed: 300 };
// Consuming Function1.
module_1.vehicleDetails(hondaCity);
// Consuming Function2.
module_1.vehicleSpeed(hondaCity);
