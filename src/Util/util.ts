export function IsPlayerConnected(playerid: number) {
    let result = samp.callNative("IsPlayerConnected", "i", playerid);
    return result;
}

