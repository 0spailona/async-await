import read from "./reader";
import json from "./parser";
export default class GameSavingLoader{

    async load(){
        const data = await read();
        const str = await json(data);
        return JSON.parse(str);
    }

}

