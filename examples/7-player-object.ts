import {GameMode, Player, PlayerObject, Vehicle} from "@sa-mp/core";

GameMode.on("init", () => {
    Player.addClass({skin: 6, spawn: {x: 2606.6289, y: -2241.9854, z: 13.5469}, angle: 0, weapons: []});
});

Player.on("request-class", (player) => {
    const object: PlayerObject = PlayerObject.create({model: 1343, x: 2606.6289, y: -2241.9854, z: 13.5469, rot: {x: 0, y: 0, z: 0}, drawDistance: 300}, player);
    const vehicle: Vehicle = Vehicle.create({x: 2606.6289, y: -2241.9854, z: 13.5469, model: 503, colors: [0, 0], rotation: 0});
    object.attach(vehicle);
});