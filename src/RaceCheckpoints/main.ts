import { IsPlayerConnected } from "../Util/util";

const STREAMER_RACE_CP_SD = 200.0;
export class DynamicRaceCheckpoint {
    public static readonly Pool: Array<number> = new Array();
    private _id: number;
    private _x: number;
    private _y: number;
    private _z: number;
    private _nextx: number;
    private _nexty: number;
    private _nextz: number;
    private _size: number;
    private _worldid: number;
    private _interiorid: number;
    private _playerid: number;
    private _streamdistance: number;
    private _areaid: number;
    private _priority: number;

    constructor(x: number, y: number, z: number, nextx: number, nexty: number, nextz: number, size: number, worldid: number, interiorid: number, playerid: number, streamdistance: number = STREAMER_RACE_CP_SD, areaid: number = -1, priority: number = 0) {
        this._id = samp.callNative("CreateDynamicRaceCP", "ffffffiiiiiii", x, y, z, nextx, nexty, nextz, size, worldid, interiorid, playerid, streamdistance, areaid, priority);
        this._x = x;
        this._y = y;
        this._z = z;
        this._nextx = nextx;
        this._nexty = nexty;
        this._nextz = nextz;
        this._size = size;
        this._worldid = worldid;
        this._streamdistance = streamdistance;
        this._interiorid = interiorid;
        this._playerid = playerid;
        this._areaid = areaid;
        this._priority = priority;
        DynamicRaceCheckpoint.Pool.push(this._id);
    }

    public get id() {
        return this._id;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    public get z() {
        return this._z;
    }

    public get nextx() {
        return this._nextx;
    }

    public get nexty() {
        return this._nexty;
    }

    public get nextz() {
        return this._nextz;
    }

    public get size() {
        return this._size;
    }

    public get worldid() {
        return this._worldid;
    }

    public get interiorid() {
        return this._interiorid;
    }

    public get playerid() {
        return this._playerid;
    }

    public get streamdistance() {
        return this._streamdistance;
    }

    public get areaid() {
        return this._areaid;
    }

    public get prority() {
        return this._priority;
    }

    destroy() {
        samp.callNative("DestroyDynamicRaceCP", "i", this._id);
        DynamicRaceCheckpoint.Pool.splice(DynamicRaceCheckpoint.Pool.indexOf(this._id, 1));
    }

    togglePlayer(playerid: number, toggle: 0 | 1) {
        if (!IsPlayerConnected(playerid))
            return false;
        samp.callNative("TogglePlayerDynamicRaceCP", "iii", playerid, this._id, toggle);
    }

    isPlayerIn(playerid: number) {
        if (!IsPlayerConnected(playerid))
            return false;
        let result;
        result = samp.callNative("IsPlayerInDynamicRaceCP", "iiD", playerid, this._id, result);
        return result;
    }

    public static GetPlayerVisibleDynamicRaceCP(playerid: number) {
        if (!IsPlayerConnected(playerid))
            return false;
        let result;
        result = samp.callNative("GetPlayerVisibleDynamicRaceCP", "iD", playerid, result);
        return result;
    }

    public static TogglePlayerAllDynamicRaceCPs(playerid: number, toggle: 0 | 1) {
        if (!IsPlayerConnected(playerid))
            return false;
        samp.callNative("TogglePlayerAllDynamicRaceCPs", "ii", playerid, toggle);
    }

    public static IsValidDynamicRaceCP(checkpointid: number) {
        if (DynamicRaceCheckpoint.Pool.indexOf(checkpointid) < 0)
            return false;
        return true;
    }
}