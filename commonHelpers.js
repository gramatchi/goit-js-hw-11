import{i as c,S as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function l({largeImageURL:s,tags:o,likes:r,views:n,comments:e,downloads:t,webformatURL:i}){return`
      <a href="${s}" class="gallery__item">
        <div class="item-gallery">
          <img src="${i}" alt="${o}">
          <p>${o}</p>
          <p>Likes: ${r}</p>
          <p>Views: ${n}</p>
          <p>Comments: ${e}</p>
          <p>Downloads: ${t}</p>
        </div>
      </a>
    `}const u="https://pixabay.com/api/",f="45042882-3b5507a901f9feb9cee5f866e",m="photo",p="horizontal",h="true",d={method:"GET"};function g(s){const o=document.querySelector(".gallery");o.innerHTML="",fetch(`${u}?key=${f}&q=${s}&image_type=${m}&orientation=${p}&safesearch=${h}`,d).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(r.hits.forEach(e=>{const t=l(e);o.insertAdjacentHTML("beforeend",t)}),c.success({title:"Success",message:"Here we are"}),new a(".gallery a").refresh())}).catch(r=>{c.error({title:"Error",message:`Oooops ${r.message}`}),console.log(r)})}const y=document.querySelector(".js-search-btn"),$=document.querySelector(".js-search-input");y.addEventListener("click",()=>{const s=$.value;s.trim()!==""?g(s):c.warning({title:"Warning",message:"Please enter a search query!"})});
//# sourceMappingURL=commonHelpers.js.map
