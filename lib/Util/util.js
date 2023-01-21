"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidVehicle = exports.IsPlayerConnected = void 0;
function IsPlayerConnected(playerid) {
    var result = samp.callNative("IsPlayerConnected", "i", playerid);
    return result;
}
exports.IsPlayerConnected = IsPlayerConnected;
function IsValidVehicle(vehicleid) {
    var response;
    response = samp.callNative("IsValidVehicle", "i", vehicleid);
    return response;
}
exports.IsValidVehicle = IsValidVehicle;
