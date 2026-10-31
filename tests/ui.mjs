import{start}from'../app.mjs';
let listener;const channel={self:{id:'a',name:'Alex',epoch:'a1'},participants:[{id:'b',name:'Robin',epoch:'b1',ready:true,audio:true,video:false}],iceServers:[],on(fn){listener=fn;return()=>{};},async join(){return{self:this.self,participants:this.participants};},async ready(){},async send(){},async leave(){return{participants:this.participants};},async close(){}};
await start(async()=>({ready(){},calls:{open:async()=>channel}}),{media:{getUserMedia:async()=>{throw Object.assign(Error('Proof fixture uses no real hardware'),{name:'NotAllowedError'});}}});
