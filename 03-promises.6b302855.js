function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");const l=document.querySelector(".form > button"),a=document.querySelector(".form");let u=document.querySelectorAll("input"),d={},s=0,c={intervalId:0,timeoutId:0},f=e=>l.disabled=e;startTimeout=()=>{c.timeoutId=setTimeout((()=>{createPromise(),startInterval()}),d.delay)},startInterval=()=>{c.intervalId=setInterval((()=>{createPromise()}),d.step)},createPromise=()=>{if(s++,s<=d.amount){Math.random()>.3?(console.log("ok"),e(i).Notify.success(`Fulfilled promise ${s} in ${d.step}ms`)):(console.log("not ok"),e(i).Notify.failure(`Rejected promise ${s} in ${d.step}ms`))}else cleaningTimer()},cleaningTimer=()=>{clearTimeout(c.intervalId),clearInterval(c.timeoutId)},l.addEventListener("click",(function(){event.preventDefault(),u.forEach((e=>d[e.getAttribute("name")]=e.value)),s=0,cleaningTimer(),startTimeout()})),a.addEventListener("change",(function(){for(const e of u)if(e.value<0||""==e.value)return f(!0);return f(!1)})),f(!0);
//# sourceMappingURL=03-promises.6b302855.js.map
