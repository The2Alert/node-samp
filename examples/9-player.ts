import {Dialog, DialogStyles, Keys, MapIcon, MapIconStyle, Player, Weapons} from "@sa-mp/core";

const spawnIcon = new MapIcon({x: 2609.6289, y: -2241.9854, z: 13.5469, type: 31, color: 0, style: MapIconStyle.GLOBAL});

Player.on("connect", (player) => {
    player.spawnInfo({x: 2609.6289, y: -2241.9854, z: 13.5469, team: 0, skin: 12, rotation: 60, weapons: [{type: Weapons.MP5, ammo: 89}]});
    player.mapIcon(spawnIcon);
    player.send(`Hi, ${player}!`, 0xdeb512AA);
    player.gameText(`Hi, ${player.name}!`, 1000, 6);
    player.giveMoney(1000);
    player.giveWeapon(Weapons.MP5, 100);
    player.retval = 1;
});

Player.on("request-class", (player) => {
    player.spawn();
});

Player.on("spawn", (player) => {
    player.send("Spawn!");
});

Player.on("click-map", (player, pos) => {
    player.pos = pos;
});

Player.command.init();
Player.key.init();
Dialog.response.init();

Player.command.alt("health", "h");
Player.command("health", "", (player) => {
    player.health = 100;
});
Player.command("health", [["n", "health"]], (player, health: number) => {
    player.health = health;
});

Player.command.desc("pos", "Set position.");
Player.command.alt("pos", "p");
Player.command("pos", [["n", "x"], ["n", "y"], ["n", "z"]], (player, x: number, y: number, z: number) => {
    player.pos = {x, y, z};
});

Player.key(Keys.YES, (player) => player.spawn());
Player.command.desc("spawn", "Spawn.");
Player.command("spawn", "", (player) => player.spawn());

const dialogInfo = new Dialog({
    style: DialogStyles.MSGBOX,
    caption: "Info",
    info: "",
    buttons: ["Ok"]
});

Player.command.desc("info", "Show info.");
Player.command.alt("info", "i");
Player.command("info", "", (player) => {
    dialogInfo.info = `Id: ${player.id}.\n`;
    dialogInfo.info += `Name: ${player.name}.\n`;
    dialogInfo.info += `Money: ${player.money}$.\n`;
    dialogInfo.info += `Health: ${player.health}.\n`;
    dialogInfo.info += `Position: ${JSON.stringify(player.pos)}.\n`;
    dialogInfo.info += `Camera position: ${JSON.stringify(player.cameraPos)}.\n`;
    dialogInfo.info += `Angle: ${player.angle}.\n`;
    dialogInfo.info += `Score: ${player.score}.\n`;
    dialogInfo.info += `Ip: ${player.ip}.\n`;
    dialogInfo.info += `Ping: ${player.ping}.\n`;
    dialogInfo.info += `Time: ${JSON.stringify(player.time)}.\n`;
    dialogInfo.info += `Wanted Level: ${player.wantedLevel}.\n`;
    dialogInfo.info += `World: ${player.world}.`;
    player.dialog(dialogInfo);
});

Player.command.desc("eval", "Eval.");
Player.command("eval", [["s", "code"]], (player, code: string) => {
    try {
        let retval = eval(code);
        player.send(JSON.stringify(retval), 0xd4d2cbAA);
    } catch(error) {
        player.send("[Error]{FFFFFF} " + error, 0xe04010AA);
    }
});

const messageDialog = new Dialog({
    style: DialogStyles.INPUT,
    caption: "Send message",
    info: "Message:",
    buttons: ["Cancel", "Send"]
});

Player.command.desc("message", "Send message.");
Player.command("message", "", (player) => {
    player.dialog(messageDialog);
});

Dialog.response(messageDialog, (player, response) => {
    if(response.response)
        return;
    Player.sendToAll(response.inputText);
});

Player.on("command-invalid", (player) => {
    player.send("[Error]{FFFFFF} Command invalid.", 0xe04010AA);
    player.retval = 1;
});

Player.on("command-not-found", (player, name) => {
    player.send(`[Error]{FFFFFF} Command {dbce12}${name}{FFFFFF} not found.`, 0xe04010AA);
    player.retval = 1;
});

Player.on("command-params-mismatch", (player, cmdList) => {
    if(cmdList.desc) {
        player.send(cmdList.desc, 0xdbdbdbAA);
        player.send();
    }
    for(const cmd of cmdList)
        player.send(`{b3afaf}/${cmd.name} {dbce12}${cmd.params.map(({name, type}) => `<${name}: ${Player.command.paramTypeNames[type]}>`).join(" ")}`);
    player.retval = 1;
});