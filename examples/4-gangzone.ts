import {GameMode, GangZone, Group, Player, Weapons} from "@sa-mp/core";

const gangzones: Group<GangZone> = new Group(
    new GangZone({min: {x: 0, y: 0}, max: {x: -100, y: -100}}),
    new GangZone({min: {x: 0, y: 0}, max: {x: -100, y: 100}}),
    new GangZone({min: {x: 0, y: 0}, max: {x: 100, y: -100}})
);

GameMode.on("init", () => {
    const gangzone: GangZone = GangZone.create({min: {x: 0, y: 0}, max: {x: 100, y: 100}});
    setTimeout(() => gangzone.showForAll(0xf0e629AA), 10000);
    setTimeout(() => gangzone.flashForAll(0x2c36f2AA), 15000);
    setTimeout(() => gangzone.hideForAll(), 20000);
    gangzones.create();
    Player.addClass({skin: 17, spawn: {x: 0.9445, y: 8.7060, z: 3.1096}, angle: 0, weapons: [{type: Weapons.M4, ammo: 89}]});
});

Player.on("connect", (player) => {
    for(const gangzone of gangzones)
        gangzone.show(player, 0xe32bf0AA);
});