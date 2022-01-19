import {Explosion, GameMode, Player, Weapons} from "@sa-mp/core";

GameMode.on("init", () => {
    Player.addClass({skin: 17, spawn: {x: 0.9445, y: 8.7060, z: 3.1096}, angle: 0, weapons: [{type: Weapons.M4, ammo: 89}]});
});

Player.on("connect", () => {
    setTimeout(() => Explosion.create({x: 0.9445, y: 8.7060, z: 3.1096, type: 2, radius: 100}), 2000);
});