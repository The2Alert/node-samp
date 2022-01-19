import {GameMode, Group, Player, SampObject, Weapons} from "@sa-mp/core";

let object: SampObject;
const objects: Group<SampObject> = new Group(
    new SampObject({x: 0, y: 0, z: 5, model: 1334, rot: {x: 0, y: 0, z: 0}}),
    new SampObject({x: 0, y: 10, z: 5, model: 1331, rot: {x: 0, y: 0, z: 0}}),
    new SampObject({x: 0, y: 20, z: 5, model: 1227, rot: {x: 0, y: 0, z: 0}})
);

GameMode.on("init", () => {
    object = SampObject.create({x: 0, y: 0, z: 5, model: 1343, rot: {x: 0, y: 0, z: 0}});
    object.materialText({text: "Hello, world!"});
    objects.create();
    Player.addClass({skin: 17, spawn: {x: 0.9445, y: 8.7060, z: 3.1096}, angle: 0, weapons: [{type: Weapons.MP5, ammo: 89}, {type: Weapons.RIFLE, ammo: 110}]});
});

Player.on("request-class", (player) => {
    object.attach(player, {offset: {x: 0, y: 0, z: -0.5}, rot: {x: 0, y: 0, z: 0}});
    for(const object of objects)
        object.move({...object.pos, z: 100, speed: 3});
    player.attachCamera(objects[1]);
});