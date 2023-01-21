"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicActor = void 0;
var DynamicActor = /** @class */ (function () {
    function DynamicActor(modelid, x, y, z, r, invulnerable, health, worldid, interiorid, playerid, streamdistance, areaid, priority) {
        if (invulnerable === void 0) { invulnerable = 1; }
        if (health === void 0) { health = 100.0; }
        if (worldid === void 0) { worldid = -1; }
        if (interiorid === void 0) { interiorid = -1; }
        if (playerid === void 0) { playerid = -1; }
        if (streamdistance === void 0) { streamdistance = 200.0; }
        if (areaid === void 0) { areaid = -1; }
        if (priority === void 0) { priority = 0; }
        this._id = samp.callNative("CreateDynamicActor", "iffffifiiifii", modelid, x, y, z, r, invulnerable, health, worldid, interiorid, playerid, streamdistance, areaid, priority);
        this._modelid = modelid;
        this._x = x;
        this._y = y;
        this._z = z;
        this._r = r;
        this._invulnerable = invulnerable;
        this._health = health;
        this._worldid = worldid;
        this._interiorid = interiorid;
        this._playerid = playerid;
        this._streamdistance = streamdistance;
        this._areaid = areaid;
        this._priority = priority;
    }
    Object.defineProperty(DynamicActor.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "modelid", {
        get: function () {
            return this._modelid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "r", {
        get: function () {
            return this._r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "invulnerable", {
        get: function () {
            return this._invulnerable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "worldid", {
        get: function () {
            return this._worldid;
        },
        set: function (virtualworld) {
            samp.callNative("SetDynamicActorVirtualWorld", "ii", this.id, virtualworld);
            this._worldid = virtualworld;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "interiorid", {
        get: function () {
            return this._interiorid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "playerid", {
        get: function () {
            return this._playerid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "streamdistance", {
        get: function () {
            return this._streamdistance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "areaid", {
        get: function () {
            return this._areaid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicActor.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        enumerable: false,
        configurable: true
    });
    DynamicActor.prototype.destroy = function () {
        samp.callNative("DestroyDynamicActor", "i", this._id);
        DynamicActor.Pool.slice(DynamicActor.Pool.indexOf(this._id), 1);
    };
    DynamicActor.prototype.isStreamedForPlayer = function (playerid) {
        var result;
        result = samp.callNative("IsDynamicActorStreamedIn", "iiD", this._id, playerid, result);
        return result;
    };
    DynamicActor.prototype.applyAnimation = function (animlib, animname, fdelta, loop, lockx, locky, freeze, time) {
        samp.callNative("ApplyDynamicActorAnimation", "issfiiiii", this._id, animlib, animname, fdelta, loop, lockx, locky, freeze, time);
    };
    DynamicActor.prototype.clearAnimations = function () {
        samp.callNative("ClearDynamicActorAnimations", "i", this._id);
    };
    DynamicActor.prototype.getFacingAngle = function () {
        var result;
        result = samp.callNative("GetDynamicActorFacingAngle", "iF", this._id, result);
        return result;
    };
    DynamicActor.prototype.setFacingAngle = function (angle) {
        samp.callNative("SetDynamicActorFacingAngle", "if", this._id, angle);
    };
    DynamicActor.prototype.setPos = function (x, y, z) {
        samp.callNative("SetDynamicActorPos", "ifff", this._id, x, y, z);
        this._x = x;
        this._y = y;
        this._z = z;
    };
    DynamicActor.prototype.setHealth = function (health) {
        samp.callNative("SetDynamicActorHealth", "if", this._id, health);
        this._health = health;
    };
    DynamicActor.prototype.setInvulnerable = function (invulnerable) {
        samp.callNative("SetDynamicActorInvulnerable", "ii", this._id, invulnerable);
        this._invulnerable = invulnerable;
    };
    DynamicActor.Pool = new Array();
    return DynamicActor;
}());
exports.DynamicActor = DynamicActor;
