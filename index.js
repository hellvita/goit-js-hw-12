import{a as O,S as q,i as h}from"./assets/vendor-Bfy0RakM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const I="52683370-9ae3cf283454fd0e20897a7f1",M="https://pixabay.com/api/",m=9,$={image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m};function y(e,r){if(!e||typeof e!="string")return Promise.reject(new Error("Invalid query parameter"));const i={key:I,q:e,page:r,...$};return O.get(M,{params:i})}const g=document.querySelector(".loader"),v=document.querySelector(".gallery"),R=new q(".gallery-link",{captionsData:"alt",captionDelay:250});function L(e){const r=e.map(i=>_(i)).join("");v.insertAdjacentHTML("beforeend",r),R.refresh()}function _(e){return`
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
  `}function x(){v.innerHTML=""}function E(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}h.settings({timeout:4e3,theme:"dark",position:"topRight",resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"});const n=e=>h.show({message:[e]}),f=document.querySelector(".form"),B=f.elements["search-text"],c=document.querySelector(".load-btn");let o=1,l=0,a="";f.addEventListener("submit",k);function k(e){e.preventDefault(),D(),f.reset()}async function D(){try{if(a=B.value.trim(),!a){n("&#128269; enter the query to search");return}x(),E(),o=1,S();const{data:e}=await y(a,o),r=e.hits;if(u(),r.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}L(r),l=Math.ceil(e.totalHits/m),l>1?w():A()}catch(e){b(e)}}async function P(){try{o++,S(),E();const{data:e}=await y(a,o),r=e.hits;if(u(),r.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}L(r),console.log("pagesAmount: ",l),console.log("currentPage: ",o),l>o?w():A()}catch(e){b(e)}}function w(){c.addEventListener("click",P),c.classList.remove("hidden")}function S(){c.removeEventListener("click",P),c.classList.add("hidden")}function b(e){u(),n("Failed to fetch images. Please try again later."),console.log(e)}function A(){n("We're sorry, but you've reached the end of search results.")}
//# sourceMappingURL=index.js.map
