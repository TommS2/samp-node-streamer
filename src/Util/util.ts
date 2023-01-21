export function IsPlayerConnected(playerid: number) {
    let result = samp.callNative("IsPlayerConnected", "i", playerid);
    return result;
}

export function IsValidVehicle(vehicleid: number) {
    let response;
    response = samp.callNative("IsValidVehicle", "i", vehicleid);
    return response;
}