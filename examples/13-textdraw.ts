import {GameMode, Group, Player, PlayerTextDraw, TextDraw} from "@sa-mp/core";

let welcomeTextdraw: TextDraw;

const textdraws: Group<TextDraw> = new Group(
    new TextDraw({text: "Text #1!", x: 300, y: 100, color: 0xf2630aAA}),
    new TextDraw({text: "Text #2!", x: 300, y: 150, color: 0xf2630aAA}),
    new TextDraw({text: "Text #3!", x: 300, y: 200, color: 0xf2630aAA}),
    new TextDraw({text: "Text #4!", x: 300, y: 250, color: 0xf2630aAA}),
    new TextDraw({text: "Text #5!", x: 300, y: 300, color: 0xf2630aAA})
);

GameMode.on("init", () => {
    welcomeTextdraw = TextDraw.create({text: "Welcome!", x: 300, y: 50, color: 0xf0c90aAA, backgroundColor: 0xf2630aAA});
    textdraws.create();
});

Player.on("connect", (player) => {
    welcomeTextdraw.show(player);
    textdraws.show(player);
    PlayerTextDraw.create({text: "Text #6!", x: 300, y: 350, color: 0xf0c90aAA}, player).show();
});