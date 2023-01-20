export class DynamicPickup {
    private _id: number;
    private _x: number;
    private _y: number;
    private _z: number;
    private _modelid: number;
    private _type: number;
    private _worldid: number;
    private _interiorid: number;
    private _playerid: number;
    private _streamdistance: number;
    private _areaid: number;
    private _priority: number;
    static readonly STREAMER_PICKUP_SD = 200.0;
    public static readonly Pool: Array<number> = new Array();

    constructor(modelid: number, type: number, x: number, y: number, z: number, worldid = -1, interiorid = -1, playerid = -1, streamdistance = DynamicPickup.STREAMER_PICKUP_SD, areaid = -1, priority = 0) {
        this._id = samp.callNative("CreateDynamicPickup", "iifffiiifii", modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance, areaid, priority);
        DynamicPickup.Pool.push(this._id);
        this._x = x;
        this._y = y;
        this._z = z;
        this._modelid = modelid;
        this._type = type;
        this._worldid = worldid;
        this._interiorid = interiorid;
        this._playerid = playerid;
        this._streamdistance = streamdistance;
        this._areaid = areaid;
        this._priority = priority;
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

    public get modelid() {
        return this._modelid;
    }

    public get type() {
        return this._type;
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
        samp.callNative("DestroyDynamicPickup", "i", this._id);
        DynamicPickup.Pool.slice(DynamicPickup.Pool.indexOf(this._id, 1));
    }

    public static IsValidDynamicPickup(pickupid: number) {
        if (DynamicPickup.Pool.indexOf(pickupid) < 0)
            return false;
        return true;
    }
}