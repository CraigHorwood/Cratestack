"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TITLE = [true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, true, false, false, false, true, false, true, false, true, false, true, false, false, true, false, false, true, false, false, true, false, false, false, true, true, false, false, true, true, true, false, false, true, false, false, true, true, true, true, false, false, false, true, false, true, false, true, false, true, false, false, true, false, false, true, false, false, true, true, true, false, true, false, true, false, true, false, true, false, false, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, false, true, true, false, false, false, false, true, false, false, true, false, true, false, true, false, false, false, true, false, true, true, true, true, false, false, true, false, false, true, true, true, false, true, false, false, false, true, true, false, false, false, true, false, false, true, false, false, true, false, true, false, true, false, false, false, true, false, true, true, true, true, false, false, true, false, false, true, false, true, false, true, true, true, false, true, false, true];
var LEVELS = [
    "HRPNSaP`@aP`@aP`@aP`@aP`@aP`@aP`@aP`@aP`@aP`@aP`@aP`@aP`@aP`@aK`Ea`bI`IaG`IaG`Xa",
    "PRCFSaP`@aP`@aP`@aP`@aP`@aP`KaE`KaE`@aP`@aP`@aO`b@aC`MaC`MaC`MabO`CaM`CaM`CaM`Sa",
    "KRBDSaP`@aP`@aP`@aP`LaD`LaD`LaD`@aP`@aP`@aL`DaI`b@`DaI`bD`LaD`LaD`LaD`IaC`MaC`MaC`Wa",
    "BRQCSaP`@aP`@aP`@aP`@aP`@aL`DaL`DaL`DaL`DaL`DaH`HaH`HaH`HaB`bC`HaB`AaA`HaB`AaA`HaB`AaA`HaB`Aab@`[a",
    "MRPHSaP`@aB`bK`@aB`aK`@aB`aK`@aB`aK`Ba@caK`@aB`aK`@aB`aK`@aB`aF`Ea@`AaF`EaK`EaK`EaG`bA`Ea@cPaP`@aP`@aO`b@aO`bSa",
    "QRQESaP`@aP`@aP`@a@`@aL`@aA`aL`@ab@`aI`Da@`aL`@aA`aL`@aA`aJ`b`@aAcaLd@aA`OaP`@aP`@aJ`bC`Ca`aE`aC`@aB`aE`aC`@aB`aE`aC`@abA`aEdaC`Sa",
    "CRLQSaP`@aP`@aP`@aP`@aP`@aA`Ed@`FaA`EaF`@aF`@aF`@aC`b@`@aF`Fa@`@aF`@aF`@aDd@`@aF`Fa@`@aF`@aF`@a@`bC`@aF`@a@`FaF`@aF`@aF`@aF`@aF`@aE`b@aB`BdSa",
    "QRBCSaP`@aP`@aP`@aP`@aP`LaAca@`@aM`a@`@aM`a@`@aN`@b@aD`Je@aC`MaB`NaP`AaO`@aP`@aP`@aL`bA`@a@`Id`bA`Sa",
    "BRQDSaP`@aP`@aP`@aP`@aH`HaH`HaH`HaH`HaA`OaAcIgDaP`@aO`h@aLiB`NaBc@aP`@aP`@aO`b@aK`i@`@bSa",
    "BEQCSaG`aF`@aG`aF`@aG`aF`@aF`baC`CaB`bA`baF`Fa@`AaE`@aG`aF`@aF`hafE`@aG`aF`@aG`a`aD`@aG`aF`@a@`EdaF`@a@`FaC`a@`@aP`@aP`@aP`@aP`@aPdSa",
    "BRBDSaP`@aP`@aP`@aP`EaK`@aP`@aM`a@`@aM`a@`@aM`a@`@a@cLa@`@aM`h@`@aM`h@`@aP`@aP`AaB`GeiAe@aC`MaN`@b@aN`@bSa"
];
var GAME_STATE_TITLE = 0;
var GAME_STATE_IN_GAME = 1;
var GAME_STATE_LEVEL_EDITOR = 2;
var MAX_TYPE = 9;
var BOUNCE_SPEED = 12;
var canvas;
var context;
var time = 0;
var selected = 0;
var gameState = GAME_STATE_TITLE;
var xMouse = 0, yMouse = 0;
var tiles = [];
var player;
var goal;
var crates = [];
var crateMap = [];
var bullets = [];
var mouseDown = false;
var level = 0;
var winTime = -1;
var selectedType = 1;
var editorMode = 0;
var HitResult = /** @class */ (function () {
    function HitResult() {
    }
    return HitResult;
}());
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());
var Goal = /** @class */ (function (_super) {
    __extends(Goal, _super);
    function Goal(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x << 5;
        _this.y = (y << 5) - 16;
        _this.w = 32;
        _this.h = 4;
        return _this;
    }
    Goal.prototype.tick = function () {
        if (hitTest(this, player) && player.onGround)
            win();
    };
    Goal.prototype.render = function () {
        context.fillStyle = "#e1e1e1";
        context.fillRect(this.x, this.y, 32, 48);
        context.fillStyle = "#b1b1b1";
        context.fillRect(this.x + 4, this.y + 4, 24, 44);
        context.fillStyle = "#e1e1e1";
        context.beginPath();
        context.arc(this.x + 10, this.y + 26, 3, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    };
    return Goal;
}(Entity));
var Crate = /** @class */ (function (_super) {
    __extends(Crate, _super);
    function Crate(x, y, xa, ya, onGround) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.xa = xa;
        _this.ya = ya;
        _this.w = 32;
        _this.h = 32;
        _this.onGround = onGround;
        _this.xSlot = -1;
        _this.ySlot = -1;
        _this.removeTime = -1;
        // this.canCollide = !hitTest(this, player);
        _this.canCollide = true;
        _this.check = false;
        _this.landed = false;
        return _this;
    }
    Crate.prototype.tick = function () {
        if (this.removeTime > 0) {
            var xd = player.x - this.x;
            var yd = player.y - this.y + 8;
            var dist = Math.sqrt(xd * xd + yd * yd);
            xd /= dist;
            yd /= dist;
            this.x += xd * 128 / this.removeTime;
            this.y += yd * 128 / this.removeTime;
            if (hitTest(this, player))
                this.removeTime = 1;
            if (yd < 0) {
                var x0 = Math.floor(this.x / 32);
                var y0 = Math.floor(this.y / 32);
                var x1 = Math.floor((this.x + 32) / 32);
                var y1 = Math.floor((this.y + 32) / 32);
                for (var x = x0; x <= x1; x++) {
                    for (var y = y0; y <= y1; y++) {
                        if (x >= 0 && y >= 0 && x < 20 && y < 20) {
                            if (tiles[x + y * 20] == 3) {
                                player.hasCrate = 0;
                                this.xa = 0;
                                this.ya = 0;
                                this.removeTime = 0;
                                break;
                            }
                        }
                    }
                }
            }
            if (--this.removeTime == 0)
                player.hasCrate = 2;
            return player.hasCrate == 2;
        }
        this.x += this.xa;
        var xHit = isFree(this);
        if (xHit != null && this.canCollide) {
            this.x = xHit.x;
            if (this.xa > 0)
                this.x -= 32;
            else
                this.x += 32;
            if (xHit.type == 6)
                this.xa = BOUNCE_SPEED;
            else if (xHit.type == 8)
                this.xa = -BOUNCE_SPEED;
            else
                this.xa = 0;
        }
        this.y += this.ya;
        if (hitTest(this, player)) {
            if (this.canCollide && !this.check) {
                if (this.ya < 0)
                    this.y = player.y + 48;
                else if (this.ya > 0) {
                    this.xa = 0;
                    this.onGround = true;
                    this.y = player.y - 32;
                }
                this.ya = 0;
            }
        }
        else
            this.canCollide = true;
        var yHit = isFree(this);
        if (yHit != null && this.canCollide) {
            this.y = yHit.y;
            if (this.ya > 0) {
                if (!this.landed) {
                    if (yHit.type != 5 && yHit.type != 7 && yHit.type != 9 && !this.check)
                        this.xa = 0;
                    else if (yHit.type == 5 && this.xa == 0)
                        this.xa = -1;
                }
                this.y -= 32;
                this.onGround = true;
                this.landed = true;
            }
            else
                this.y += 32;
            if (yHit.type == 7)
                this.ya = BOUNCE_SPEED;
            else if (yHit.type == 9)
                this.ya = -BOUNCE_SPEED;
            else
                this.ya = 0;
        }
        if (!this.check) {
            var xt = Math.floor((this.x + 16) / 32);
            var yt = Math.floor((this.y + 16) / 32);
            if (xt != this.xSlot || yt != this.ySlot) {
                if (this.xSlot >= 0 && this.ySlot >= 0 && this.xSlot < 20 && this.ySlot < 20)
                    crateMap[this.xSlot + this.ySlot * 20].splice(this.index, 1);
                this.xSlot = xt;
                this.ySlot = yt;
                var i = this.xSlot + this.ySlot * 20;
                if (i >= 0 && i < crateMap.length) {
                    this.index = crateMap[i].length;
                    crateMap[i].push(this);
                }
            }
        }
        if (this.ya < 16)
            this.ya += 0.25;
        return false;
    };
    Crate.prototype.render = function () {
        renderCrate(this.x, this.y, 1);
    };
    return Crate;
}(Entity));
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(x, y, xa, ya) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.xa = xa;
        _this.ya = ya;
        _this.w = 8;
        _this.h = 8;
        return _this;
    }
    Bullet.prototype.tick = function () {
        this.x += this.xa;
        this.y += this.ya;
        var hit = isFree(this);
        if (hit != null) {
            if (hit.crate != null && player.hasCrate == 0) {
                hit.crate.removeTime = 16;
                player.hasCrate = 1;
            }
            return true;
        }
        return false;
    };
    Bullet.prototype.render = function () {
        context.beginPath();
        context.arc(this.x + 4, this.y + 4, 4, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    };
    return Bullet;
}(Entity));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x << 5;
        _this.y = (y << 5) - 16;
        _this.xa = 0;
        _this.ya = 0;
        _this.w = 32;
        _this.h = 48;
        _this.angle = -Math.PI / 2;
        _this.onGround = false;
        _this.walkTime = 0;
        _this.wasJumping = false;
        _this.hasCrate = 0;
        _this.deadTime = -1;
        _this.sliding = false;
        return _this;
    }
    Player.prototype.tick = function (left, right, jump) {
        if (this.sliding) {
            left = false;
            right = false;
        }
        if (this.x < -32 || this.y < -48 || this.x >= 640 || this.y >= 640)
            this.deadTime = 64;
        if (this.deadTime >= 0) {
            if (this.deadTime > 0)
                this.deadTime--;
            return;
        }
        this.angle = Math.atan2(this.y + 24 - yMouse, this.x + 16 - xMouse) + Math.PI;
        if (keys[3])
            this.angle = Math.floor((this.angle + Math.PI / 8) * 4 / Math.PI) * Math.PI / 4;
        if (this.onGround && (left || right))
            this.walkTime++;
        else
            this.walkTime = 0;
        if (!left && !right && !this.sliding) {
            if (this.xa < 0)
                this.xa += 0.5;
            else if (this.xa > 0)
                this.xa -= 0.5;
        }
        else if (left && this.xa > -4)
            this.xa -= 0.5;
        else if (right && this.xa < 4)
            this.xa += 0.5;
        if (jump && this.onGround && !this.wasJumping) {
            this.onGround = false;
            this.sliding = false;
            this.ya = -7;
            this.wasJumping = true;
        }
        else if (!jump && this.ya < -4)
            this.ya = -4;
        this.wasJumping = jump;
        var xt = Math.floor((this.x + 16) / 32);
        var yt = Math.floor((this.y + 48) / 32);
        if (this.onGround && xt >= 0 && yt >= 0 && xt < 20 && yt < 20) {
            var t = tiles[xt + yt * 20];
            if (t == 5) {
                if (this.xa == 0)
                    this.xa = -1;
                this.sliding = true;
            }
            else {
                if (this.sliding && t > 0)
                    this.xa = 0;
                this.sliding = false;
            }
        }
        this.x += this.xa;
        var xHit = isFree(this);
        if (xHit != null) {
            var ok = true;
            if (xHit.crate != null)
                ok = xHit.crate.canCollide;
            if (ok) {
                this.x = xHit.x;
                if (this.xa > 0)
                    this.x -= 32;
                else if (this.xa < 0)
                    this.x += 32;
                this.xa = 0;
                this.sliding = false;
            }
        }
        this.onGround = false;
        this.y += this.ya;
        var yHit = isFree(this);
        if (yHit != null) {
            var ok = true;
            if (yHit.crate != null)
                ok = yHit.crate.canCollide;
            if (ok) {
                this.y = yHit.y;
                if (this.ya > 0) {
                    this.y -= 48;
                    this.onGround = true;
                    if (yHit.type == 4)
                        this.deadTime = 64;
                }
                else if (this.ya < 0)
                    this.y += 32;
                this.ya = 0;
            }
        }
        if (this.ya < 16)
            this.ya += 0.25;
    };
    Player.prototype.render = function () {
        if (this.deadTime >= 0) {
            if (this.deadTime >= 56) {
                context.fillStyle = "#ffffff";
                context.beginPath();
                context.arc(this.x + 16, this.y + 16, (this.deadTime - 56) << 1, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }
            return;
        }
        context.fillStyle = "#c4c4c4";
        context.translate(this.x + 16, this.y + 16);
        context.rotate(this.angle);
        context.translate(-this.x - 16, -this.y - 16);
        context.fillRect(this.x + 16, this.y + 8, 32, 16);
        context.translate(this.x + 16, this.y + 16);
        context.rotate(-this.angle);
        context.translate(-this.x - 16, -this.y - 16);
        context.fillStyle = "#777777";
        var h0 = 32;
        var h1 = 32;
        switch ((this.walkTime >> 2) & 3) {
            case 1:
                h0 = 24;
                break;
            case 3:
                h1 = 24;
                break;
        }
        context.fillRect(this.x + 6, this.y + 16, 4, h0);
        context.fillRect(this.x + 22, this.y + 16, 4, h1);
        context.fillStyle = "#a4a4a4";
        context.beginPath();
        context.arc(this.x + 16, this.y + 16, 16, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    };
    return Player;
}(Entity));
function initGame(levelCode) {
    level = 9;
    time = 0;
    if (gameState != GAME_STATE_LEVEL_EDITOR) {
        var ct = document.getElementById("controls");
        var le = document.getElementById("level_editor");
        if (le != null)
            le.style.display = "none";
        if (ct != null)
            ct.style.display = "block";
    }
    gameState = GAME_STATE_IN_GAME;
    loadLevel(levelCode);
}
function initLevelEditor() {
    time = 0;
    var ct = document.getElementById("controls");
    var le = document.getElementById("level_editor");
    if (ct != null)
        ct.style.display = "none";
    if (le != null)
        le.style.display = "block";
    tiles = [];
    for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 20; x++) {
            var i = x + y * 20;
            if (x == 0 || y == 0 || x == 19 || y == 19)
                tiles[i] = 1;
            else
                tiles[i] = 0;
        }
    }
    crates = [];
    bullets = [];
    player = new Player(8, 18);
    goal = new Goal(16, 18);
    gameState = GAME_STATE_LEVEL_EDITOR;
}
function tick() {
    if (winTime > 0) {
        if (--winTime == 0)
            loadLevel(LEVELS[++level]);
        return;
    }
    time++;
    if (gameState == GAME_STATE_IN_GAME) {
        for (var i = 0; i < crates.length; i++) {
            var c = crates[i];
            if (c.tick()) {
                var j = c.xSlot + c.ySlot * 20;
                if (j >= 0 && j < crateMap.length)
                    crateMap[j].splice(c.index, 1);
                crates.splice(i--, 1);
            }
        }
        for (var i = 0; i < bullets.length; i++) {
            if (bullets[i].tick())
                bullets.splice(i--, 1);
        }
        player.tick(keys[0], keys[1], keys[2]);
        goal.tick();
    }
    else if (gameState == GAME_STATE_LEVEL_EDITOR) {
        if (editorMode == 1) {
            player.x = Math.floor(xMouse / 32) << 5;
            player.y = (Math.floor(yMouse / 32) << 5) - 16;
        }
        else if (editorMode == 3) {
            goal.x = Math.floor(xMouse / 32) << 5;
            goal.y = (Math.floor(yMouse / 32) << 5) - 16;
        }
    }
}
function isFree(e) {
    var epsilon = 0.0625;
    var x0 = Math.floor(e.x / 32);
    var y0 = Math.floor(e.y / 32);
    var x1 = Math.floor((e.x + e.w - epsilon) / 32);
    var y1 = Math.floor((e.y + e.h - epsilon) / 32);
    var hit = new HitResult();
    hit.crate = null;
    for (var y = y0 - 1; y <= y1 + 1; y++) {
        for (var x = x0 - 1; x <= x1 + 1; x++) {
            var i = x + y * 20;
            if (i < 0 || i >= crateMap.length)
                continue;
            for (var j = 0; j < crateMap[i].length; j++) {
                var c = crateMap[i][j];
                if (e == c || c.removeTime >= 0)
                    continue;
                if (hitTest(e, c)) {
                    hit.x = c.x;
                    hit.y = c.y;
                    hit.type = 2;
                    hit.crate = c;
                    return hit;
                }
            }
        }
    }
    for (hit.y = y0; hit.y <= y1; hit.y++) {
        for (hit.x = x0; hit.x <= x1; hit.x++) {
            if (hit.x < 0 || hit.y < 0 || hit.x >= 20 || hit.y >= 20) {
                hit.x <<= 5;
                hit.y <<= 5;
                hit.type = 1;
                return hit;
            }
            hit.type = tiles[hit.x + hit.y * 20];
            if (isSolid(hit, e)) {
                hit.x <<= 5;
                hit.y <<= 5;
                return hit;
            }
        }
    }
    return null;
}
function isSolid(hit, e) {
    if (hit.type > 0)
        return hit.type != 3 || (e.ya >= 0 && e.y + e.h - e.ya <= (hit.y << 5));
    return false;
}
function hitTest(e0, e1) {
    return hitTestPoints(e0.x, e0.y, e0.x + e0.w, e0.y + e0.h, e1.x, e1.y, e1.x + e1.w, e1.y + e1.h);
}
function hitTestPoints(x00, y00, x10, y10, x01, y01, x11, y11) {
    return x10 > x01 && x00 < x11 && y10 > y01 && y00 < y11;
}
function win() {
    if (winTime == -1)
        winTime = 128;
}
function setPlayerPosition() {
    editorMode = 1;
}
function setGoalPosition() {
    editorMode = 3;
}
function loadLevelButton() {
    gameState = GAME_STATE_LEVEL_EDITOR;
    editorMode = 0;
    var lc = document.getElementById("levelCode");
    if (lc != null) {
        var levelCode = lc.value;
        var err = document.getElementById("error");
        if (levelCode.length < 4) {
            if (err != null)
                err.style.display = "block";
        }
        else {
            if (err != null)
                err.style.display = "none";
            loadLevel(levelCode);
        }
    }
}
function loadLevel(levelCode) {
    tiles = [];
    crates = [];
    crateMap = [];
    for (var i = 0; i < 400; i++) {
        tiles[i] = 0;
        crateMap[i] = [];
    }
    player = new Player(levelCode.charCodeAt(0) & 31, levelCode.charCodeAt(1) & 31);
    goal = new Goal(levelCode.charCodeAt(2) & 31, levelCode.charCodeAt(3) & 31);
    var j = 0;
    for (var i = 4; i < levelCode.length; i++) {
        var ch = levelCode.charCodeAt(i);
        var count = 1;
        if ((ch & 32) == 0) {
            count = (ch & 31) + 2;
            i++;
        }
        var t = levelCode.charCodeAt(i) & 31;
        for (var k = 0; k < count; k++, j++) {
            if (t == 2 && gameState == GAME_STATE_IN_GAME) {
                tiles[j] = 0;
                var x = j % 20;
                var y = Math.floor(j / 20);
                var onGround = true;
                if (y < 19)
                    onGround = tiles[x + (y + 1) * 20] > 0;
                crates.push(new Crate(x << 5, y << 5, 0, 0, onGround));
            }
            else
                tiles[j] = t;
        }
    }
    bullets = [];
    winTime = -1;
}
function playLevel() {
    if (gameState == GAME_STATE_IN_GAME)
        return;
    editorMode = 0;
    var levelCode = "";
    levelCode += String.fromCharCode(64 + Math.floor(player.x / 32));
    levelCode += String.fromCharCode(64 + Math.floor((player.y + 16) / 32));
    levelCode += String.fromCharCode(64 + Math.floor(goal.x / 32));
    levelCode += String.fromCharCode(64 + Math.floor((goal.y + 16) / 32));
    for (var i = 0, count = 0; i < tiles.length; i += count) {
        var t = tiles[i];
        var j = i;
        while (j < tiles.length && tiles[j] == t && j - i < 33) {
            j++;
        }
        count = j - i;
        if (count > 1)
            levelCode += String.fromCharCode(64 + ((count - 2) & 31));
        levelCode += String.fromCharCode(96 + (t & 31));
    }
    var lc = document.getElementById("levelCode");
    if (lc != null)
        lc.value = levelCode;
    initGame(levelCode);
}
function toggleErase() {
    if (editorMode != 2)
        editorMode = 2;
    else
        editorMode = 0;
}
function placeBlock(x, y, type) {
    if (x >= 0 && y >= 0 && x < 20 && y < 20)
        tiles[x + y * 20] = type;
}
function render() {
    context.fillStyle = "#424242";
    context.fillRect(0, 0, canvas.width, canvas.height);
    switch (gameState) {
        case GAME_STATE_TITLE:
            renderTitle();
            break;
        case GAME_STATE_IN_GAME:
            renderGame();
            break;
        case GAME_STATE_LEVEL_EDITOR:
            renderLevelEditor();
            break;
        default:
            break;
    }
}
function renderTitle() {
    for (var y = 0; y < 11; y++) {
        for (var x = 0; x < 19; x++) {
            var t = TITLE[x + y * 19];
            if (t) {
                var offs = Math.max(1648 - (time << 3) - (y << 7) + x * 48, 0);
                renderCrate((x << 5) + 16, (y << 5) + 16 - offs, 1);
            }
        }
    }
    if (time >= 314) {
        context.fillStyle = "#ffffff";
        context.fillText("START", 280, 480);
        context.fillText("LEVEL EDITOR", 220, 530);
        if (selected > 0)
            renderCrate(160, 402 + selected * 50, 1);
    }
}
function renderGame() {
    for (var y = 0; y < 20; y++) {
        for (var x = 0; x < 20; x++) {
            renderTile(x, y, tiles[x + y * 20]);
        }
    }
    goal.render();
    for (var i = 0; i < crates.length; i++) {
        crates[i].render();
    }
    context.fillStyle = "#ffffff";
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].render();
    }
    player.render();
}
function renderLevelEditor() {
    renderGame();
    var xt = Math.floor(xMouse / 32);
    var yt = Math.floor(yMouse / 32);
    if (editorMode == 0)
        renderTile(xt, yt, selectedType);
}
function renderTile(x, y, t) {
    var xp = x << 5;
    var yp = y << 5;
    switch (t) {
        case 1:
            context.fillStyle = "#a0a0a0";
            context.fillRect(xp, yp, 32, 32);
            break;
        case 2:
            renderCrate(xp, yp, 1);
            break;
        case 3:
            context.fillStyle = "#888888";
            context.fillRect(xp, yp, 32, 8);
            break;
        case 4:
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.moveTo(xp, yp + 32);
            context.lineTo(xp + 8, yp);
            context.lineTo(xp + 16, yp + 32);
            context.lineTo(xp + 24, yp);
            context.lineTo(xp + 32, yp + 32);
            context.closePath();
            context.fill();
            break;
        case 5:
            context.fillStyle = "#00ffff";
            context.fillRect(xp, yp, 32, 32);
            break;
        case 6:
            context.fillStyle = "#707070";
            context.fillRect(xp, yp, 32, 32);
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.moveTo(xp + 8, yp + 8);
            context.lineTo(xp + 24, yp + 16);
            context.lineTo(xp + 8, yp + 24);
            context.closePath();
            context.fill();
            break;
        case 7:
            context.fillStyle = "#707070";
            context.fillRect(xp, yp, 32, 32);
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.moveTo(xp + 8, yp + 8);
            context.lineTo(xp + 24, yp + 8);
            context.lineTo(xp + 16, yp + 24);
            context.closePath();
            context.fill();
            break;
        case 8:
            context.fillStyle = "#707070";
            context.fillRect(xp, yp, 32, 32);
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.moveTo(xp + 8, yp + 16);
            context.lineTo(xp + 24, yp + 8);
            context.lineTo(xp + 24, yp + 24);
            context.closePath();
            context.fill();
            break;
        case 9:
            context.fillStyle = "#707070";
            context.fillRect(xp, yp, 32, 32);
            context.fillStyle = "#ffffff";
            context.beginPath();
            context.moveTo(xp + 8, yp + 24);
            context.lineTo(xp + 16, yp + 8);
            context.lineTo(xp + 24, yp + 24);
            context.closePath();
            context.fill();
            break;
    }
}
function renderCrate(x, y, scale) {
    scale *= 32;
    context.fillStyle = "#E1A95F";
    context.fillRect(x, y, scale, scale);
    context.fillStyle = "#c49353";
    var s = scale / 8;
    context.fillRect(x, y, scale, s);
    context.fillRect(x, y, s, scale);
    context.fillRect(x, y + scale - s, scale, s);
    context.fillRect(x + scale - s, y, s, scale);
    context.beginPath();
    context.moveTo(x + s, y);
    context.lineTo(x + scale, y + scale - s);
    context.lineTo(x + scale - s, y + scale);
    context.lineTo(x, y + s);
    context.closePath();
    context.fill();
}
function animate() {
    tick();
    render();
    window.requestAnimationFrame(animate);
}
function onMouseDown(e) {
    if (e.button == 2)
        editorMode = 2;
    var x = e.offsetX;
    var y = e.offsetY;
    if (gameState == GAME_STATE_IN_GAME) {
        if (player.deadTime >= 0) {
            if (player.deadTime == 0)
                initGame(LEVELS[level]);
            return;
        }
        if (winTime >= 0)
            return;
        var cos = Math.cos(player.angle);
        var sin = Math.sin(player.angle);
        if (player.hasCrate == 2) {
            var xt = Math.floor((player.x + 16 + cos * 48) / 32);
            var yt = Math.floor((player.y + 24 + sin * 48) / 32);
            if (xt >= 0 && yt >= 0 && xt < 20 && yt < 20) {
                var xp = xt << 5;
                var yp = yt << 5;
                if (tiles[xt + yt * 20] == 0) {
                    var c = new Crate(xp, yp, cos, sin, false);
                    c.check = true;
                    var canSpawn = true;
                    while (hitTest(c, player)) {
                        player.ya = 0;
                        var xo = c.x;
                        var yo = c.y;
                        c.tick();
                        if (c.x == xo && c.y == yo) {
                            canSpawn = false;
                            break;
                        }
                    }
                    if (canSpawn) {
                        player.hasCrate = 0;
                        c.xa *= 7;
                        c.ya *= 7;
                        c.check = false;
                        crates.push(c);
                    }
                }
            }
        }
        else if (player.hasCrate == 0)
            bullets.push(new Bullet(player.x + 16 + cos * 32, player.y + 16 + sin * 32, cos * 8, sin * 8));
    }
    else if (gameState == GAME_STATE_LEVEL_EDITOR && editorMode != 1 && editorMode != 3)
        placeBlock(Math.floor(x / 32), Math.floor(y / 32), e.button == 2 ? 0 : selectedType);
    mouseDown = true;
}
function onMouseUp(e) {
    if (gameState == GAME_STATE_TITLE) {
        if (time < 314)
            time = 314;
        else if (selected == 1)
            initGame(LEVELS[0]);
        else if (selected == 2)
            initLevelEditor();
    }
    else if (gameState == GAME_STATE_LEVEL_EDITOR)
        editorMode = 0;
    mouseDown = false;
}
function onMouseMove(e) {
    xMouse = e.offsetX;
    yMouse = e.offsetY;
    if (gameState == GAME_STATE_TITLE) {
        if (yMouse >= 454 && yMouse < 504)
            selected = 1;
        else if (yMouse >= 504 && yMouse < 554)
            selected = 2;
        else
            selected = 0;
    }
    else if (gameState == GAME_STATE_LEVEL_EDITOR && mouseDown)
        placeBlock(Math.floor(xMouse / 32), Math.floor(yMouse / 32), editorMode == 2 ? 0 : selectedType);
}
var keys = [false, false, false, false];
function takeKey(code, down) {
    switch (code) {
        case 16:
            keys[3] = down;
            break;
        case 32:
            keys[2] = down;
            break;
        case 65:
            keys[0] = down;
            break;
        case 68:
            keys[1] = down;
            break;
    }
}
window.onkeydown = function (e) {
    if (e.keyCode == 82 && gameState == GAME_STATE_IN_GAME)
        initGame(LEVELS[level]);
    else
        takeKey(e.keyCode, true);
};
window.onkeyup = function (e) {
    takeKey(e.keyCode, false);
};
window.onmousewheel = function (e) {
    if (e.wheelDelta < 0)
        selectedType--;
    else
        selectedType++;
    if (selectedType <= 0)
        selectedType = MAX_TYPE;
    else if (selectedType > MAX_TYPE)
        selectedType = 1;
};
window.onload = function () {
    canvas = document.getElementById("game_canvas");
    canvas.onmousedown = onMouseDown;
    canvas.onmouseup = onMouseUp;
    canvas.onmousemove = onMouseMove;
    context = canvas.getContext("2d");
    context.font = "32px Arial";
    window.requestAnimationFrame(animate);
};
