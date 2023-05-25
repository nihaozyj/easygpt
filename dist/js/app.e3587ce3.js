(function(){"use strict";var e={5429:function(e,t,n){n.a(e,(async function(e,o){try{n(7658);var r=n(3396),a=n(7139),i=n(4870),c=n(2483),u=n(2325),s=n(9733),l=n(7877),d=n(2922),f=e([l]);l=(f.then?(await f)():f)[0];const p=e=>((0,r.dD)("data-v-6e306abd"),e=e(),(0,r.Cn)(),e),m=p((()=>(0,r._)("br",null,null,-1))),h={class:"message-count"},v={class:"message-scroll"},g={class:"content"},y={key:0,class:"item user"},b={class:"editor"},w={class:"form"};t.Z={__name:"Chat",setup(e){const t=(0,c.tv)(),n=(0,i.qj)({isShow:!1,actions:[{name:"复制文本"},{name:"删除记录"}],text:"",id:""}),o=(0,i.qj)({}),f=(0,i.qj)({id:0,dialog:[],role:{}}),p=(0,i.iH)(""),S=(0,i.iH)(!1);let _=null;const x=u.I;async function k(e){if(e.name==n.actions[0].name){const e=navigator.clipboard;if(void 0==e)return(0,s.CF)("复制失败，你的浏览器不支持改功能！");await e.writeText(n.text),(0,s.CF)("消息文本已复制到剪贴板！")}else if(e.name==n.actions[1].name&&!S.value){const e=f.dialog.findIndex((e=>e.date==n.id));f.dialog.splice(e,1),(0,s.CF)("删除成功！")}}function O(e,t){n.isShow=!0,n.text=e,n.id=t}function j(e,t,n,o){const r=f.dialog.length-1;return t?(S.value=!1,f.dialog[r].text="错误，请检查你的秘钥和网络！",void _.scrollBy(0,_.maxScrollY-_.y)):n?S.value=!1:S.value?(f.dialog[r].text+=e,void _.scrollBy(0,_.maxScrollY-_.y)):o.abort()}async function C(){const e=p.value.trim();if(""==e)return;if(S.value)return S.value=!1;p.value="",f.dialog.push({date:Date.now(),role:"user",text:e}),f.dialog.push({date:Date.now()+2e3,role:"system",text:""}),_.scrollBy(0,_.maxScrollY-_.y),S.value=!0;const t=[{role:"user",content:f.role.dialog},{role:"user",content:e}];await(0,l.lW)(t,j)}return(0,r.YP)(f,(async()=>{const e=JSON.stringify(f);localStorage.history=e,await(0,l.uA)(JSON.parse(e)),_.refresh()})),(0,r.ic)((()=>{_.refresh()})),(0,r.bv)((()=>{if(!localStorage.history)return t.replace("/home");const e=JSON.parse(localStorage.history);if(f.id=e.id,f.role=e.role,f.dialog=e.dialog,_=new d.ZP(".message-scroll",{}),setTimeout((()=>_.scrollTo(0,_.maxScrollY,500)),10),localStorage.setting){const e=JSON.parse(localStorage.setting);o.theme=e.theme,o.fontSize=e.fontSize,o.historyNumber=e.historyNumber}})),(e,c)=>{const u=(0,r.up)("van-icon"),s=(0,r.up)("van-nav-bar"),l=(0,r.up)("v-md-preview"),d=(0,r.up)("van-divider"),_=(0,r.up)("van-loading"),j=(0,r.up)("van-field"),E=(0,r.up)("van-button"),N=(0,r.up)("van-action-sheet");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:(0,a.C_)(["container",o.theme?"bright":"dark"]),style:(0,a.j5)("font-size:"+o.fontSize+"em")},[(0,r.Wm)(s,{onClickLeft:c[0]||(c[0]=e=>(0,i.SU)(t).replace("/home")),onClickRight:c[1]||(c[1]=e=>(0,i.SU)(t).push("/setting"))},{left:(0,r.w5)((()=>[(0,r.Wm)(u,{name:"arrow-left",size:"24"})])),title:(0,r.w5)((()=>[(0,r._)("span",null,(0,a.zw)(f.role.name),1),m,(0,r._)("span",h,"共 "+(0,a.zw)(f.dialog.length)+" 条对话",1)])),right:(0,r.w5)((()=>[(0,r.Wm)(u,{name:"setting",size:"24"})])),_:1}),(0,r._)("div",v,[(0,r._)("div",g,[""!=f.role.dialog?((0,r.wg)(),(0,r.iD)("div",y,[(0,r.Wm)(l,{text:f.role.dialog},null,8,["text"])])):(0,r.kq)("",!0),""!=f.role.dialog?((0,r.wg)(),(0,r.j4)(d,{key:1,style:{color:"#1989fa","border-color":"#1989fa"}},{default:(0,r.w5)((()=>[(0,r.Uk)("上方为预设消息")])),_:1})):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.dialog,((e,t)=>(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{class:(0,a.C_)(["item",e.role]),key:e.date},[(0,r.Wm)(l,{text:e.text},null,8,["text"]),S.value&&t==f.dialog.length-1?((0,r.wg)(),(0,r.j4)(_,{key:0,type:"spinner",size:"16px"})):(0,r.kq)("",!0)],2)),[[(0,i.SU)(x),()=>O(e.text,e.date)]]))),128))])]),(0,r._)("div",b,[(0,r._)("div",w,[(0,r.Wm)(j,{modelValue:p.value,"onUpdate:modelValue":c[2]||(c[2]=e=>p.value=e),rows:"1",autosize:"",type:"textarea",placeholder:"输入内容"},null,8,["modelValue"]),(0,r.Wm)(E,{icon:S.value?"stop-circle":"icon/send.png",type:S.value?"warning":"primary",class:"btn-send",onClick:C},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(S.value?"停止":"发送"),1)])),_:1},8,["icon","type"])])])],6),(0,r.Wm)(N,{disabled:S.value,onSelect:k,show:n.isShow,"onUpdate:show":c[3]||(c[3]=e=>n.isShow=e),actions:n.actions,"close-on-click-action":""},null,8,["disabled","show","actions"])],64)}}},o()}catch(p){o(p)}}))},7877:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{RC:function(){return m},XO:function(){return p},cm:function(){return f},lW:function(){return u},sb:function(){return c},uA:function(){return d}});n(7658);var r=n(6539),a=n(9733);function c(){const{baseUrl:e,key:t}=JSON.parse(localStorage.setting),n=new XMLHttpRequest;return n.open("GET",`${e}/dashboard/billing/credit_grants`,!0),n.setRequestHeader("Content-Type","application/json"),n.setRequestHeader("Authorization",`Bearer ${t}`),n.send(),new Promise(((e,t)=>{n.onreadystatechange=function(){if(4===n.readyState&&200===n.status)return e(JSON.parse(n.responseText))}}))}async function u(e,t){const{baseUrl:n,key:o,model:a,temperature:i,maxToken:c}=JSON.parse(localStorage.setting),u=new AbortController,s="POST",l={"Content-Type":"application/json",Authorization:`Bearer ${o}`,"x-api2d-no-cache":1},d=JSON.stringify({model:a,messages:e,stream:!0,temperature:i,max_tokens:c});await(0,r.L)(`${n}/v1/chat/completions`,{headers:l,method:s,body:d,signal:u.signal,onmessage(e){try{const n=JSON.parse(e.data).choices[0].delta.content||"";t(n,null,!1,u)}catch{t(null,null,!0,u)}},onerror(e){t(null,e,!1,u)}})}const s={db_name:"easegpt",store_name:"history",db_version:1,createStoreObj:null};async function l(){if(null!=s.createStoreObj)return;const e=await new Promise(((e,t)=>{const n=indexedDB.open(s.db_name,s.db_version);n.onerror=function(){(0,a.CF)("你的浏览器不支持 indexedDB\n\n因此无法读取和储存聊天消息!"),t(null)},n.onsuccess=function(t){e(t.target.result)},n.onupgradeneeded=function(e){const t=e.target.result;t.createObjectStore(s.store_name,{keyPath:"id"})}}));s.createStoreObj=()=>e.transaction([s.store_name],"readwrite").objectStore(s.store_name)}async function d(e){const t=s.createStoreObj();return t.put(e),await new Promise(((e,n)=>{t.onsuccess=()=>e(!0),t.onerror=()=>n(!1)}))}async function f(e){const t=s.createStoreObj(),n=t.delete(e);return await new Promise(((e,t)=>{n.onsuccess=t=>e(!0),n.onerror=e=>t(!1)}))}async function p(e){const t=s.createStoreObj(),n=t.add(e);return await new Promise(((e,t)=>{n.onsuccess=()=>e(!0),n.onerror=()=>t(!1)}))}async function m(){const e=s.createStoreObj();return await new Promise(((t,n)=>{const o=[];e.openCursor().onsuccess=e=>{const n=e.target.result;n?(o.push(n.value),n.continue()):t(o)},e.onerror=()=>n([])}))}await l(),o()}catch(i){o(i)}}),1)},866:function(e,t,n){n.a(e,(async function(e,t){try{var o=n(9242),r=n(483),a=n(6085),i=n(1120),c=n(9498),u=n.n(c),s=n(654),l=n.n(s),d=n(5792),f=(n(5110),e([i]));i=(f.then?(await f)():f)[0];const p=(0,o.ri)(r.Z);u().use(l(),{Hljs:d.Z}),p.use(u()),p.use(i.Z),(0,a.Z)(p),p.mount("#app"),t()}catch(p){t(p)}}))},1120:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(2483),a=n(5017),i=e([a]);a=(i.then?(await i)():i)[0];const c=[{path:"/",component:a.Z},{path:"/home",component:()=>n.e(263).then(n.bind(n,4263))},{path:"/setting",component:()=>n.e(297).then(n.bind(n,3297))},{path:"/preinstall",component:()=>n.e(58).then(n.bind(n,8058))},{path:"/create-session",component:()=>n.e(924).then(n.bind(n,2924))}];t.Z=(0,r.p7)({history:(0,r.r5)(),routes:c}),o()}catch(c){o(c)}}))},2325:function(e,t,n){n.d(t,{I:function(){return o},p:function(){return r}});const o={beforeMount(e,t,n){if("function"!==typeof t.value){const e=n.context;let o=`[longpress:] provided expression '${t.expression}' is not a function, but has to be `;e&&(o+=`Found in component '${e}' `),console.warn(o)}let o=null;const r=e=>{t.value(e)},a=e=>{"click"!==e.type&&null===o&&(o=setTimeout((()=>{r(e)}),500))},i=()=>{null!==o&&(clearTimeout(o),o=null)};document.oncontextmenu=function(e){return e.preventDefault(),!1},e.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),e.addEventListener("mousedown",a),e.addEventListener("touchstart",a),e.addEventListener("click",i),e.addEventListener("mouseout",i),e.addEventListener("mousemove",i),e.addEventListener("touchend",i),e.addEventListener("touchcancel",i),e.addEventListener("touchmove",i)}};function r(e=Date.now(),t="YYYY/MM/DD hh:mm:ss"){const n=new Date(e),o=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0"),i=String(n.getHours()).padStart(2,"0"),c=String(n.getMinutes()).padStart(2,"0"),u=String(n.getSeconds()).padStart(2,"0");return t=t.replace("YYYY",o),t=t.replace("MM",r),t=t.replace("DD",a),t=t.replace("hh",i),t=t.replace("mm",c),t=t.replace("ss",u),t}},6085:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(9545),r=n(9420),a=n(3548),i=n(316),c=n(3875),u=n(9470),s=n(3855),l=n(6305),d=n(1160),f=n(2691),p=n(1719),m=n(4035),h=n(4250),v=n(7679),g=n(6035),y=n(5331),b=n(2229);const w=[o.zx,r.l2,a.gN,i.JO,c.Vp,u.Y8,s.od,l.GI,d.Vb,f.iz,p.HY,m.P8,h.bL,v.iR,g.rs,y.TS,b.gb];function S(e){w.forEach((t=>{e.use(t)}))}},483:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(3396);function r(e,t,n,r,a,i){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(c)}var a={name:"App",components:{}},i=n(89);const c=(0,i.Z)(a,[["render",r]]);var u=c},5017:function(e,t,n){n.a(e,(async function(e,o){try{var r=n(6204),a=(n(9985),n(89)),i=e([r]);r=(i.then?(await i)():i)[0];const c=(0,a.Z)(r.Z,[["__scopeId","data-v-6e306abd"]]);t.Z=c,o()}catch(c){o(c)}}))},9985:function(){},6204:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return r.Z}});var r=n(5429),a=e([r]);r=(a.then?(await a)():a)[0],o()}catch(i){o(i)}}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=function(e){e&&!e.d&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},a=function(n){return n.map((function(n){if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((function(e){i[t]=e,r(a)}),(function(e){i[o]=e,r(a)}));var i={};return i[e]=function(e){e(a)},i}}var c={};return c[e]=function(){},c[t]=n,c}))};n.a=function(n,i,c){var u;c&&((u=[]).d=1);var s,l,d,f=new Set,p=n.exports,m=new Promise((function(e,t){d=t,l=e}));m[t]=p,m[e]=function(e){u&&e(u),f.forEach(e),m["catch"]((function(){}))},n.exports=m,i((function(n){var r;s=a(n);var i=function(){return s.map((function(e){if(e[o])throw e[o];return e[t]}))},c=new Promise((function(t){r=function(){t(i)},r.r=0;var n=function(e){e!==u&&!f.has(e)&&(f.add(e),e&&!e.d&&(r.r++,e.push(r)))};s.map((function(t){t[e](n)}))}));return r.r?c:i()}),(function(e){e?d(m[o]=e):l(p),r(u)})),u&&(u.d=0)}}(),function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{58:"becebdf7",263:"9a79d5b4",297:"27ea237b",924:"9eafce9b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{58:"66c3cb83",263:"9ad89295",297:"e85d1213",924:"5afa2c72"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="easygpt:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={58:1,263:1,297:1,924:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var l=u(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkeasygpt"]=self["webpackChunkeasygpt"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(866)}));o=n.O(o)})();
//# sourceMappingURL=app.e3587ce3.js.map