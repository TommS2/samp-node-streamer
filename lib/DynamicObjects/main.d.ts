export declare class DynamicObject {
    private _id;
    private _x;
    private _y;
    private _z;
    private _rx;
    private _ry;
    private _rz;
    private _modelid;
    private _worldid;
    private _interiorid;
    private _playerid;
    private _streamdistance;
    private _drawdistance;
    private _areaid;
    private _priority;
    static Pool: Array<number>;
    constructor(modelid: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, worldid?: number, interiorid?: number, playerid?: number, streamdistance?: number, drawdistance?: number, areaid?: number, priority?: number);
    get id(): number;
    get x(): number;
    get y(): number;
    get z(): number;
    get rx(): number;
    get ry(): number;
    get rz(): number;
    get modelid(): number;
    get worldid(): number;
    get interiorid(): number;
    get playerid(): number;
    get streamdistance(): number;
    get drawdistance(): number;
    get areaid(): number;
    get priority(): number;
    destroy(): void;
    getPosition(): any;
    setPosition(x: number, y: number, z: number): void;
    getRotation(): any;
    setRotation(rx: number, ry: number, rz: number): void;
    move(x: number, y: number, z: number, speed: number, rx?: number, ry?: number, rz?: number): void;
    stop(): void;
    isMoving(): any;
    attachToCamera(playerid: number): void;
    attachToObject(attachtoid: number, offsetx: number, offsety: number, offsetz: number, rx: number, ry: number, rz: number, syncrotation?: number): void;
    attachToPlayer(playerid: number, offsetx: number, offsety: number, offsetz: number, rx: number, ry: number, rz: number): void;
    attachToVehicle(vehicleid: number, offsetx: number, offsety: number, offsetz: number, rx: number, ry: number, rz: number): void;
    setPlayerToEdit(playerid: number): void;
    isMaterialUsed(materialindex: number): any;
    removeMaterial(materialindex: number): void;
    getMaterial(materialindex: number, modelid: number, txdname: string, texturename: string, materialcolor: number, maxtxdname?: number, maxtexturename?: number): any;
    setMaterial(materialindex: number, modelid: number, txdname: string, texturename: string, materialcolor?: number): void;
    isMaterialTextUsed(materialindex: number): any;
    removeMaterialText(materialindex: number): void;
    getMaterialText(materialindex: number, text: string, materialsize: number, fontface: string, fontsize: number, bold: number, fontcolor: number, backcolor: number, textalignment: number, maxtext?: number, maxfontface?: number): boolean;
    setMaterialText(materialindex: number, text: string, materialsize: number, fontface?: string, fontsize?: number, bold?: number, fontcolor?: number, backcolor?: number, textalignment?: number): void;
    static IsValidDynamicObject(objectid: number): boolean;
}