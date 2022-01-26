import {GameMode, Group, Player, PlayerText3DLabel, Text3DLabel} from "@sa-mp/core";

let welcomeText: Text3DLabel;

const texts: Group<Text3DLabel> = new Group(
    new Text3DLabel({text: "Text #1!", x: 2607.6289, y: -2241.9854, z: 13.5469, drawDistance: 100, world: 0}),
    new Text3DLabel({text: "Text #2!", x: 2608.6289, y: -2241.9854, z: 13.5469, drawDistance: 100, world: 0}),
    new Text3DLabel({text: "Text #3!", x: 2609.6289, y: -2241.9854, z: 13.5469, drawDistance: 100, world: 0}),
    new Text3DLabel({text: "Text #4!", x: 2610.6289, y: -2241.9854, z: 13.5469, drawDistance: 100, world: 0})
);

GameMode.on("init", () => {
    Player.addClass({skin: 6, spawn: {x: 2606.6289, y: -2241.9854, z: 13.5469}, angle: 0, weapons: []});
    welcomeText = Text3DLabel.create({text: "Welcome!", x: 2606.6289, y: -2241.9854, z: 13.5469, drawDistance: 100, world: 0, color: 0xf0c90aAA});
    texts.create();
});

Player.on("connect", (player) => {
    PlayerText3DLabel.create({player, text: "Text #5!", x: 2611.6289, y: -2241.9854, z: 13.5469, drawDistance: 100});
});