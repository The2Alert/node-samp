<br />
<p align="center">
    <a href="https://github.com/dev2alert/node-samp">
        <img src="https://raw.githubusercontent.com/dev2alert/node-samp/main/big-logo.png" width="250px" />
    </a>
</p>
<p align="center">
    Runtime environment Node.js in SA-MP.
</p>
<p align="center">
    <a href="https://github.com/dev2alert/node-samp/releases/"><img src="https://img.shields.io/github/v/release/dev2alert/node-samp" /></a>
    <a href="https://github.com/dev2alert/node-samp/releases/"><img src="https://img.shields.io/github/downloads/dev2alert/node-samp/total" /></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/static/v1?label=node&message=16.13.0&color=green" /></a>
    <a href="https://github.com/dev2alert/node-samp"><img src="https://img.shields.io/github/stars/dev2alert/node-samp?style=social" /></a>
    <a href="https://github.com/dev2alert/node-samp/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dev2alert/node-samp" /></a>
</p>

## Warning
<p>
    <b>Linux support will be restored soon!</b>
</p>

## Documentation
<p>
    Documentation is <a href="https://github.com/dev2alert/node-samp/wiki">here</a>.
</p>

## Getting started
Installation and start on TypeScript:
```
git clone https://github.com/dev2alert/node-samp-starter.git my-server
cd ./my-server
npm i
npm run compile
npm start
```
Installation and start on JavaScript:
```
git clone https://github.com/dev2alert/node-samp-javascript-starter.git my-server
cd ./my-server
npm i
npm start
```
Start in development mode:
```
npm run dev
```

## Example
Using Context API and TypeScript:
```typescript
import {Group, Keys, Player, Position, Vehicle, Weapons} from "@sa-mp/core";
import {Alt, Command, Context, Key, Param, ParamInt} from "@sa-mp/decorators";

@Context()
export class ModePlayer extends Player.Context {
    public readonly vehicles: Group<Vehicle> = new Group;

    public onConnect(): boolean {
        this.send(`Hello, ${this}!`);
        return true;
    }

    public onRequestClass(): void {
        this.spawnInfo({x: 1906.2207, y: -2429.4124, z: 13.5391, team: 0, skin: 68, rotation: 0, weapons: [{type: Weapons.AK47, ammo: 89}]});
        this.spawn();
    }

    public onDisconnect(): void {
        this.vehicles.destroy();
    }

    @Key(Keys.YES)
    public handleKeyYes(): void {
        this.spawn();
    }

    @Key(Keys.NO)
    public handleKeyNo(): void {
        this.vehicles.destroy();
    }

    @Command("spawn")
    @Alt("s")
    public spawnPlayer(): void {
        this.spawn();
    }

    @Command("pos")
    public setPosition(@Param() x: number, @Param() y: number, @Param() z: number): void {
        this.pos = {x, y, z};
    }

    @Command("veh")
    public createVehicle(@ParamInt() model: number, @ParamInt() color1: number, @ParamInt() color2: number): void {
        const {x, y, z}: Position = this.pos;
        const rotation: number = this.angle;
        const vehicle: Vehicle = Vehicle.create({x, y, z, model, colors: [color1, color2], rotation});
        if(this.isInAnyVehicle())
            this.vehicle.destroy();
        this.put(vehicle);
        this.vehicles.push(vehicle);
    }
}
```

## Credits
<ul>
    <li>
        <a href="https://github.com/AmyrAhmady/samp-node">samp-node</a> (<a href="https://github.com/AmyrAhmady">AmyrAhmady</a> and <a href="https://github.com/AmyrAhmady/samp-node#credits">others</a>) - their code helped create <a href="https://github.com/dev2alert/node-samp-plugin">plugin</a>.
    </li>
    <li>
        <a href="https://github.com/pkfln">pkfln</a> - invited to organization <a href="https://www.npmjs.com/org/sa-mp">@sa-mp</a> in <a href="https://www.npmjs.com/">npm</a>.
    </li>
</ul>

## Plans
<li>Updating <a href="https://nodejs.org/en/">Node.js</a> up to version 16.13.2!</li>
<li>Write documentation.</li>
<li>Add <a href="https://github.com/samp-incognito/samp-streamer-plugin">Streamer</a> support by creating the @sa-mp/streamer package.</li>
<li>Add support for <a href="https://jestjs.io/">Jest</a> testing by creating @sa-mp/testing package.</li>
<li>Add <a href="https://typeorm.io/">Typeorm</a> support by creating the @sa-mp/typeorm package.</li>
<li>Add <a href="https://github.com/CyberMor/sampvoice">SAMPVOICE</a> support by creating the @sa-mp/voice package.</li>
<li>Add <a href="https://github.com/ZOTTCE/samp-cef">SAMP CEF</a> support by creating the @sa-mp/cef package.</li>
<li>Create SA-MP Extension by creating the @sa-mp/ex package.</li>
<br />

> For now, it will remain a secret what exactly will expand :)

## License
<p>
    <a href="https://github.com/dev2alert/node-samp/blob/main/LICENSE">MIT</a>
</p>
