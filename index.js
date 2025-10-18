import{a as f,S as h,i as d}from"./assets/vendor-Bfy0RakM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const m="52683370-9ae3cf283454fd0e20897a7f1",y="https://pixabay.com/api/",g={image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:36};function v(e){if(!e||typeof e!="string")return Promise.reject(new Error("Invalid query parameter"));const r={key:m,q:e,...g};return f.get(y,{params:r}).then(i=>i.data.hits).catch(i=>{throw console.error("API Error:",i.message),i})}const u=document.querySelector(".loader"),p=document.querySelector(".gallery"),L=new h(".gallery-link",{captionsData:"alt",captionDelay:250});function w(e){const r=e.map(i=>P(i)).join("");p.insertAdjacentHTML("beforeend",r),L.refresh()}function P(e){return`
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
  `}function S(){p.innerHTML=""}function E(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}d.settings({timeout:4e3,theme:"dark",position:"topRight",resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX"});const n=e=>d.show({message:[e]}),a=document.querySelector(".form"),I=a.elements["search-text"];a.addEventListener("submit",b);function b(e){e.preventDefault(),O(),a.reset()}function O(){const e=I.value.trim();if(!e){n("&#128269; enter the query to search");return}S(),E(),v(e).then(r=>{if(l(),r.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}w(r)}).catch(r=>{l(),n("Failed to fetch images. Please try again later."),console.log(r)})}
//# sourceMappingURL=index.js.map
