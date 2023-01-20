export declare const MapIconStyle: {
    MAPICON_LOCAL: number;
    MAPICON_GLOBAL: number;
    MAPICON_LOCAL_CHECKPOINT: number;
    MAPICON_GLOBAL_CHECKPOINT: number;
};
export declare class MapIcon {
    static readonly Pool: Array<number>;
    private _id;
    private _x;
    private _y;
    private _z;
    private _color;
    private _worldid;
    private _interiorid;
    private _playerid;
    private _streamdistance;
    private _style;
    private _areaid;
    private _priority;
    constructor(x: number, y: number, z: number, color: number, worldid?: number, interiorid?: number, playerid?: number, streamdistance?: number, style?: number, areaid?: number, priority?: number);
    get id(): number;
    get x(): number;
    get y(): number;
    get z(): number;
    get color(): number;
    get worldid(): number;
    get interiorid(): number;
    get playerid(): number;
    get streamdistance(): number;
    get style(): number;
    get areaid(): number;
    get priority(): number;
    destroy(): void;
    static IsValidDynamicMapIcon(iconid: number): boolean;
}
