function startApp(){navFixed(),createGallery(),scrollNav()}function scrollNav(){document.querySelectorAll(".main-nav a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))}function navFixed(){const e=document.querySelector(".header"),t=document.querySelector(".about-festival"),o=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<0?(e.classList.add("fixed"),o.classList.add("body-scroll")):(e.classList.remove("fixed"),o.classList.remove("body-scroll"))}))}function createGallery(){const e=document.querySelector(".images-gallery");for(let t=1;t<=12;t++){const o=document.createElement("picture");o.innerHTML=`\n          <source srcset="build/img/thumb/${t}.avif" type="image/avif" />\n          <source srcset="build/img/thumb/${t}.webp" type="image/webp" />\n          <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="Vocalist image" />\n     `,o.onclick=()=>{showImage(t)},e.appendChild(o)}}function showImage(e){const t=document.createElement("picture");t.innerHTML=`\n          <source srcset="build/img/grande/${e}.avif" type="image/avif" />\n          <source srcset="build/img/grande/${e}.webp" type="image/webp" />\n          <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="Vocalist image" />\n     `;const o=document.createElement("div");o.appendChild(t),o.classList.add("overlay"),o.onclick=()=>{document.querySelector("body").classList.remove("fix-body"),o.remove()};const n=document.createElement("p");n.textContent="X",n.classList.add("btn-close"),n.onclick=()=>{document.querySelector("body").classList.remove("fix-body"),o.remove()},o.appendChild(n);const c=document.querySelector("body");c.appendChild(o),c.classList.add("fix-body")}document.addEventListener("DOMContentLoaded",(function(){startApp()}));
//# sourceMappingURL=app.js.map
