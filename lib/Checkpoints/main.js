"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicCheckpoint = void 0;
var util_1 = require("../Util/util");
var STREAMER_CP_SD = 200.0;
var DynamicCheckpoint = /** @class */ (function () {
    function DynamicCheckpoint(x, y, z, size, worldid, interiorid, playerid, streamdistance, areaid, priority) {
        if (streamdistance === void 0) { streamdistance = STREAMER_CP_SD; }
        if (areaid === void 0) { areaid = -1; }
        if (priority === void 0) { priority = 0; }
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
    Object.defineProperty(DynamicCheckpoint.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "worldid", {
        get: function () {
            return this._worldid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "interiorid", {
        get: function () {
            return this._interiorid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "playerid", {
        get: function () {
            return this._playerid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "streamdistance", {
        get: function () {
            return this._streamdistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "areaid", {
        get: function () {
            return this._areaid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicCheckpoint.prototype, "prority", {
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    DynamicCheckpoint.prototype.destroy = function () {
        samp.callNative("DestroyDynamicCP", "i", this._id);
        DynamicCheckpoint.Pool.slice(DynamicCheckpoint.Pool.indexOf(this._id, 1));
    };
    DynamicCheckpoint.prototype.togglePlayer = function (playerid, toggle) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        samp.callNative("TogglePlayerDynamicCP", "iii", playerid, this._id, toggle);
    };
    DynamicCheckpoint.prototype.isPlayerIn = function (playerid) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        var result;
        result = samp.callNative("IsPlayerInDynamicCP", "iiD", playerid, this._id, result);
        return result;
    };
    DynamicCheckpoint.GetPlayerVisibleDynamicCP = function (playerid) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        var result;
        result = samp.callNative("GetPlayerVisibleDynamicCP", "iD", playerid, result);
        return result;
    };
    DynamicCheckpoint.TogglePlayerAllDynamicCPs = function (playerid, toggle) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        samp.callNative("TogglePlayerAllDynamicCPs", "ii", playerid, toggle);
    };
    DynamicCheckpoint.IsValidDynamicCP = function (checkpointid) {
        if (DynamicCheckpoint.Pool.indexOf(checkpointid) < 0)
            return false;
        return true;
    };
    DynamicCheckpoint.Pool = new Array();
    return DynamicCheckpoint;
}());
exports.DynamicCheckpoint = DynamicCheckpoint;
