import {GameMode, Rcon} from "@sa-mp/core";

GameMode.on("init", () => {
    Rcon.send("cmdlist");
});

Rcon.on("command", (rcon, cmd) => {
    console.log(`Sent command: ${cmd}`);
});

Rcon.on("login-attempt", (rcon, ip, password, success) => {
    console.log(`Login. Ip: ${ip}, Password: ${password}. Success: ${success ? "yes" : "no"}.`);
});