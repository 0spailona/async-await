import GameSavingLoader from "./GameSavingLoader";

(async () => {
   try {
       const member = new GameSavingLoader()
       member.load().then(saving => {
           console.log(`Загружен объект ${saving}`)
       })
   } catch {
       console.log('error')
   }
})();