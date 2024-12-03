(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const x={description:"Soulwrite is your digital personal diary. Write, think and keep your thoughts in total privacy.",description_2:"Main features:",feature_1:"Encryption of your entries",feature_2:"Clean and intuitive interface",feature_3:"Transparency and privacy",last_text:"Version 0.1.0",btn_text:"Download"},B={description:"Soulwrite est votre journal intime numérique personnel. Écrivez, réfléchissez et gardez vos pensées en toute confidentialité.",description_2:"Fonctionnalités principales :",feature_1:"Chiffrement de vos entrées",feature_2:"Interface intuitive",feature_3:"Transparence et confidentialité",last_text:"Version 0.1.0",btn_text:"Telecharger"},g={en:x,fr:B};/**
 * @license lucide v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(e,t,o=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{i.setAttribute(n,String(t[n]))}),o.length&&o.forEach(n=>{const r=f(...n);i.appendChild(r)}),i};var L=([e,t,o])=>f(e,t,o);/**
 * @license lucide v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=e=>Array.from(e.attributes).reduce((t,o)=>(t[o.name]=o.value,t),{}),T=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",M=e=>e.flatMap(T).map(o=>o.trim()).filter(Boolean).filter((o,i,n)=>n.indexOf(o)===i).join(" "),S=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,o,i)=>o.toUpperCase()+i.toLowerCase()),m=(e,{nameAttr:t,icons:o,attrs:i})=>{var u;const n=e.getAttribute(t);if(n==null)return;const r=S(n),s=o[r];if(!s)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const c=_(e),[v,I,w]=s,l={...I,"data-lucide":n,...i,...c},d=M(["lucide",`lucide-${n}`,c,i]);d&&Object.assign(l,{class:d});const b=L([v,l,w]);return(u=e.parentNode)==null?void 0:u.replaceChild(b,e)};/**
 * @license lucide v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=["svg",a,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=["svg",a,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=["svg",a,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=({icons:e={},nameAttr:t="data-lucide",attrs:o={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(n=>m(n,{nameAttr:t,icons:e,attrs:o})),t==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(r=>m(r,{nameAttr:"icon-name",icons:e,attrs:o})))}};document.getElementById("lang").addEventListener("change",()=>{localStorage.setItem("settings",JSON.stringify({theme:document.body.classList.contains("dark")?"dark":"light",lang:document.getElementById("lang").value}));const e=document.getElementById("lang").value,t=g[e];document.getElementById("feature1").innerText=t.feature_1,document.getElementById("feature2").innerText=t.feature_2,document.getElementById("feature3").innerText=t.feature_3,document.getElementById("desc1").innerText=t.description,document.getElementById("desc2").innerText=t.description_2,document.getElementById("last_text").innerText=t.last_text,document.getElementById("btn_text").innerText=t.btn_text});document.addEventListener("DOMContentLoaded",N);function N(){if(localStorage.getItem("settings")){const o=JSON.parse(localStorage.getItem("settings"));document.getElementById("lang").value=o.lang,o.theme=="dark"?(document.body.classList.add("dark"),document.getElementById("toggle").innerHTML='<i data-lucide="sun"></i>'):(document.body.classList.add("light"),document.getElementById("toggle").innerHTML='<i data-lucide="moon"></i>')}else{const o=window.matchMedia("(prefers-color-scheme: dark)").matches,i=document.body;o?(i.classList.add("dark"),document.getElementById("toggle").innerHTML='<i data-lucide="sun"></i>'):(i.classList.add("light"),document.getElementById("toggle").innerHTML='<i data-lucide="moon"></i>');const r=window.navigator.language.slice(0,2);document.getElementById("lang").value=r}const e=document.getElementById("lang").value,t=g[e];document.getElementById("feature1").innerText=t.feature_1,document.getElementById("feature2").innerText=t.feature_2,document.getElementById("feature3").innerText=t.feature_3,document.getElementById("desc1").innerText=t.description,document.getElementById("desc2").innerText=t.description_2,document.getElementById("last_text").innerText=t.last_text,document.getElementById("btn_text").innerText=t.btn_text,E({icons:{Download:y,Moon:p,Sun:h}})}document.getElementById("toggle").addEventListener("click",()=>{const e=document.body;e.classList.contains("dark")?(localStorage.setItem("settings",JSON.stringify({theme:"light",lang:document.getElementById("lang").value})),e.classList.remove("dark"),e.classList.add("light"),document.getElementById("toggle").innerHTML='<i data-lucide="moon"></i>'):(localStorage.setItem("settings",JSON.stringify({theme:"dark",lang:document.getElementById("lang").value})),e.classList.remove("light"),e.classList.add("dark"),document.getElementById("toggle").innerHTML='<i data-lucide="sun"></i>'),E({icons:{Download:y,Moon:p,Sun:h}})});
