import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";
export default class GameSavingLoader{

    async load(){
        const data = await read();
        const str = await json(data);
        return new GameSaving(JSON.parse(str));
    }

}

