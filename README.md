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
    <a href="https://nodejs.org/"><img src="https://img.shields.io/static/v1?label=node&message=16.13.2&color=green" /></a>
    <a href="https://github.com/dev2alert/node-samp"><img src="https://img.shields.io/github/stars/dev2alert/node-samp?style=social" /></a>
    <a href="https://github.com/dev2alert/node-samp/blob/main/LICENSE"><img src="https://img.shields.io/github/license/dev2alert/node-samp" /></a>
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

## Todo list

- [x] Updating <a href="https://nodejs.org/en/">Node.js</a> up to version 16.13.2!<br />
- [x] Write documentation.
- [x] Add <a href="https://github.com/samp-incognito/samp-streamer-plugin">Streamer</a> plugin support.
- [ ] Add <a href="https://github.com/Zeex/samp-plugin-crashdetect">CrashDetect</a> plugin support.
- [ ] Add <a href="https://github.com/ziggi/FCNPC">FCNPC</a> plugin support.
- [ ] Add <a href="https://jestjs.io">Jest</a> testing support.
- [ ] Add <a href="https://typeorm.io">Typeorm</a> support.
- [ ] Add <a href="https://github.com/CyberMor/sampvoice">SAMPVOICE</a> plugin support.
- [ ] Add <a href="https://github.com/ZOTTCE/samp-cef">SAMP CEF</a> plugin support.
- [ ] Create SA-MP Extension.

## Supported plugins
<table align="center">
    <tr>
        <th>Package</th>
        <th>Plugin</th>
    </tr>
    <tr>
        <td>
            <a href="https://github.com/dev2alert/node-samp-streamer">
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=dev2alert&repo=node-samp-streamer" /> 
            </a>
        </td>
        <td>
            <a href="https://github.com/samp-incognito/samp-streamer-plugin">
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=samp-incognito&repo=samp-streamer-plugin" />
            </a>
        </td>
    </tr>
</table>

## Credits
<ul>
    <li>
        <a href="https://github.com/AmyrAhmady/samp-node">samp-node</a> (<a href="https://github.com/AmyrAhmady">AmyrAhmady</a> and <a href="https://github.com/AmyrAhmady/samp-node#credits">others</a>) - their code helped create <a href="https://github.com/dev2alert/node-samp-plugin">plugin</a>.
    </li>
    <li>
        <a href="https://github.com/pkfln">pkfln</a> - invited to organization <a href="https://www.npmjs.com/org/sa-mp">@sa-mp</a> in <a href="https://www.npmjs.com/">npm</a>.
    </li>
</ul>

## License
<p>
    <a href="https://github.com/dev2alert/node-samp/blob/main/LICENSE">MIT</a>
</p>
