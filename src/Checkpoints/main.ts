const STREAMER_CP_SD = 200.0;
export class DynamicCheckpoint {
    public static readonly Pool : Array<number> = new Array();
    private _id: number;
    private _x: number;
    private _y: number;
    private _z: number;
    private _size: number;
    private _worldid: number;
    private _interiorid: number;
    private _playerid: number;
    private _streamdistance: number;
    private _areaid: number;
    private _priority: number;

    constructor(x: number, y: number, z: number, size: number, worldid: number, interiorid: number, playerid: number, streamdistance: number = STREAMER_CP_SD, areaid: number = -1, priority: number = 0 ) {
        this._id = samp.callNative("CreateDynamicCP", "ffffiiifii", x, y, z, size, worldid, interiorid, playerid, streamdistance, areaid, priority);
        this._x = x;
        this._y = y;
        this._z = z;
        this._size = size;
        this._worldid = worldid;
        this._interiorid = interiorid;
        this._playerid = playerid;
        this._areaid = areaid;
        this._priority = priority;
        this._streamdistance = streamdistance;
        DynamicCheckpoint.Pool.push(this._id);
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
        samp.callNative("DestroyDynamicCP", "i", this._id);
        DynamicCheckpoint.Pool.slice(DynamicCheckpoint.Pool.indexOf(this._id, 1));
    }

    togglePlayer(playerid: number, toggle: 0 | 1) {
        samp.callNative("TogglePlayerDynamicCP", "iii", playerid, this._id, toggle);
    }

    isPlayerIn(playerid: number) {
        let result;
        result = samp.callNative("IsPlayerInDynamicCP", "iiD", playerid, this._id, result);
        return result;
    }

    public static GetPlayerVisibleDynamicCP(playerid: number) {
        let result;
        result = samp.callNative("GetPlayerVisibleDynamicCP", "iD", playerid, result);
        return result;
    }

    public static TogglePlayerAllDynamicCPs(playerid: number, toggle: 0 | 1) {
        samp.callNative("TogglePlayerAllDynamicCPs", "ii", playerid, toggle);
    }

    public static IsValidDynamicCP(checkpointid: number) {
        if (DynamicCheckpoint.Pool.indexOf(checkpointid) < 0)
            return false;
        return true;
    }
}