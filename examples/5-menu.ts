import {GameMode, Menu, Player} from "@sa-mp/core";

let menu: Menu;

GameMode.on("init", () => {
    menu = Menu.create({
        x: 100, 
        y: 200, 
        columns: 2,
        columnWidths: [100, 200],
        title: "My Title",
        headers: ["Header 1"],
        items: [
            "Item 1",
            {column: 1, text: "Item 2"},
            "Item 3"
        ]
    });
    menu.header("Header 2", 1);
    menu.add("Item 4", 1);
    menu.add("Item 5");
});

Player.on("connect", (player) => {
    menu.show(player);
});