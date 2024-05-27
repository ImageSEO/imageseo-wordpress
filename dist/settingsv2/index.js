(()=>{"use strict";var e={63:(e,t,a)=>{var n=a(609),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=n.useState,i=n.useEffect,l=n.useLayoutEffect,s=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!o(e,a)}catch(e){return!0}}var m="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var a=t(),n=r({inst:{value:a,getSnapshot:t}}),o=n[0].inst,m=n[1];return l((function(){o.value=a,o.getSnapshot=t,c(o)&&m({inst:o})}),[e,a,t]),i((function(){return c(o)&&m({inst:o}),e((function(){c(o)&&m({inst:o})}))}),[e]),s(a),a};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:m},888:(e,t,a)=>{e.exports=a(63)},609:e=>{e.exports=window.React}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e=a(609);const t=window.wp.components,n=window.wp.element,o=a.p+"images/default_logo.a24dbeff.png",r=window.wp.i18n,i=window.wp.apiFetch;var l=a.n(i);const s=async e=>await l()({path:e,method:"GET"}),c=async([e,t])=>(await l()({path:e,method:"POST",data:t})).data;var m=a(888);const u=()=>{},d=u(),g=Object,p=e=>e===d,_=e=>"function"==typeof e,f=(e,t)=>({...e,...t}),E=new WeakMap;let h=0;const R=e=>{const t=typeof e,a=e&&e.constructor,n=a==Date;let o,r;if(g(e)!==e||n||a==RegExp)o=n?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=E.get(e),o)return o;if(o=++h+"~",E.set(e,o),a==Array){for(o="@",r=0;r<e.length;r++)o+=R(e[r])+",";E.set(e,o)}if(a==g){o="#";const t=g.keys(e).sort();for(;!p(r=t.pop());)p(e[r])||(o+=r+":"+R(e[r])+",");E.set(e,o)}}return o},v=new WeakMap,y={},b={},w="undefined",S=typeof window!=w,C=typeof document!=w,T=(e,t)=>{const a=v.get(e);return[()=>!p(t)&&e.get(t)||y,n=>{if(!p(t)){const o=e.get(t);t in b||(b[t]=o),a[5](t,f(o,n),o||y)}},a[6],()=>!p(t)&&t in b?b[t]:!p(t)&&e.get(t)||y]};let x=!0;const[k,O]=S&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],L={isOnline:()=>x,isVisible:()=>{const e=C&&document.visibilityState;return p(e)||"hidden"!==e}},N={initFocus:e=>(C&&document.addEventListener("visibilitychange",e),k("focus",e),()=>{C&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{const t=()=>{x=!0,e()},a=()=>{x=!1};return k("online",t),k("offline",a),()=>{O("online",t),O("offline",a)}}},M=!e.useId,I=!S||"Deno"in window,P=I?e.useEffect:e.useLayoutEffect,A="undefined"!=typeof navigator&&navigator.connection,F=!I&&A&&(["slow-2g","2g"].includes(A.effectiveType)||A.saveData),B=e=>{if(_(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?R(e):"",t]};let z=0;const D=()=>++z;async function V(...e){const[t,a,n,o]=e,r=f({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{});let i=r.populateCache;const l=r.rollbackOnError;let s=r.optimisticData;const c=r.throwOnError;if(_(a)){const e=a,n=[],o=t.keys();for(const a of o)!/^\$(inf|sub)\$/.test(a)&&e(t.get(a)._k)&&n.push(a);return Promise.all(n.map(m))}return m(a);async function m(a){const[o]=B(a);if(!o)return;const[m,u]=T(t,o),[g,f,E,h]=v.get(t),R=()=>{const e=g[o];return(_(r.revalidate)?r.revalidate(m().data,a):!1!==r.revalidate)&&(delete E[o],delete h[o],e&&e[0])?e[0](2).then((()=>m().data)):m().data};if(e.length<3)return R();let y,b=n;const w=D();f[o]=[w,0];const S=!p(s),C=m(),x=C.data,k=C._c,O=p(k)?x:k;if(S&&(s=_(s)?s(O,x):s,u({data:s,_c:O})),_(b))try{b=b(O)}catch(e){y=e}if(b&&_(b.then)){if(b=await b.catch((e=>{y=e})),w!==f[o][0]){if(y)throw y;return b}y&&S&&(e=>"function"==typeof l?l(e):!1!==l)(y)&&(i=!0,u({data:O,_c:d}))}if(i&&!y)if(_(i)){const e=i(b,O);u({data:e,error:d,_c:d})}else u({data:b,error:d,_c:d});if(f[o][1]=D(),Promise.resolve(R()).then((()=>{u({_c:d})})),!y)return b;if(c)throw y}}const G=(e,t)=>{for(const a in e)e[a][0]&&e[a][0](t)},$=(e,t)=>{if(!v.has(e)){const a=f(N,t),n={},o=V.bind(d,e);let r=u;const i={},l=(e,t)=>{const a=i[e]||[];return i[e]=a,a.push(t),()=>a.splice(a.indexOf(t),1)},s=(t,a,n)=>{e.set(t,a);const o=i[t];if(o)for(const e of o)e(a,n)},c=()=>{if(!v.has(e)&&(v.set(e,[n,{},{},{},o,s,l]),!I)){const t=a.initFocus(setTimeout.bind(d,G.bind(d,n,0))),o=a.initReconnect(setTimeout.bind(d,G.bind(d,n,1)));r=()=>{t&&t(),o&&o(),v.delete(e)}}};return c(),[e,o,c,r]}return[e,v.get(e)[4]]},[W,H]=$(new Map),j=f({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,__,t,a,n)=>{const o=t.errorRetryCount,r=n.retryCount,i=~~((Math.random()+.5)*(1<<(r<8?r:8)))*t.errorRetryInterval;!p(o)&&r>o||setTimeout(a,i,n)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:F?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:F?5e3:3e3,compare:(e,t)=>R(e)==R(t),isPaused:()=>!1,cache:W,mutate:H,fallback:{}},L),U=(e,t)=>{const a=f(e,t);if(t){const{use:n,fallback:o}=e,{use:r,fallback:i}=t;n&&r&&(a.use=n.concat(r)),o&&i&&(a.fallback=f(o,i))}return a},K=(0,e.createContext)({}),Y=S&&window.__SWR_DEVTOOLS_USE__,q=Y?window.__SWR_DEVTOOLS_USE__:[],J=q.concat((e=>(t,a,n)=>e(t,a&&((...e)=>{const[n]=B(t),[,,,o]=v.get(W);if(n.startsWith("$inf$"))return a(...e);const r=o[n];return p(r)?a(...e):(delete o[n],r)}),n)));Y&&(window.__SWR_DEVTOOLS_REACT__=e);const X=e.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),Q={dedupe:!0},Z=(g.defineProperty((t=>{const{value:a}=t,n=(0,e.useContext)(K),o=_(a),r=(0,e.useMemo)((()=>o?a(n):a),[o,n,a]),i=(0,e.useMemo)((()=>o?r:U(n,r)),[o,n,r]),l=r&&r.provider,s=(0,e.useRef)(d);l&&!s.current&&(s.current=$(l(i.cache||W),r));const c=s.current;return c&&(i.cache=c[0],i.mutate=c[1]),P((()=>{if(c)return c[2]&&c[2](),c[3]}),[]),(0,e.createElement)(K.Provider,f(t,{value:i}))}),"defaultValue",{value:j}),ee=(t,a,n)=>{const{cache:o,compare:r,suspense:i,fallbackData:l,revalidateOnMount:s,revalidateIfStale:c,refreshInterval:u,refreshWhenHidden:g,refreshWhenOffline:E,keepPreviousData:h}=n,[R,y,b,C]=v.get(o),[x,k]=B(t),O=(0,e.useRef)(!1),L=(0,e.useRef)(!1),N=(0,e.useRef)(x),A=(0,e.useRef)(a),F=(0,e.useRef)(n),z=()=>F.current,G=()=>z().isVisible()&&z().isOnline(),[$,W,H,j]=T(o,x),U=(0,e.useRef)({}).current,K=p(l)?n.fallback[x]:l,Y=(e,t)=>{for(const a in U){const n=a;if("data"===n){if(!r(e[n],t[n])){if(!p(e[n]))return!1;if(!r(re,t[n]))return!1}}else if(t[n]!==e[n])return!1}return!0},q=(0,e.useMemo)((()=>{const e=!!x&&!!a&&(p(s)?!z().isPaused()&&!i&&(!!p(c)||c):s),t=t=>{const a=f(t);return delete a._k,e?{isValidating:!0,isLoading:!0,...a}:a},n=$(),o=j(),r=t(n),l=n===o?r:t(o);let m=r;return[()=>{const e=t($());return Y(e,m)?(m.data=e.data,m.isLoading=e.isLoading,m.isValidating=e.isValidating,m.error=e.error,m):(m=e,e)},()=>l]}),[o,x]),J=(0,m.useSyncExternalStore)((0,e.useCallback)((e=>H(x,((t,a)=>{Y(a,t)||e()}))),[o,x]),q[0],q[1]),Z=!O.current,ee=R[x]&&R[x].length>0,te=J.data,ae=p(te)?K:te,ne=J.error,oe=(0,e.useRef)(ae),re=h?p(te)?oe.current:te:ae,ie=!(ee&&!p(ne))&&(Z&&!p(s)?s:!z().isPaused()&&(i?!p(ae)&&c:p(ae)||c)),le=!!(x&&a&&Z&&ie),se=p(J.isValidating)?le:J.isValidating,ce=p(J.isLoading)?le:J.isLoading,me=(0,e.useCallback)((async e=>{const t=A.current;if(!x||!t||L.current||z().isPaused())return!1;let a,o,i=!0;const l=e||{},s=!b[x]||!l.dedupe,c=()=>M?!L.current&&x===N.current&&O.current:x===N.current,m={isValidating:!1,isLoading:!1},u=()=>{W(m)},g=()=>{const e=b[x];e&&e[1]===o&&delete b[x]},f={isValidating:!0};p($().data)&&(f.isLoading=!0);try{if(s&&(W(f),n.loadingTimeout&&p($().data)&&setTimeout((()=>{i&&c()&&z().onLoadingSlow(x,n)}),n.loadingTimeout),b[x]=[t(k),D()]),[a,o]=b[x],a=await a,s&&setTimeout(g,n.dedupingInterval),!b[x]||b[x][1]!==o)return s&&c()&&z().onDiscarded(x),!1;m.error=d;const e=y[x];if(!p(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return u(),s&&c()&&z().onDiscarded(x),!1;const l=$().data;m.data=r(l,a)?l:a,s&&c()&&z().onSuccess(a,x,n)}catch(e){g();const t=z(),{shouldRetryOnError:a}=t;t.isPaused()||(m.error=e,s&&c()&&(t.onError(e,x,t),(!0===a||_(a)&&a(e))&&(z().revalidateOnFocus&&z().revalidateOnReconnect&&!G()||t.onErrorRetry(e,x,t,(e=>{const t=R[x];t&&t[0]&&t[0](3,e)}),{retryCount:(l.retryCount||0)+1,dedupe:!0}))))}return i=!1,u(),!0}),[x,o]),ue=(0,e.useCallback)(((...e)=>V(o,N.current,...e)),[]);if(P((()=>{A.current=a,F.current=n,p(te)||(oe.current=te)})),P((()=>{if(!x)return;const e=me.bind(d,Q);let t=0;const a=((e,t,a)=>{const n=t[e]||(t[e]=[]);return n.push(a),()=>{const e=n.indexOf(a);e>=0&&(n[e]=n[n.length-1],n.pop())}})(x,R,((a,n={})=>{if(0==a){const a=Date.now();z().revalidateOnFocus&&a>t&&G()&&(t=a+z().focusThrottleInterval,e())}else if(1==a)z().revalidateOnReconnect&&G()&&e();else{if(2==a)return me();if(3==a)return me(n)}}));return L.current=!1,N.current=x,O.current=!0,W({_k:k}),ie&&(p(ae)||I?e():(n=e,S&&typeof window.requestAnimationFrame!=w?window.requestAnimationFrame(n):setTimeout(n,1))),()=>{L.current=!0,a()};var n}),[x]),P((()=>{let e;function t(){const t=_(u)?u($().data):u;t&&-1!==e&&(e=setTimeout(a,t))}function a(){$().error||!g&&!z().isVisible()||!E&&!z().isOnline()?t():me(Q).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[u,g,E,x]),(0,e.useDebugValue)(re),i&&p(ae)&&x){if(!M&&I)throw new Error("Fallback data is required when using suspense in SSR.");A.current=a,F.current=n,L.current=!1;const e=C[x];if(!p(e)){const t=ue(e);X(t)}if(!p(ne))throw ne;{const e=me(Q);p(re)||(e.status="fulfilled",e.value=!0),X(e)}}return{mutate:ue,get data(){return U.data=!0,re},get error(){return U.error=!0,ne},get isValidating(){return U.isValidating=!0,se},get isLoading(){return U.isLoading=!0,ce}}},function(...t){const a=f(j,(0,e.useContext)(K)),[n,o,r]=(e=>_(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}])(t),i=U(a,r);let l=ee;const{use:s}=i,c=(s||[]).concat(J);for(let e=c.length;e--;)l=c[e](l);return l(n,o||i.fetcher||null,i)});var ee;const te={options:"undefined"!=typeof imageSeoSettings?imageSeoSettings:{},global:"undefined"!=typeof imageSeoGlobal?imageSeoGlobal:{}},ae="SET_OPTIONS",ne="OPTIONS_MODIFIED",oe=(e,t)=>{switch(t.type){case ae:return{...e,options:{...e.options,...t.payload}};case ne:return{...e,optionsModified:t.payload};default:return e}},re=(0,n.createContext)(te),ie=({children:e})=>{const t=(0,n.useRef)(!0),[a,o]=(0,n.useState)([]),[i,s]=(0,n.useState)(!1),[c,m]=(0,n.useReducer)(oe,te),[u,d]=((e,t,a={leading:!1})=>{const[o,r]=(0,n.useState)(e),i=(0,n.useRef)(null),l=(0,n.useRef)(!0),s=()=>window.clearTimeout(i.current);return(0,n.useEffect)((()=>s),[]),[o,(0,n.useCallback)((e=>{s(),l.current&&a.leading?r(e):i.current=window.setTimeout((()=>{l.current=!0,r(e)}),t),l.current=!1}),[a.leading,t])]})(te.options,500),g=(0,n.useCallback)(((e,t=!1)=>{m({type:ae,payload:e}),t||(m({type:ne,payload:!0}),d({...c.options,...e}))}),[d,c.options]),p=(0,n.useCallback)((e=>{const t={id:(new Date).getTime(),...e,content:e?.content||"",politeness:e?.politeness||"polite",actions:e?.actions||[],explicitDismiss:e?.explicitDismiss||!1};o((e=>[...e,t]))}),[]),_=(0,n.useCallback)((e=>{o((t=>t.filter((t=>t.id!==e))))}),[]),f=(0,n.useMemo)((()=>({options:c.options,global:c.global,loading:i,setOptions:g,addNotice:p,removeNotice:_,notices:a})),[p,i,a,_,g,c.global,c.options]),E=(0,n.useMemo)((()=>u),[u]);return(0,n.useEffect)((()=>{t.current||c.optionsModified&&(async(e,t)=>{try{const{user:e,...a}=t;await l()({path:"imageseo/v1/settings",method:"POST",data:{...a}})}catch(e){console.error("Error saving settings:",e)}})(0,E).then((()=>{s(!1),p({status:"info",content:(0,r.__)("Options saved","imageseo")})})).catch((e=>{console.warn(e),p({status:"error",content:(0,r.__)("Error saving options","imageseo")}),s(!1)}))}),[p,E,c.optionsModified]),(0,n.useEffect)((()=>{t.current&&(t.current=!1)}),[]),React.createElement(re.Provider,{value:f},e)},le=()=>{const e=(0,n.useContext)(re);if(void 0===e)throw new Error("useSettings must be used within a SettingsProvider");return e},se=({heading:e,children:a,saveButton:i})=>{const{options:l}=le(),{data:s,isLoading:m}=(e=>{const[t,a]=(0,n.useState)(!0),{setOptions:o,addNotice:r}=le(),{data:i,error:l,isLoading:s,mutate:m}=Z([e?"/imageseo/v1/validate-api-key":null,{apiKey:e}],c,{onError:()=>{a(!1)},onSuccess:e=>{if(a(!1),e?.message)return o({allowed:!1}),void r({status:"error",content:e.message});o({allowed:!0},!0)}});return{data:i,error:l,isLoading:t,isFetching:s,mutate:m}})(l.apiKey),u=(0,n.useMemo)((()=>{if(m||!s)return 0;if("Invalid API Key"===s?.message)return 0;const{user:e}=s,t=e?.plan?.limitImages+e?.bonusStockImages-e?.currentRequestImages;return isNaN(t)?0:t}),[s,m]),d=(0,n.useCallback)((()=>{window.open("https://app.imageseo.com/plan/","_blank")}),[]);return React.createElement(t.Animate,{type:m?"loading":""},(({className:n})=>React.createElement(t.Card,null,React.createElement(t.CardHeader,null,React.createElement("div",{className:"header-container"},React.createElement("div",{className:"header"},React.createElement("img",{className:"logo",src:o,alt:"logo"}),React.createElement(t.__experimentalHeading,{align:"center"},e),React.createElement(t.ExternalLink,{className:"visit-website",href:"https://www.imageseo.com",target:"_blank"},(0,r.__)("Visit website","imageseo"))),React.createElement("div",{className:"cta"},React.createElement(t.__experimentalText,null,(0,r.__)("Remaining credits:","imageseo")," ",u),React.createElement("span",null,React.createElement(t.Button,{variant:"primary",onClick:d},(0,r.__)("Buy more!","imageseo")))))),React.createElement(t.CardBody,{className:n},a),React.createElement(t.CardFooter,null,React.createElement(t.__experimentalText,null,""),i&&React.createElement(t.Button,{type:"submit",variant:"secondary"},(0,r.__)("Save","imageseo"))))))},ce=()=>{const{options:e,global:a,setOptions:o,addNotice:i}=le(),[s,c]=(0,n.useState)(!1),[m,u]=(0,n.useState)(e?.allowed),[d,g]=(0,n.useState)(""),[p,_]=(0,n.useState)({firstName:a?.user?.firstName||"",lastName:a?.user?.lastName||"",email:a?.user?.email||"",password:"",terms:!1,news:!1}),f=async()=>{try{g(""),c(!0);const t=await l()({path:"/imageseo/v1/validate-api-key",method:"POST",data:{apiKey:e.apiKey}});if(void 0!==t?.data?.message)return o({allowed:!1}),g(t?.data?.message),c(!1),void i({status:"error",content:t?.data?.message});c(!1),o({allowed:!0}),i({status:"success",content:(0,r.__)("API key validated","imageseo")})}catch(e){c(!1),i({status:"error",content:(0,r.__)("Error validating API key","imageseo")}),console.error("Error validating API key:",e)}},E=async()=>{try{c(!0);const e=await l()({path:"/imageseo/v1/register",method:"POST",data:p});if(Object.prototype.hasOwnProperty.call(e,"success")&&!e?.success)throw new Error(Array.isArray(e?.data?.message)?e?.data?.message.join(","):e?.data?.message);if(e?.message)throw i({status:"error",content:e?.message}),new Error("Something went wrong");o({apiKey:e?.projects?.[0]?.apiKey,allowed:!0},!1),i({status:"success",content:(0,r.__)("Account created","imageseo")}),u(!0),c(!1)}catch(e){console.log(e),c(!1),i({status:"error",content:e.message}),console.error("Error registering account:",e)}},h=(e,t)=>{_({...p,[e]:t})};return React.createElement("div",{className:"welcome-screen"},React.createElement(t.__experimentalHeading,{order:3,lineHeight:2,align:"center"},(0,r.__)("Welcome to ImageSEO","imageseo")),React.createElement(t.__experimentalText,{align:"center"},(0,r.__)("We are happy to see you here! ImageSEO is a WordPress plugin that helps you to optimize your images for search engines and social media.","imageseo")),React.createElement(t.Animate,{type:s?"loading":""},(({className:a})=>React.createElement(React.Fragment,null,m?React.createElement("div",{className:`form-container ${a||""}`},React.createElement(t.TextControl,{label:(0,r.__)("API Key","imageseo"),value:e?.apiKey||"",onChange:e=>o({apiKey:e})}),React.createElement(t.Flex,{justifyContent:"spaceBetween"},React.createElement(t.FlexItem,null,React.createElement(t.Button,{disabled:s,isPrimary:!0,onClick:f},s?(0,r.__)("Validating…","imageseo"):(0,r.__)("Validate key","imageseo"))),!e?.allowed&&React.createElement(t.FlexItem,null,React.createElement(t.Button,{isTertiary:!0,onClick:()=>u(!1)},(0,r.__)("I want to register for a free account","imageseo"))),e?.allowed&&React.createElement(t.FlexItem,null,React.createElement(t.Icon,{icon:"yes",style:{color:"#52c41a"}}),React.createElement(t.__experimentalText,{variant:"muted"},(0,r.__)("API key validated","imageseo")))),d&&React.createElement(t.__experimentalText,{variant:"error"},d)):React.createElement("div",{className:`form-container ${a||""}`},React.createElement(t.TextControl,{label:(0,r.__)("First name","imageseo"),value:p.firstName,onChange:e=>h("firstName",e)}),React.createElement(t.TextControl,{label:(0,r.__)("Last name","imageseo"),value:p.lastName,onChange:e=>h("lastName",e)}),React.createElement(t.TextControl,{label:(0,r.__)("Email","imageseo"),type:"email",value:p.email,onChange:e=>h("email",e)}),React.createElement(t.TextControl,{type:"password",label:(0,r.__)("Password","imageseo"),value:p.password,onChange:e=>h("password",e)}),React.createElement(t.CheckboxControl,{label:(0,r.__)("I agree to the terms and conditions","imageseo"),help:React.createElement(t.__experimentalText,{variant:"muted"},(0,r.__)("By creating an account, you agree to our terms and conditions.","imageseo"),React.createElement(t.ExternalLink,{style:{marginLeft:5},href:"https://imageseo.io/terms-conditions/"},(0,r.__)("Read more","imageseo"))),checked:p.terms,onChange:e=>h("terms",e)}),React.createElement(t.CheckboxControl,{label:(0,r.__)("I want to receive news and updates","imageseo"),help:(0,r.__)("You can unsubscribe at any time","imageseo"),checked:p.news,onChange:e=>h("news",e)}),React.createElement(t.Flex,null,React.createElement(t.FlexItem,null,React.createElement(t.Button,{isPrimary:!0,disabled:s,onClick:E},(0,r.__)("Create account","imageseo"))),React.createElement(t.FlexItem,null,React.createElement(t.Button,{isTertiary:!0,disabled:s,onClick:()=>u(!0)},(0,r.__)("I already have an account","imageseo")))))))))},me=({id:e,label:a,help:o,value:i,onChange:l})=>{const[s,c]=(0,n.useState)(i),m=()=>{const e=wp.media({title:(0,r.__)("Select or Upload Media","imageseo"),button:{text:(0,r.__)("Use this item","imageseo")},multiple:!1});e.on("select",(()=>{const t=e.state().get("selection").first().toJSON();c(t.url),l(t.url)})),e.open()};return React.createElement("div",{className:"media-uploader-container",onClick:m},React.createElement(t.BaseControl,{id:e,label:a,help:o,className:"media-uploader"},!s&&React.createElement(t.Button,{isPrimary:!0,onClick:m},(0,r.__)("Select Image","imageseo")),s&&React.createElement("img",{src:s,alt:"Selected"})))},ue=()=>{const{options:e,setOptions:a}=le();return React.createElement("div",null,React.createElement(t.ToggleControl,{label:(0,r.__)("Subtitle","imageseo"),checked:e.socialMediaSettings?.visibilitySubTitle,onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,visibilitySubTitle:t}})},help:(0,r.__)("Show the price product or author depending on the page ( Product price (WooCommerce only) )","imageseo")}),React.createElement(t.ToggleControl,{label:(0,r.__)("Subtitle 2","imageseo"),checked:e.socialMediaSettings?.visibilitySubTitleTwo,onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,visibilitySubTitleTwo:t}})},help:(0,r.__)("Show the reading time of an article or the number of reviews (WooCommerce only).","imageseo")}),React.createElement(t.ToggleControl,{label:(0,r.__)("Stars rating","imageseo"),checked:e.socialMediaSettings?.visibilityRating,onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,visibilityRating:t}})},help:(0,r.__)("Show the stars linked to a review of your product for example.","imageseo")}),React.createElement(t.ToggleControl,{label:(0,r.__)("Author avatar","imageseo"),checked:e.socialMediaSettings?.visibilityAvatar,onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,visibilityAvatar:t}})},help:(0,r.__)("Only used for post content.","imageseo")}),React.createElement(t.__experimentalToggleGroupControl,{style:{width:300},value:e.socialMediaSettings?.layout||"CARD_LEFT",label:(0,r.__)("Layout","imageseo"),help:(0,r.__)("Choose the layout of the social card.","imageseo"),onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,layout:t}})}},React.createElement(t.__experimentalToggleGroupControlOption,{type:"button",value:"CARD_LEFT",label:(0,r.__)("Card left","imageseo")}),React.createElement(t.__experimentalToggleGroupControlOption,{type:"button",value:"CARD_RIGHT",label:(0,r.__)("Card right","imageseo")})),React.createElement(t.__experimentalToggleGroupControl,{value:e.socialMediaSettings?.textAlignment||"top",onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,textAlignment:t}})},label:(0,r.__)("Text alignment","imageseo")},React.createElement(t.__experimentalToggleGroupControlOption,{type:"button",value:"top",label:(0,r.__)("Top","imageseo")}),React.createElement(t.__experimentalToggleGroupControlOption,{type:"button",value:"center",label:(0,r.__)("Center","imageseo")}),React.createElement(t.__experimentalToggleGroupControlOption,{type:"button",value:"bottom",label:(0,r.__)("Bottom","imageseo")})),React.createElement(t.__experimentalGrid,{columns:3},React.createElement(t.BaseControl,{id:"text-color",label:(0,r.__)("Text color","imageseo")},React.createElement(t.ColorPicker,{defaultValue:e.socialMediaSettings?.textColor||"#000000",onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,textColor:t}})}})),React.createElement(t.BaseControl,{id:"background-color",label:(0,r.__)("Background color","imageseo")},React.createElement(t.ColorPicker,{defaultValue:e.socialMediaSettings?.contentBackgroundColor||"#ffffff",onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,contentBackgroundColor:t}})}})),e.socialMediaSettings?.visibilityRating&&React.createElement(t.BaseControl,{id:"star-color",label:(0,r.__)("Star color","imageseo")},React.createElement(t.ColorPicker,{defaultValue:e.socialMediaSettings?.starColor||"#F8CA00",onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,starColor:t}})}}))),React.createElement(me,{label:(0,r.__)("Logo","imageseo"),value:e?.socialMediaSettings?.logoUrl,help:(0,r.__)("Click to upload a logo","imageseo"),onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,logoUrl:t}})}}),React.createElement(t.__experimentalDivider,{style:{marginTop:15,marginBottom:15}}),React.createElement(me,{label:(0,r.__)("Background image","imageseo"),value:e?.socialMediaSettings?.defaultBgImg,help:(0,r.__)("Click to upload a background Image","imageseo"),onChange:t=>{a({...e,socialMediaSettings:{...e.socialMediaSettings,defaultBgImg:t}})}}))},de=a.p+"images/avatar-default.00d4ecf9.jpg",ge=({color:e})=>React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:e||"rgb(248, 202, 0)",stroke:e||"rgb(248, 202, 0)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-star"},React.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})),pe=()=>{const{options:e}=le(),a=e?.socialMediaSettings||{},{layout:n,defaultBgImg:o,logoUrl:i,textColor:l,visibilitySubTitle:s,visibilitySubTitleTwo:c,visibilityRating:m,visibilityAvatar:u,contentBackgroundColor:d,starColor:g}=a;return React.createElement("div",{className:"previewer"},"CARD_LEFT"===n&&React.createElement("div",{className:"bg-image",style:{backgroundImage:`url(${o})`}}),React.createElement("div",{className:"content",style:{backgroundColor:d}},React.createElement("div",{className:"padded"},React.createElement("img",{src:i,alt:"logo",className:"logo"}),React.createElement(t.__experimentalHeading,{level:2,lineHeight:1.5,style:{color:l}},(0,r.__)("Lorem ipsum (post title)","imageseo")),s&&React.createElement(t.__experimentalHeading,{level:3,lineHeight:1.5,style:{color:l}},(0,r.__)("Lorem ipsum (sub title)","imageseo")),c&&React.createElement(t.__experimentalHeading,{level:4,lineHeight:1.5,style:{color:l}},(0,r.__)("Lorem ipsum (sub title two)","imageseo")),u&&React.createElement("img",{src:de,alt:"default avatar",className:"avatar"}),m&&React.createElement("div",null,React.createElement(ge,{color:g}),React.createElement(ge,{color:g}),React.createElement(ge,{color:g}),React.createElement(ge,{color:g}),React.createElement(ge,{color:g})))),"CARD_RIGHT"===n&&React.createElement("div",{className:"bg-image",style:{backgroundImage:`url(${o})`}}))},_e=()=>{const{loading:e}=le();return React.createElement(t.Animate,{type:e?"loading":""},(({className:e})=>React.createElement("div",{className:`${e||""} social-card-screen`},React.createElement(ue,null),React.createElement(pe,null))))},fe=()=>{const[e,t]=(0,n.useState)(!0),{data:a,error:o,isLoading:r,mutate:i}=Z("/imageseo/v1/image-query",s,{onError:()=>{t(!1)},onSuccess:()=>{t(!1)},revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1});return{data:a,error:o,isLoading:e,isFetching:r,mutate:i}},Ee=()=>{const{options:e,setOptions:a,global:n}=le(),{mutate:o}=fe();return React.createElement("div",{className:"form"},React.createElement(t.SelectControl,{label:(0,r.__)("Images to optimize","imageseo"),value:e?.altFilter||"ALL",onChange:e=>{a({altFilter:e}),o()},options:(n.altSpecification||[]).map((e=>({value:e.id,label:e.label})))}),React.createElement(t.SelectControl,{label:(0,r.__)("Optimize alt text","imageseo"),value:e?.altFill||"FILL_ALL",onChange:e=>{a({altFill:e}),o()},options:[{value:"FILL_ALL",label:(0,r.__)("Optimize all ALT texts","imageseo")},{value:"FILL_ONLY_EMPTY",label:(0,r.__)("Optimize only missing ALT texts","imageseo")}]}),React.createElement(t.ToggleControl,{checked:e?.optimizeFile,onChange:e=>{a({optimizeFile:e})},label:(0,r.__)("Rename files","imageseo")}))},he=()=>{const[e,t]=(0,n.useState)(!0),{data:a,error:o,isLoading:r,mutate:i}=Z("/imageseo/v1/get-bulk-optimizer-status",s,{onError:()=>{t(!1)},onSuccess:()=>{t(!1)},refreshInterval:1e4});return{data:a,error:o,isLoading:e,isFetching:r,mutate:i}},Re=()=>{const{global:e,options:a,addNotice:o}=le(),{data:i,isLoading:s,error:c,mutate:m}=he(),{data:u,mutate:d}=fe(),g=async()=>{await l()({path:"/imageseo/v1/start-bulk-optimizer",method:"POST"}),m(),o({status:"success",content:(0,r.__)("Optimizer started","imageseo")})},p=(0,n.useMemo)((()=>i?.report?.errors?.length>0&&void 0!==i?.report?.errors?.find((e=>"You have reached the limit of images to optimize"===e.trim()))),[i?.report?.errors]);return s?React.createElement(t.Placeholder,{className:"optimizer",icon:"update",label:(0,r.__)("Loading","imageseo"),instructions:(0,r.__)("Loading…","imageseo")}):c?React.createElement(t.Placeholder,{className:"optimizer",icon:"warning",label:(0,r.__)("Error","imageseo"),instructions:(0,r.__)("An error occurred while fetching the optimizer status.","imageseo")}):"idle"===i?.status&&p?React.createElement("div",{className:"optimizer"},React.createElement(t.__experimentalText,null,(0,r.__)("You have reached the limit of images to optimize.","imageseo")),React.createElement(t.__experimentalSpacer,{marginY:"5"}),React.createElement(t.Button,{isPrimary:!0,disabled:"running"===i?.status,onClick:g},(0,r.__)("Try again","imageseo"))):React.createElement("div",{className:"optimizer"},"idle"===i?.status&&React.createElement(React.Fragment,null,"NEXTGEN_GALLERY"===a?.altFilter&&React.createElement(t.__experimentalText,null,(0,r.sprintf)((0,r.__)("There are %1$s images in your NEXTGEN library and %2$s don't have an alternative text.","imageseo"),e.bulkQuery.ids.length||0,e.bulkQuery.nonOptimized.length||0)),"NEXTGEN_GALLERY"!==a?.altFilter&&React.createElement(t.__experimentalText,null,(0,r.sprintf)((0,r.__)("There are %1$s images in your media library and %2$s don't have an alternative text.","imageseo"),u?.totalImages||0,u?.totalNoAlt||0)),React.createElement(t.__experimentalSpacer,{marginY:"5"}),React.createElement(t.Button,{isPrimary:!0,disabled:"running"===i?.status,onClick:g},(0,r.__)("Start optimization","imageseo"))),"running"===i?.status&&React.createElement("div",{className:"progress"},React.createElement(t.__experimentalText,null,(0,r.sprintf)((0,r.__)("Optimizing %1$s images. ( %2$s/%3$s )","imageseo"),i?.report?.total,i?.report?.optimized,i?.report?.total)),React.createElement("progress",{value:i?.report?.optimized/i?.report?.total*100,max:100}),React.createElement(t.__experimentalSpacer,{marginY:"3"}),React.createElement(t.Button,{isPrimary:!0,onClick:async()=>{await l()({path:"/imageseo/v1/stop-bulk-optimizer",method:"POST"}),m(),d(),o({status:"success",content:(0,r.__)("Optimizer stopped","imageseo")})}},(0,r.__)("Stop optimizer","imageseo"))))},ve=()=>{const{loading:e}=le(),{data:a}=he();return React.createElement(t.Animate,{type:e?"loading":""},(({className:e})=>React.createElement("div",{className:`${e||""}`},React.createElement(t.__experimentalDivider,{style:{marginTop:15,marginBottom:15}}),React.createElement(t.__experimentalHeading,{level:4},"running"===a?.status?(0,r.__)("Current report","imageseo"):(0,r.__)("Last report","imageseo")),React.createElement(t.__experimentalText,null,(0,r.__)("Optimized: ","imageseo")," ",a?.report.optimized),React.createElement("br",null),React.createElement(t.__experimentalText,null,(0,r.__)("Skipped: ","imageseo")," ",a?.report.skipped),React.createElement("br",null),React.createElement(t.__experimentalText,null,(0,r.__)("Failed: ","imageseo")," ",a?.report.failed))))},ye=()=>{const{loading:e}=le();return React.createElement(t.Animate,{type:e?"loading":""},(({className:e})=>React.createElement(React.Fragment,null,React.createElement("div",{className:`${e||""} bulk-optimizer-screen`},React.createElement(Ee,null),React.createElement(Re,null)),React.createElement(ve,null))))},be=()=>{const{options:e,global:a,setOptions:o}=le(),i=(0,n.useMemo)((()=>{const t=e?.defaultLanguageIa||a?.currentLanguage||"en";return t.includes("_")?t.split("_")[0]:t}),[a?.currentLanguage,e?.defaultLanguageIa]);return React.createElement("div",null,React.createElement(t.__experimentalHeading,{level:4,lineHeight:2},(0,r.__)("On-upload optimization","imageseo")),React.createElement(t.ToggleControl,{label:(0,r.__)("Fill alt","imageseo"),help:(0,r.__)("The plugin will automatically write an alternative to the images you will upload.","imageseo"),checked:e.activeAltWriteUpload,onChange:e=>o({activeAltWriteUpload:e})}),React.createElement(t.ToggleControl,{label:(0,r.__)("Rename files","imageseo"),help:(0,r.__)("The plugin will automatically rewrite with SEO friendly content the name of the images you will upload.","imageseo"),checked:e.activeRenameWriteUpload,onChange:e=>o({activeRenameWriteUpload:e})}),React.createElement(t.SelectControl,{label:(0,r.__)("Language","imageseo"),options:a.languages||[],onChange:e=>{o({defaultLanguageIa:e})},value:i}),React.createElement(t.__experimentalDivider,{style:{marginTop:15,marginBottom:15}}),React.createElement(t.__experimentalHeading,{level:4,lineHeight:2},(0,r.__)("Social media card generator","imageseo")),React.createElement(t.__experimentalText,{style:{marginBottom:15,display:"inline-block"}},(0,r.__)("Automatic generation for the following post types:","imageseo")),a?.allowedPostTypes?.map((a=>React.createElement("div",{key:a.value,style:{maxWidth:300}},React.createElement(t.ToggleControl,{__nextHasNoMarginBottom:!0,checked:(e?.socialMediaPostTypes||[]).includes(a.value),label:a.label,onChange:t=>((t,a)=>{a&&!(e?.socialMediaPostTypes||[]).includes(t)&&o({socialMediaPostTypes:[...e?.socialMediaPostTypes||[],t]}),!a&&(e?.socialMediaPostTypes||[]).includes(t)&&o({socialMediaPostTypes:(e?.socialMediaPostTypes||[]).filter((e=>e!==t))})})(a.value,t)})))))},we=()=>{const{loading:e}=le();return React.createElement(t.Animate,{type:e?"loading":""},(({className:e})=>React.createElement("div",{className:`${e||""} social-card-screen`},React.createElement(be,null))))},Se=()=>{const[e,a]=(0,n.useState)(!1),{data:o,isLoading:r}=Z("/imageseo/v1/optimizer-errors",s,{refreshInterval:1e4}),{data:i,isLoading:l}=Z("/imageseo/v1/debug-info",s,{refreshInterval:1e4});return(0,n.useEffect)((()=>{localStorage.getItem("imageseo_debug_log")&&a(!0)}),[]),e?r?React.createElement(t.Spinner,null):React.createElement(React.Fragment,null,React.createElement("h4",null,"Error Log"),React.createElement("pre",null,JSON.stringify(o,null,2)),React.createElement("h4",null,"Debug Info"),React.createElement("pre",null,JSON.stringify(i,null,2))):null},Ce=new URLSearchParams(window.location.search).get("activeTab"),Te=localStorage.getItem("imageseo_debug_log");function xe(){const{options:e,notices:a,removeNotice:o}=le(),[i,l]=(0,n.useState)(Ce||"welcome");return React.createElement(React.Fragment,null,React.createElement(se,{heading:(0,r.__)("ImageSEO","imageseo")},React.createElement(t.__experimentalToggleGroupControl,{label:"",onChange:e=>{l(e);const t=new URL(window.location.href);t.searchParams.set("activeTab",e),window.history.replaceState(null,null,t)},value:i,isBlock:!0},React.createElement(t.__experimentalToggleGroupControlOption,{type:"button",value:"welcome",label:(0,r.__)("Welcome","imageseo")}),React.createElement(t.__experimentalToggleGroupControlOption,{disabled:!e?.allowed||!1,type:"button",value:"socialcard",label:(0,r.__)("Social card","imageseo")}),React.createElement(t.__experimentalToggleGroupControlOption,{disabled:!e?.allowed||!1,type:"button",value:"bulkoptimizer",label:(0,r.__)("Bulk optimization","imageseo")}),React.createElement(t.__experimentalToggleGroupControlOption,{disabled:!e?.allowed||!1,type:"button",value:"settings",label:(0,r.__)("Settings","imageseo")})),"welcome"===i&&React.createElement(ce,null),"socialcard"===i&&React.createElement(_e,null),"bulkoptimizer"===i&&React.createElement(ye,null),"settings"===i&&React.createElement(we,null)),Te&&React.createElement(Se,null),React.createElement(t.SnackbarList,{notices:a,onRemove:o}))}document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("imageseo-settings-v2");(0,n.createRoot)(e).render(React.createElement(ie,null,React.createElement(xe,null)))}))})()})();