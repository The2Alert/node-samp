import {GameMode} from "@sa-mp/core";

GameMode.on("init", (gamemode) => {
    console.log("Init!");
    gamemode.worldTime = 20;
    gamemode.retval = 1;
});

GameMode.on("exit", (gamemode) => {
    console.log("Exit!");
    gamemode.retval = 1;
});