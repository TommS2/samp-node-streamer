const STREAMER_MAP_ICON_SD = 200.0;
export const MapIconStyle = {
    MAPICON_LOCAL: 0,
    MAPICON_GLOBAL: 1,
    MAPICON_LOCAL_CHECKPOINT: 2,
    MAPICON_GLOBAL_CHECKPOINT: 3
}
export class MapIcon {
    public static readonly Pool: Array<number> = new Array();

    private _id: number;
    private _x: number;
    private _y: number;
    private _z: number;
    private _color: number;
    private _worldid: number;
    private _interiorid: number;
    private _playerid: number;
    private _streamdistance: number;
    private _style: number;
    private _areaid: number;
    private _priority: number;

    constructor(x: number, y: number, z: number, color: number, worldid: number = -1, interiorid: number = -1, playerid: number = -1, streamdistance: number = STREAMER_MAP_ICON_SD, style: number = MapIconStyle.MAPICON_LOCAL, areaid: number = -1, priority: number = 0) {
        this._id = samp.callNative("CreateDynamicMapIcon", "fffiiiifiii", x, y, z, color, worldid, interiorid, playerid, streamdistance, style, areaid, priority);
        this._x = x;
        this._y = y;
        this._z = z;
        this._color = color;
        this._worldid = worldid;
        this._interiorid = interiorid;
        this._playerid = playerid;
        this._streamdistance = streamdistance;
        this._style = style;
        this._areaid = areaid;
        this._priority = priority;
        MapIcon.Pool.push(this._id);
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

    public get color() {
        return this._color;
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

    public get style() {
        return this._style;
    }

    public get areaid() {
        return this._areaid;
    }

    public get priority() {
        return this._priority;
    }

    destroy() {
        samp.callNative("DestroyDynamicMapIcon", "i", this._id);
        MapIcon.Pool.slice(MapIcon.Pool.indexOf(this._id, 1));
    }

    public static IsValidDynamicMapIcon(iconid: number) {
        if (MapIcon.Pool.indexOf(iconid) < 0)
            return false;
        return true;
    }
}