import{start}from'../app.mjs';await start(async()=>({ready(){},calls:{open:async()=>{throw Error('Unknown desktop method');}}}));
