(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6356,714],{6493:(t,e,a)=>{"use strict";a.d(e,{GL:()=>c,Ag:()=>r,xq:()=>u,oy:()=>h});var o=a(23406),s=a(49e3),n=a(40870),l=a(21332),d=a(75736),i=a(91985);class c extends d.y{constructor(t){super(),this.doc=t,this.clientID=t.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval((()=>{const t=n.ZG();null!==this.getLocalState()&&15e3<=t-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const e=[];this.meta.forEach(((a,o)=>{o!==this.clientID&&3e4<=t-a.lastUpdated&&this.states.has(o)&&e.push(o)})),e.length>0&&r(this,e,"timeout")}),l.GW(3e3)),t.on("destroy",(()=>{this.destroy()})),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(t){const e=this.clientID,a=this.meta.get(e),o=void 0===a?0:a.clock+1,s=this.states.get(e);null===t?this.states.delete(e):this.states.set(e,t),this.meta.set(e,{clock:o,lastUpdated:n.ZG()});const l=[],d=[],c=[],r=[];null===t?r.push(e):null==s?null!=t&&l.push(e):(d.push(e),i.Hi(s,t)||c.push(e)),(l.length>0||c.length>0||r.length>0)&&this.emit("change",[{added:l,updated:c,removed:r},"local"]),this.emit("update",[{added:l,updated:d,removed:r},"local"])}setLocalStateField(t,e){const a=this.getLocalState();null!==a&&this.setLocalState({...a,[t]:e})}getStates(){return this.states}}const r=(t,e,a)=>{const o=[];for(let a=0;a<e.length;a++){const s=e[a];if(t.states.has(s)){if(t.states.delete(s),s===t.clientID){const e=t.meta.get(s);t.meta.set(s,{clock:e.clock+1,lastUpdated:n.ZG()})}o.push(s)}}o.length>0&&(t.emit("change",[{added:[],updated:[],removed:o},a]),t.emit("update",[{added:[],updated:[],removed:o},a]))},u=(t,e,a=t.states)=>{const s=e.length,n=o.Mf();o.uE(n,s);for(let l=0;l<s;l++){const s=e[l],d=a.get(s)||null,i=t.meta.get(s).clock;o.uE(n,s),o.uE(n,i),o.uw(n,JSON.stringify(d))}return o._f(n)},h=(t,e,a)=>{const o=s.l1(e),l=n.ZG(),d=[],c=[],r=[],u=[],h=s.yg(o);for(let e=0;e<h;e++){const e=s.yg(o);let a=s.yg(o);const n=JSON.parse(s.kf(o)),h=t.meta.get(e),p=t.states.get(e),g=void 0===h?0:h.clock;(g<a||g===a&&null===n&&t.states.has(e))&&(null===n?e===t.clientID&&null!=t.getLocalState()?a++:t.states.delete(e):t.states.set(e,n),t.meta.set(e,{clock:a,lastUpdated:l}),void 0===h&&null!==n?d.push(e):void 0!==h&&null===n?u.push(e):null!==n&&(i.Hi(n,p)||r.push(e),c.push(e)))}(d.length>0||r.length>0||u.length>0)&&t.emit("change",[{added:d,updated:r,removed:u},a]),(d.length>0||c.length>0||u.length>0)&&t.emit("update",[{added:d,updated:c,removed:u},a])}},6588:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var o,s=a(67906),n=a(98838),l=a(43845),d=a(68883),i=a(8263),c=a(4341),r=a(67070);class u extends i.V{constructor(t){super("wss://demos.yjs.dev",t.guid,t.ymodel.ydoc)}requestInitialContent(){return Promise.resolve(!0)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(t){}}!function(t){t.download="docmanager:download"}(o||(o={}));const h=[{id:"@jupyterlite/application-extension:docprovider",provides:d.IDocumentProviderFactory,activate:t=>{const e=n.PageConfig.getOption("collaborative");return t=>e?new u(t):new d.ProviderMock}},{id:"@jupyterlite/application-extension:download",autoStart:!0,requires:[r.ITranslator,l.IDocumentManager],optional:[s.ICommandPalette,c.IMainMenu],activate:(t,e,a,n,l)=>{const d=e.load("jupyterlab"),{commands:i,shell:c}=t,r=()=>{const{currentWidget:t}=c;return!(!t||!a.contextForWidget(t))};i.addCommand(o.download,{label:d.__("Download"),caption:d.__("Download the file to your computer"),isEnabled:r,execute:()=>{const t=c.currentWidget;if(r()&&t){const e=a.contextForWidget(t);if(!e)return(0,s.showDialog)({title:d.__("Cannot Download"),body:d.__("No context found for current widget!"),buttons:[s.Dialog.okButton({label:d.__("OK")})]});const o=document.createElement("a");o.href=`data:text/json;charset=utf-8,${encodeURIComponent(e.model.toString())}`,o.download=e.path,document.body.appendChild(o),o.click(),document.body.removeChild(o)}}});const u=d.__("File Operations");n&&n.addItem({command:o.download,category:u}),l&&l.fileMenu.addGroup([{command:o.download}],6)}},{id:"@jupyterlite/application-extension:translator",activate:t=>new r.TranslationManager,autoStart:!0,provides:r.ITranslator}]}}]);
//# sourceMappingURL=6356.bundle.js.map