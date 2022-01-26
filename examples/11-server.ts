import {GameMode, Server} from "@sa-mp/core";

GameMode.on("init", () => {
    console.log("Network stats:");
    console.log();
    console.log(Server.getNetworkStats(1000));
});