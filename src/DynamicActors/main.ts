export class DynamicActor {
    public static readonly Pool: Array<number> = new Array();

    private _id: number;
    private _modelid: number;
    private _x: number;
    private _y: number;
    private _z: number;
    private _r: number;
    private _invulnerable: number;
    private _health: number;
    private _worldid: number;
    private _interiorid: number;
    private _playerid: number;
    private _streamdistance: number;
    private _areaid: number;
    private _priority: number;

    constructor(modelid: number, x: number, y: number, z: number, r: number, invulnerable: number = 1, health: number = 100.0, worldid: number = -1, interiorid: number = -1, playerid: number = -1, streamdistance: number = 200.0, areaid: number = -1, priority: number = 0) {
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

    public get id() {
        return this._id;
    }

    public get modelid() {
        return this._modelid;
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

    public get r() {
        return this._r;
    }

    public get invulnerable() {
        return this._invulnerable;
    }
    
    public get health() {
        return this._health;
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
    
    public get areaid() {
        return this._areaid;
    }
    
    public get priority() {
        return this._priority;
    }

    destroy() {
        samp.callNative("DestroyDynamicActor", "i", this._id);
        DynamicActor.Pool.slice(DynamicActor.Pool.indexOf(this._id), 1);
    }

    isStreamedForPlayer(playerid: number) {
        let result;
        result = samp.callNative("IsDynamicActorStreamedIn", "iiD", this._id, playerid, result);
        return result;
    }

    public set worldid(virtualworld: number) {
        samp.callNative("SetDynamicActorVirtualWorld", "ii", this.id, virtualworld);
        this._worldid = virtualworld;
    }

    applyAnimation(animlib: string, animname: string, fdelta: number, loop: number, lockx: number, locky: number, freeze: number, time: number) {
        samp.callNative("ApplyDynamicActorAnimation", "issfiiiii", this._id, animlib, animname, fdelta, loop, lockx, locky, freeze, time);
    }

    clearAnimations() {
        samp.callNative("ClearDynamicActorAnimations", "i", this._id);
    }

    getFacingAngle() {
        let result;
        result = samp.callNative("GetDynamicActorFacingAngle", "iF", this._id, result);
        return result; 
    }

    setFacingAngle(angle: number) {
        samp.callNative("SetDynamicActorFacingAngle", "if", this._id, angle);
    }

    setPos(x: number, y: number, z: number) {
        samp.callNative("SetDynamicActorPos", "ifff", this._id, x, y, z);
        this._x = x;
        this._y = y;
        this._z = z;
    }

    setHealth(health: number) {
        samp.callNative("SetDynamicActorHealth", "if", this._id, health);
        this._health = health;
    }

    setInvulnerable(invulnerable: 0 | 1) {
        samp.callNative("SetDynamicActorInvulnerable", "ii", this._id, invulnerable);
        this._invulnerable = invulnerable;
    }
}