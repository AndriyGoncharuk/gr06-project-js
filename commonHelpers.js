import{A as y,S as b,N as w,a as h,i as p,K as S}from"./assets/vendor-33170e51.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const a={menuText:document.querySelector(".header-menu-text"),menuList:document.querySelector(".header-menu-list"),btnMob:document.querySelector(".header-btn-mob"),headerBackdrop:document.querySelector(".header-backdrop"),headerModalClose:document.querySelector(".header-modal-menu-close"),headerModalMenu:document.querySelector(".header-modal-menu"),btnTop:document.querySelector(".go-to-top")};a.menuText.addEventListener("click",k);function k(){a.menuList.classList.contains("is-open")?a.menuList.classList.remove("is-open"):a.menuList.classList.add("is-open")}a.btnMob.addEventListener("click",C);a.headerModalMenu.addEventListener("click",q);function C(){a.headerBackdrop.classList.add("is-open")}function q(e){e.target.nodeName!=="DIV"&&a.headerBackdrop.classList.remove("is-open")}a.btnTop.addEventListener("click",O);window.addEventListener("scroll",M);function M(){const e=window.scrollY;document.documentElement.clientHeight<e?a.btnTop.classList.add("is-open"):a.btnTop.classList.remove("is-open")}function O(){window.scrollTo({top:0,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",function(){new y(".accordion-container",{duration:300,elementClass:"faq-item",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:e=>{e.querySelector(".icon-answer use").setAttribute("href","./img/symbol-defs.svg#icon-up")},beforeClose:e=>{e.querySelector(".icon-answer use").setAttribute("href","./img/symbol-defs.svg#icon-down")}})});const m=document.querySelector(".reviews-section");if(m){let o=function(i){return i.map(l=>`
    <li class="reviews-card swiper-slide">
        <img class="reviews-card-img" src="${l.avatar_url}" alt="${l.author}'s avatar">
        <div class="reviews-card-data">
          <h3 class="reviews-card-name">${l.author}</h3>
          <p class="review-text">${l.review}</p>
        </div>
      </li>
  `).join("")};const e=m.querySelector(".reviews-cards"),t=m.querySelector(".reviews-btn-prev"),s=m.querySelector(".reviews-btn-next");async function c(i){const d="https://portfolio-js.b.goit.study/api"+"/reviews";try{return(await fetch(d)).json()}catch(u){return console.log(u),p.error({position:"topRight",message:"Not Found"}),[]}}async function n(){try{const i=await c();if(i.length>0){const l=o(i);e.insertAdjacentHTML("beforeend",l);const f=new b(m.querySelector(".swiper"),{modules:[w,h],breakpoints:{320:{slidesPerView:1,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},1440:{slidesPerView:4,spaceBetween:16,loop:!1}},autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});document.addEventListener("keydown",d=>{if(d.key==="ArrowRight")f.slideNext();else if(d.key==="ArrowLeft")f.slidePrev();else if(d.key==="Tab"){const u=document.activeElement;u===t?(d.preventDefault(),s.focus()):u===s&&(d.preventDefault(),t.focus())}})}else console.log("No reviews to display")}catch(i){console.log(i),p.error({position:"topRight",message:"Failed to load reviews"})}}n()}document.addEventListener("DOMContentLoaded",function(){new b(".projects-swiper-container",{modules:[w,h,S],loop:!1,keyboard:{enabled:!0},navigation:{nextEl:".projects-button-next",prevEl:".projects-button-prev"},autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:20,breakpoints:{1440:{slidesPerView:1,spaceBetween:30},768:{slidesPerView:1,spaceBetween:20}},on:{init:function(){e(this)},slideChange:function(){e(this)}}});function e(t){const s=document.querySelector(".projects-button-prev"),c=document.querySelector(".projects-button-next");t.isBeginning?s.disabled=!0:s.disabled=!1,t.isEnd?c.disabled=!0:c.disabled=!1}});const v="/gr06-project-js/assets/icon-error-40fa32d5.svg",r={contactForm:document.querySelector(".footer-form"),email:document.getElementById("user-email"),comments:document.getElementById("user-comment"),backdropEl:document.querySelector(".footer-backdrop"),modalEl:document.querySelector(".modal"),closeModalBtnEl:document.querySelector(".close-btn"),modalTitleEl:document.querySelector(".modal-title"),modalMessageEl:document.querySelector(".modal-message")};document.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded event fired");const e=localStorage.getItem("email"),t=localStorage.getItem("comment");console.log("Saved email:",e),console.log("Saved comment:",t),e&&(r.email.value=e),t&&(r.comments.value=t)});r.email.addEventListener("input",()=>{console.log("Email input event:",r.email.value),localStorage.setItem("email",r.email.value)});r.comments.addEventListener("input",()=>{console.log("Comments input event:",r.comments.value),localStorage.setItem("comment",r.comments.value)});r.contactForm.addEventListener("submit",async function(e){e.preventDefault();const t=r.email.value,s=r.comments.value;if(console.log("Form submitted with email:",t),console.log("Form submitted with comments:",s),!t||!s){p.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:"Please fill in both fields",messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:v});return}const c={email:t,comment:s};try{const n=await(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)})).json();console.log("Response data:",n),n.error?p.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${n.error}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:v}):(r.contactForm.reset(),localStorage.removeItem("email"),localStorage.removeItem("comment")),r.modalTitleEl.textContent=n.title,r.modalMessageEl.textContent=n.message,B()}catch(o){console.error("Error:",o),p.error({title:"Error!",titleSize:"16",titleColor:"var(--main-text-color)",message:`${o.message}`,messageSize:"16",messageColor:"var(--main-text-color)",backgroundColor:"var(--accent-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:v})}});function B(){r.backdropEl.classList.add("is-open"),x()}function g(){r.backdropEl.classList.remove("is-open"),T()}function x(){document.addEventListener("keydown",E),document.addEventListener("click",L)}function T(){document.removeEventListener("keydown",E),document.removeEventListener("click",L)}function E(e){e.key==="Escape"&&r.backdropEl.classList.contains("is-open")&&g()}function L(e){e.composedPath().includes(r.modalEl)||g()}r.closeModalBtnEl.addEventListener("click",g);new y(".about-me-accordion-container",{duration:400,showMultiple:!0});
//# sourceMappingURL=commonHelpers.js.map
