import {DialogStyles, GameMode, Player, Position, Vehicle} from "@sa-mp/core";

GameMode.on("init", () => {
    Player.addClass({skin: 6, spawn: {x: 2606.6289, y: -2241.9854, z: 13.5469}, angle: 0, weapons: []});
});

Player.command.init();

Player.command("veh", "nnn", (player, model: number, color1: number, color2: number) => {
    const {x, y, z}: Position = player.pos;
    const rotation: number = player.angle;
    const vehicle: Vehicle = Vehicle.create({x, y, z, model, colors: [color1, color2], rotation});
    if(player.isInAnyVehicle())
        player.vehicle.destroy();
    player.put(vehicle);
});

Player.command("info", "", (player) => {
    const {vehicle}: Player = player;
    let info: string = `Position: ${JSON.stringify(vehicle.pos)}.\n`;
    info += `Angle: ${vehicle.angle}.\n`;
    info += `Params: ${JSON.stringify(vehicle.params)}.\n`;
    info += `Doors: ${JSON.stringify(vehicle.doors)}.\n`;
    info += `Windows: ${JSON.stringify(vehicle.windows)}.\n`;
    info += `Health: ${vehicle.health}.\n`;
    info += `Model: ${vehicle.model}.\n`;
    info += `World: ${vehicle.world}.`;
    player.dialog({
        id: 0,
        caption: "Info",
        info,
        buttons: ["Ok"],
        style: DialogStyles.MSGBOX
    });
});