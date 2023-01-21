"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicObject = void 0;
var util_1 = require("../Util/util");
var STREAMER_OBJECT_SD = 300.0;
var STREAMER_OBJECT_DD = 0.0;
var DynamicObject = /** @class */ (function () {
    function DynamicObject(modelid, x, y, z, rx, ry, rz, worldid, interiorid, playerid, streamdistance, drawdistance, areaid, priority) {
        if (worldid === void 0) { worldid = -1; }
        if (interiorid === void 0) { interiorid = -1; }
        if (playerid === void 0) { playerid = -1; }
        if (streamdistance === void 0) { streamdistance = STREAMER_OBJECT_SD; }
        if (drawdistance === void 0) { drawdistance = STREAMER_OBJECT_DD; }
        if (areaid === void 0) { areaid = -1; }
        if (priority === void 0) { priority = 0; }
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
    Object.defineProperty(DynamicObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "rx", {
        get: function () {
            return this._rx;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "ry", {
        get: function () {
            return this._ry;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "rz", {
        get: function () {
            return this._rz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "modelid", {
        get: function () {
            return this._modelid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "worldid", {
        get: function () {
            return this._worldid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "interiorid", {
        get: function () {
            return this._interiorid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "playerid", {
        get: function () {
            return this._playerid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "streamdistance", {
        get: function () {
            return this._streamdistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "drawdistance", {
        get: function () {
            return this._drawdistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "areaid", {
        get: function () {
            return this._areaid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicObject.prototype, "vehicleid", {
        get: function () {
            return this._vehicleid;
        },
        enumerable: false,
        configurable: true
    });
    DynamicObject.prototype.destroy = function () {
        samp.callNative("DestroyDynamicObject", "i", this._id);
        DynamicObject.Pool.splice(DynamicObject.Pool.indexOf(this._id), 1);
    };
    DynamicObject.prototype.getPosition = function () {
        var _a;
        var x, y, z;
        return _a = samp.callNative("GetDynamicObjectPos", "iFFF", this._id, x, y, z), x = _a[0], y = _a[1], z = _a[2], _a;
    };
    DynamicObject.prototype.setPosition = function (x, y, z) {
        samp.callNative("SetDynamicObjectPos", "fff", x, y, z);
    };
    DynamicObject.prototype.getRotation = function () {
        var _a;
        var rx, ry, rz;
        return _a = samp.callNative("GetDynamicObjectRot", "iFFF", this._id, rx, ry, rz), rx = _a[0], ry = _a[1], rz = _a[2], _a;
    };
    DynamicObject.prototype.setRotation = function (rx, ry, rz) {
        samp.callNative("SetDynamicObjectRot", "ifff", rx, ry, rz);
    };
    DynamicObject.prototype.move = function (x, y, z, speed, rx, ry, rz) {
        if (rx === void 0) { rx = -1000.0; }
        if (ry === void 0) { ry = -1000.0; }
        if (rz === void 0) { rz = -1000.0; }
        samp.callNative("MoveDynamicObject", "ifffffff", this._id, x, y, z, speed, rx, ry, rz);
    };
    DynamicObject.prototype.stop = function () {
        samp.callNative("StopDynamicObject", "i", this._id);
    };
    DynamicObject.prototype.isMoving = function () {
        var result;
        result = samp.callNative("IsDynamicObjectMoving", "iD", this._id, result);
        return result;
    };
    DynamicObject.prototype.attachPlayerCameraTo = function (playerid) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        samp.callNative("AttachCameraToDynamicObject", "ii", playerid, this._id);
    };
    DynamicObject.prototype.attachToObject = function (attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation) {
        if (syncrotation === void 0) { syncrotation = 1; }
        samp.callNative("AttachDynamicObjectToObject", "iiffffffi", this._id, attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation);
    };
    DynamicObject.prototype.attachToPlayer = function (playerid, offsetx, offsety, offsetz, rx, ry, rz) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        samp.callNative("AttachDynamicObjectToPlayer", "iiffffff", this._id, playerid, offsetx, offsety, offsetz, rx, ry, rz);
        this._playerid = playerid;
    };
    DynamicObject.prototype.attachToVehicle = function (vehicleid, offsetx, offsety, offsetz, rx, ry, rz) {
        if (!(0, util_1.IsValidVehicle)(vehicleid))
            return false;
        samp.callNative("AttachDynamicObjectToVehicle", "iiffffff", this._id, vehicleid, offsetx, offsety, offsetz, rx, ry, rz);
        this._vehicleid = vehicleid;
    };
    DynamicObject.prototype.setPlayerToEdit = function (playerid) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        samp.callNative("EditDynamicObject", "ii", playerid, this._id);
    };
    DynamicObject.prototype.isMaterialUsed = function (materialindex) {
        var response;
        response = samp.callNative("IsDynamicObjectMaterialUsed", "iiD", this._id, materialindex, response);
        return response;
    };
    DynamicObject.prototype.removeMaterial = function (materialindex) {
        samp.callNative("RemoveDynamicObjectMaterial", "ii", this._id, materialindex);
    };
    DynamicObject.prototype.getMaterial = function (materialindex, modelid, txdname, texturename, materialcolor, maxtxdname, maxtexturename) {
        if (maxtxdname === void 0) { maxtxdname = txdname.length; }
        if (maxtexturename === void 0) { maxtexturename = texturename.length; }
        var response;
        response = samp.callNative("GetDynamicObjectMaterial", "iiissiiiD", this._id, materialindex, modelid, txdname, texturename, materialcolor, maxtxdname, maxtexturename, response);
        return response;
    };
    DynamicObject.prototype.setMaterial = function (materialindex, modelid, txdname, texturename, materialcolor) {
        if (materialcolor === void 0) { materialcolor = 0; }
        samp.callNative("SetDynamicObjectMaterial", "iiissi", this._id, materialindex, modelid, txdname, texturename, materialcolor);
    };
    DynamicObject.prototype.isMaterialTextUsed = function (materialindex) {
        var response;
        response = samp.callNative("IsDynamicObjectMaterialTextUsed", "iiD", this._id, materialindex, response);
        return response;
    };
    DynamicObject.prototype.removeMaterialText = function (materialindex) {
        samp.callNative("RemoveDynamicObjectMaterialText", "ii", this._id, materialindex);
    };
    DynamicObject.prototype.getMaterialText = function (materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment, maxtext, maxfontface) {
        if (maxtext === void 0) { maxtext = text.length; }
        if (maxfontface === void 0) { maxfontface = fontface.length; }
        var response;
        response = samp.callNative("GetDynamicObjectMaterialText", "iisisiiiiiiiD", this._id, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment, maxtext, maxfontface, response);
        return true;
    };
    DynamicObject.prototype.setMaterialText = function (materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment) {
        if (fontface === void 0) { fontface = "Arial"; }
        if (fontsize === void 0) { fontsize = 24; }
        if (bold === void 0) { bold = 1; }
        if (fontcolor === void 0) { fontcolor = 0xFFFFFFFF; }
        if (backcolor === void 0) { backcolor = 0; }
        if (textalignment === void 0) { textalignment = 0; }
        samp.callNative("SetDynamicObjectMaterialText", "iisisiiiii", this._id, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
    };
    DynamicObject.IsValidDynamicObject = function (objectid) {
        if (DynamicObject.Pool.indexOf(objectid) < 0)
            return false;
        return true;
    };
    DynamicObject.Pool = new Array();
    return DynamicObject;
}());
exports.DynamicObject = DynamicObject;
