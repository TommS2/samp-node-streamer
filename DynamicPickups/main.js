"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicPickup = void 0;
var DynamicPickup = /** @class */ (function () {
    function DynamicPickup(modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance, areaid, priority) {
        if (worldid === void 0) { worldid = -1; }
        if (interiorid === void 0) { interiorid = -1; }
        if (playerid === void 0) { playerid = -1; }
        if (streamdistance === void 0) { streamdistance = DynamicPickup.STREAMER_PICKUP_SD; }
        if (areaid === void 0) { areaid = -1; }
        if (priority === void 0) { priority = 0; }
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
    Object.defineProperty(DynamicPickup.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "modelid", {
        get: function () {
            return this._modelid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "worldid", {
        get: function () {
            return this._worldid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "interiorid", {
        get: function () {
            return this._interiorid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "playerid", {
        get: function () {
            return this._playerid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "streamdistance", {
        get: function () {
            return this._streamdistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "areaid", {
        get: function () {
            return this._areaid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicPickup.prototype, "prority", {
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    DynamicPickup.prototype.destroy = function () {
        samp.callNative("DestroyDynamicPickup", "i", this._id);
        DynamicPickup.Pool.slice(DynamicPickup.Pool.indexOf(this._id, 1));
    };
    DynamicPickup.IsValidDynamicPickup = function (pickupid) {
        if (DynamicPickup.Pool.indexOf(pickupid) < 0)
            return false;
        return true;
    };
    DynamicPickup.STREAMER_PICKUP_SD = 200.0;
    DynamicPickup.Pool = new Array();
    return DynamicPickup;
}());
exports.DynamicPickup = DynamicPickup;
