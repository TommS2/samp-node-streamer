"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicRaceCheckpoint = void 0;
var util_1 = require("../Util/util");
var STREAMER_RACE_CP_SD = 200.0;
var DynamicRaceCheckpoint = /** @class */ (function () {
    function DynamicRaceCheckpoint(x, y, z, nextx, nexty, nextz, size, worldid, interiorid, playerid, streamdistance, areaid, priority) {
        if (streamdistance === void 0) { streamdistance = STREAMER_RACE_CP_SD; }
        if (areaid === void 0) { areaid = -1; }
        if (priority === void 0) { priority = 0; }
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
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "nextx", {
        get: function () {
            return this._nextx;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "nexty", {
        get: function () {
            return this._nexty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "nextz", {
        get: function () {
            return this._nextz;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "worldid", {
        get: function () {
            return this._worldid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "interiorid", {
        get: function () {
            return this._interiorid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "playerid", {
        get: function () {
            return this._playerid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "streamdistance", {
        get: function () {
            return this._streamdistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "areaid", {
        get: function () {
            return this._areaid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicRaceCheckpoint.prototype, "prority", {
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    DynamicRaceCheckpoint.prototype.destroy = function () {
        samp.callNative("DestroyDynamicRaceCP", "i", this._id);
        DynamicRaceCheckpoint.Pool.splice(DynamicRaceCheckpoint.Pool.indexOf(this._id, 1));
    };
    DynamicRaceCheckpoint.prototype.togglePlayer = function (playerid, toggle) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        samp.callNative("TogglePlayerDynamicRaceCP", "iii", playerid, this._id, toggle);
    };
    DynamicRaceCheckpoint.prototype.isPlayerIn = function (playerid) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        var result;
        result = samp.callNative("IsPlayerInDynamicRaceCP", "iiD", playerid, this._id, result);
        return result;
    };
    DynamicRaceCheckpoint.GetPlayerVisibleDynamicRaceCP = function (playerid) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        var result;
        result = samp.callNative("GetPlayerVisibleDynamicRaceCP", "iD", playerid, result);
        return result;
    };
    DynamicRaceCheckpoint.TogglePlayerAllDynamicRaceCPs = function (playerid, toggle) {
        if (!(0, util_1.IsPlayerConnected)(playerid))
            return false;
        samp.callNative("TogglePlayerAllDynamicRaceCPs", "ii", playerid, toggle);
    };
    DynamicRaceCheckpoint.IsValidDynamicRaceCP = function (checkpointid) {
        if (DynamicRaceCheckpoint.Pool.indexOf(checkpointid) < 0)
            return false;
        return true;
    };
    DynamicRaceCheckpoint.Pool = new Array();
    return DynamicRaceCheckpoint;
}());
exports.DynamicRaceCheckpoint = DynamicRaceCheckpoint;
