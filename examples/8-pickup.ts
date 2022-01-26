import {GameMode, Group, Pickup, Player, Weapons} from "@sa-mp/core";

let briefcase: Pickup;

const money: Group<Pickup> = new Group(
    new Pickup({x: 2609.6289, y: -2241.9854, z: 13.5469, model: 1212, type: 3}),
    new Pickup({x: 2610.6289, y: -2241.9854, z: 13.5469, model: 1212, type: 3}),
    new Pickup({x: 2611.6289, y: -2241.9854, z: 13.5469, model: 1212, type: 3}),
    new Pickup({x: 2612.6289, y: -2241.9854, z: 13.5469, model: 1212, type: 3}),
    new Pickup({x: 2613.6289, y: -2241.9854, z: 13.5469, model: 1212, type: 3})
);

GameMode.on("init", () => {
    briefcase = Pickup.create({x: 2608.6289, y: -2241.9854, z: 13.5469, model: 1210, type: 1});
    money.create();
    Player.addClass({skin: 6, spawn: {x: 2606.6289, y: -2241.9854, z: 13.5469}, angle: 0, weapons: []});
});

Player.on("pick-up-pickup", (player, pickup) => {
    if(briefcase.id === pickup.id) {
        player.giveMoney(1000);
        player.giveWeapon(Weapons.M4, 89);
        player.giveWeapon(Weapons.MOLTOV, 110);
    } else if(money.some((money) => money.id === pickup.id))
        player.giveMoney(100);
});