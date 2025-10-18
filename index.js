import{a as O,S as A,i as m}from"./assets/vendor-Bfy0RakM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const H="52683370-9ae3cf283454fd0e20897a7f1",I="https://pixabay.com/api/",y=9,B={image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y};function g(e,r){if(!e||typeof e!="string")return Promise.reject(new Error("Invalid query parameter"));const s={key:H,q:e,page:r,...B};return O.get(I,{params:s})}const v=document.querySelector(".loader"),L=document.querySelector(".gallery"),c=document.querySelector(".load-btn"),R=new A(".gallery-link",{captionsData:"alt",captionDelay:250});function E(e){const r=e.map(s=>$(s)).join("");L.insertAdjacentHTML("beforeend",r),R.refresh()}function $(e){return`
    <li class="gallery-card">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
      <div class="card-description">
        <div class="description-item">
          <h2 class="description-title">Likes</h2>
          <p class="description-value">${e.likes}</p>
        </div>
        <div class="description-item">
          <h2 class="description-title">Views</h2>
          <p class="description-value">${e.views}</p>
        </div>
        <div class="description-item">
          <h2 class="description-title">Comments</h2>
          <p class="description-value">${e.comments}</p>
        </div>
        <div class="description-item">
          <h2 class="description-title">Downloads</h2>
          <p class="description-value">${e.downloads}</p>
        </div>
      </div>
    </li>
  `}function _(){L.innerHTML=""}function b(){v.classList.remove("hidden")}function h(){v.classList.add("hidden")}function P(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}function w(e){c.addEventListener("click",e)}function x(e){c.removeEventListener("click",e)}function G(){const s=document.querySelector(".gallery-card").getBoundingClientRect().height*2;scrollBy({top:s,behavior:"smooth"})}m.settings({timeout:4e3,theme:"dark",position:"topRight",resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"});const n=e=>m.show({message:[e]}),f=document.querySelector(".form"),k=f.elements["search-text"];let i=1,d=0,a="";f.addEventListener("submit",C);function C(e){e.preventDefault(),D(),f.reset()}async function D(){try{if(a=k.value.trim(),!a){n("&#128269; enter the query to search");return}i=1,S(),_(),b();const{data:e}=await g(a,i),r=e.hits;if(h(),r.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}E(r),d=Math.ceil(e.totalHits/y),d>1?(P(),w(u)):q()}catch(e){M(e)}}async function u(){try{i++,S(),x(u),b();const{data:e}=await g(a,i),r=e.hits;if(h(),r.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}E(r),G(),d>i?(P(),w(u)):q()}catch(e){M(e)}}function M(e){h(),n("Failed to fetch images. Please try again later."),console.log(e)}function q(){n("We're sorry, but you've reached the end of search results.")}
//# sourceMappingURL=index.js.map
