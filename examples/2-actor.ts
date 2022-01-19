import {Actor, GameMode, Group, Player, Weapons} from "@sa-mp/core";

const actors: Group<Actor> = new Group(
    new Actor({x: 0, y: 10, z: 10, model: 19, rotation: 0}),
    new Actor({x: 0, y: 20, z: 10, model: 20, rotation: 0}),
    new Actor({x: 0, y: 30, z: 10, model: 21, rotation: 0}),
    new Actor({x: 0, y: 40, z: 10, model: 22, rotation: 0}),
    new Actor({x: 0, y: 50, z: 10, model: 23, rotation: 0})
); 

GameMode.on("init", () => {
    const actor: Actor = Actor.create({x: 0, y: 0, z: 10, model: 18, rotation: 0});
    actor.health = 89;
    actor.invulnerable = false;
    actor.anim({library: "DEALER", name: "shop_pay", loop: true, lockX: false, lockY: false, freeze: false, time: 0});
    actors.create();
    Player.addClass({skin: 17, spawn: {x: 0.9445, y: 8.7060, z: 3.1096}, angle: 0, weapons: [{type: Weapons.M4, ammo: 89}]});
});