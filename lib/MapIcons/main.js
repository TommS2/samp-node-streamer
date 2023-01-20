"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapIcon = exports.MapIconStyle = void 0;
var STREAMER_MAP_ICON_SD = 200.0;
exports.MapIconStyle = {
    MAPICON_LOCAL: 0,
    MAPICON_GLOBAL: 1,
    MAPICON_LOCAL_CHECKPOINT: 2,
    MAPICON_GLOBAL_CHECKPOINT: 3
};
var MapIcon = /** @class */ (function () {
    function MapIcon(x, y, z, color, worldid, interiorid, playerid, streamdistance, style, areaid, priority) {
        if (worldid === void 0) { worldid = -1; }
        if (interiorid === void 0) { interiorid = -1; }
        if (playerid === void 0) { playerid = -1; }
        if (streamdistance === void 0) { streamdistance = STREAMER_MAP_ICON_SD; }
        if (style === void 0) { style = exports.MapIconStyle.MAPICON_LOCAL; }
        if (areaid === void 0) { areaid = -1; }
        if (priority === void 0) { priority = 0; }
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
    Object.defineProperty(MapIcon.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "worldid", {
        get: function () {
            return this._worldid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "interiorid", {
        get: function () {
            return this._interiorid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "playerid", {
        get: function () {
            return this._playerid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "streamdistance", {
        get: function () {
            return this._streamdistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "style", {
        get: function () {
            return this._style;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "areaid", {
        get: function () {
            return this._areaid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapIcon.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    MapIcon.prototype.destroy = function () {
        samp.callNative("DestroyDynamicMapIcon", "i", this._id);
        MapIcon.Pool.slice(MapIcon.Pool.indexOf(this._id, 1));
    };
    MapIcon.IsValidDynamicMapIcon = function (iconid) {
        if (MapIcon.Pool.indexOf(iconid) < 0)
            return false;
        return true;
    };
    MapIcon.Pool = new Array();
    return MapIcon;
}());
exports.MapIcon = MapIcon;
