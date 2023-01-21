import { IsPlayerConnected, IsValidVehicle } from "../Util/util";

const STREAMER_OBJECT_SD = 300.0;
const STREAMER_OBJECT_DD = 0.0;
export class DynamicObject {
    private _id: number;
    private _x: number;
    private _y: number;
    private _z: number;
    private _rx: number;
    private _ry: number;
    private _rz: number;
    private _modelid: number;
    private _worldid: number;
    private _interiorid: number;
    private _playerid: number;
    private _streamdistance: number;
    private _drawdistance: number;
    private _areaid: number;
    private _priority: number;
    private _vehicleid: number;

    public static Pool: Array<number> = new Array();
    constructor(modelid: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, worldid: number = -1, interiorid: number = -1, playerid: number = -1, streamdistance: number = STREAMER_OBJECT_SD, drawdistance: number = STREAMER_OBJECT_DD, areaid: number = -1, priority: number = 0) {
        this._id = samp.callNative("CreateDynamicObject", "iffffffiiiffii", modelid, x, y, z, rx, ry, rz, worldid, interiorid, playerid, streamdistance, drawdistance, areaid, priority);
        this._x = x;
        this._y = y;
        this._z = z;
        this._rx = rx;
        this._ry = ry;
        this._rz = rz;
        this._modelid = modelid;
        this._worldid = worldid;
        this._interiorid = interiorid;
        this._playerid = playerid;
        this._streamdistance = streamdistance;
        this._drawdistance = drawdistance;
        this._areaid = areaid;
        this._priority = priority;
        DynamicObject.Pool.push(this._id);
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

    public get rx() {
        return this._rx;
    }

    public get ry() {
        return this._ry;
    }

    public get rz() {
        return this._rz;
    }

    public get modelid() {
        return this._modelid;
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

    public get drawdistance() {
        return this._drawdistance;
    }

    public get areaid() {
        return this._areaid;
    }

    public get priority() {
        return this._priority;
    }

    public get vehicleid() {
        return this._vehicleid;
    }

    destroy() {
        samp.callNative("DestroyDynamicObject", "i", this._id);
        DynamicObject.Pool.splice(DynamicObject.Pool.indexOf(this._id), 1);
    }

    getPosition() {
        let x, y, z;
        return [x, y, z] = samp.callNative("GetDynamicObjectPos", "iFFF", this._id, x, y, z);
    }

    setPosition(x: number, y: number, z: number) {
        samp.callNative("SetDynamicObjectPos", "fff", x, y, z);
    }

    getRotation() {
        let rx, ry, rz;
        return [rx, ry, rz] = samp.callNative("GetDynamicObjectRot", "iFFF", this._id, rx, ry, rz);
    }

    setRotation(rx: number, ry: number, rz: number) {
        samp.callNative("SetDynamicObjectRot", "ifff", rx, ry, rz);
    }

    move(x: number, y: number, z: number, speed: number, rx: number = -1000.0, ry: number = -1000.0, rz: number = -1000.0) {
        samp.callNative("MoveDynamicObject", "ifffffff", this._id, x, y, z, speed, rx, ry, rz);
    }

    stop() {
        samp.callNative("StopDynamicObject", "i", this._id);
    }

    isMoving() {
        let result;
        result = samp.callNative("IsDynamicObjectMoving", "iD", this._id, result);
        return result;
    }

    attachPlayerCameraTo(playerid: number) {
        if (!IsPlayerConnected(playerid))
            return false;
        samp.callNative("AttachCameraToDynamicObject", "ii", playerid, this._id);
    }

    attachToObject(attachtoid: number, offsetx: number, offsety: number, offsetz: number, rx: number, ry: number, rz: number, syncrotation: number = 1) {
        samp.callNative("AttachDynamicObjectToObject", "iiffffffi", this._id, attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation);
    }

    attachToPlayer(playerid: number, offsetx: number, offsety: number, offsetz: number, rx: number, ry: number, rz: number) {
        if (!IsPlayerConnected(playerid))
            return false;
        samp.callNative("AttachDynamicObjectToPlayer", "iiffffff", this._id, playerid, offsetx, offsety, offsetz, rx, ry, rz);
        this._playerid = playerid;
    }

    attachToVehicle(vehicleid: number, offsetx: number, offsety: number, offsetz: number, rx: number, ry: number, rz: number) {
        if (!IsValidVehicle(vehicleid))
            return false;
        samp.callNative("AttachDynamicObjectToVehicle", "iiffffff", this._id, vehicleid, offsetx, offsety, offsetz, rx, ry, rz);
        this._vehicleid = vehicleid;
    }

    setPlayerToEdit(playerid: number) {
        if (!IsPlayerConnected(playerid))
            return false;
        samp.callNative("EditDynamicObject", "ii", playerid, this._id);
    }

    isMaterialUsed(materialindex: number) {
        let response;
        response = samp.callNative("IsDynamicObjectMaterialUsed", "iiD", this._id, materialindex, response);
        return response;
    }

    removeMaterial(materialindex: number) {
        samp.callNative("RemoveDynamicObjectMaterial", "ii", this._id, materialindex);
    }

    getMaterial(materialindex: number, modelid: number, txdname: string, texturename: string, materialcolor: number, maxtxdname: number = txdname.length, maxtexturename: number = texturename.length) {
        let response;
        response = samp.callNative("GetDynamicObjectMaterial", "iiissiiiD", this._id, materialindex, modelid, txdname, texturename, materialcolor, maxtxdname, maxtexturename, response);
        return response;
    }

    setMaterial(materialindex: number, modelid: number, txdname: string, texturename: string, materialcolor: number = 0) {
        samp.callNative("SetDynamicObjectMaterial", "iiissi", this._id, materialindex, modelid, txdname, texturename, materialcolor);
    }

    isMaterialTextUsed(materialindex: number) {
        let response;
        response = samp.callNative("IsDynamicObjectMaterialTextUsed", "iiD", this._id, materialindex, response);
        return response;
    }

    removeMaterialText(materialindex: number) {
        samp.callNative("RemoveDynamicObjectMaterialText", "ii", this._id, materialindex);
    }

    getMaterialText(materialindex: number, text: string, materialsize: number, fontface: string, fontsize: number, bold: number, fontcolor: number, backcolor: number, textalignment: number, maxtext = text.length, maxfontface = fontface.length) {
        let response;
        response = samp.callNative("GetDynamicObjectMaterialText", "iisisiiiiiiiD", this._id, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment, maxtext, maxfontface, response);
        return true;
    }

    setMaterialText(materialindex: number, text: string, materialsize: number, fontface: string = "Arial", fontsize: number = 24, bold: number = 1, fontcolor: number = 0xFFFFFFFF, backcolor: number = 0, textalignment: number = 0) {
        samp.callNative("SetDynamicObjectMaterialText", "iisisiiiii", this._id, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
    }

    public static IsValidDynamicObject(objectid: number) {
        if (DynamicObject.Pool.indexOf(objectid) < 0)
            return false;
        return true;
    }
}