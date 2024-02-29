var v=Object.defineProperty;var x=(h,t,e)=>t in h?v(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e;var y=(h,t,e)=>(x(h,typeof t!="symbol"?t+"":t,e),e);import{C as g}from"./current-dates-a267fa94.js";import{H as E}from"./hover-e283d302.js";import{M as I}from"./mobile-burger-menu-fc3612c9.js";class C{constructor(t){y(this,"slideIndex",0);y(this,"quotes",document.querySelectorAll(".quote"));var s,i;(s=document.getElementById("nextBtn"))==null||s.addEventListener("click",()=>this.nextQuote()),(i=document.getElementById("prevBtn"))==null||i.addEventListener("click",()=>this.prevQuote());const e=()=>{this.nextQuote(),setTimeout(e,t)};t&&setTimeout(e,t)}showQuote(t){this.quotes.forEach((e,s)=>{s===t?e.classList.add("active"):e.classList.remove("active")})}nextQuote(){var t;this.slideIndex++,this.slideIndex>=(((t=this.quotes)==null?void 0:t.length)||0)&&(this.slideIndex=0),this.showQuote(this.slideIndex)}prevQuote(){this.slideIndex--,this.slideIndex<0&&(this.slideIndex=this.quotes.length-1),this.showQuote(this.slideIndex)}}class S{constructor(){y(this,"smallCountries",["Israel","Malta","Malawi"]);y(this,"mediumCountries",["United Kingdom","Botswana","Zambia","Sweden"]);this.initMap()}initMap(){[{name:"South-Africa",code:"ZA",pathId:"ZA-2"},{name:"United States",code:"US",pathId:"Path_145-2"},{name:"Nigeria",code:"NG",pathId:"NG-2"},{name:"Australia",code:"AU",pathId:"Path_43-2"},{name:"Botswana",code:"BW",pathId:"BW-2"},{name:"Zambia",code:"ZM",pathId:"ZM-2"},{name:"Kenya",code:"KE",pathId:"KE-2"},{name:"India",code:"IN",pathId:"IN-2"},{name:"Sweden",code:"SE",pathId:"SE-2"},{name:"United Kingdom",code:"UK",pathId:"Path_81-2"},{name:"Malawi",code:"MW",pathId:"MW-2"},{name:"Malta",code:"MT",pathId:"Path_97-2"},{name:"Israel",code:"IL",pathId:"IL-2"}].forEach(e=>{this.setupHoverHandlersByPathId(e)})}setupHoverHandlersByPathId(t){const e=document.getElementById(t.pathId),s=document.getElementById("location-info");if(!e)return;const i=e.transform.baseVal.consolidate().matrix;e.classList.add("path-transition"),e.addEventListener("mouseenter",()=>{e.parentElement.appendChild(e);const n=e.getBBox(),o=n.x+n.width/2,r=n.y+n.height/2;e.style.transformOrigin=o+"px "+r+"px",e.setAttribute("fill","url(#pattern-"+t.code+")");const a=e.ownerSVGElement.createSVGTransform();this.smallCountries.includes(t.name)?a.setScale(3.6,3.6):this.mediumCountries.includes(t.name)?a.setScale(2.4,2.4):a.setScale(1.2,1.2);const c=i.multiply(a.matrix);e.transform.baseVal.initialize(e.ownerSVGElement.createSVGTransformFromMatrix(c));var u=document.getElementById("map-container");let l=document.createElement("div");l.style.position="absolute",l.style.top="0",l.style.left="0",l.style.right="0",l.style.margin="auto";let m=document.createElement("h4");m.textContent=t.name,m.style.textAlign="center",l.appendChild(m);let d=document.createElement("div");d.style.display="flex",d.style.justifyContent="space-between",l.appendChild(d),u!=null&&u.appendChild(l);let p=document.createElement("div");p.style.display="inline-block",p.style.marginRight="1rem",p.textContent="Consulting",d.appendChild(p);let f=document.createElement("div");f.style.display="inline-block",f.style.marginRight="1rem",f.textContent="System Solutions",d.appendChild(f);let w=document.createElement("div");w.textContent="Artificial intelligence",w.style.display="inline-block",d.appendChild(w),s==null||s.appendChild(m),s==null||s.appendChild(d),s&&(s.style.float="left")}),e.addEventListener("mouseleave",function(){for(e.setAttribute("fill","#27a8e0"),e.transform.baseVal.initialize(e.ownerSVGElement.createSVGTransformFromMatrix(i));s!=null&&s.firstChild;)s.firstChild.remove()})}}class b{init(){this.preloader(),this.heroAnimation(),this.checkScrollPosition(),this.initIndustryScroller(),this.initIndustryExpander(),this.initBioViewer(),this.updateDates(),new I().initMobileMenu(),new E(".card"),new C(5e3),new S}preloader(){document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("preloader");t&&setTimeout(function(){t.style.animation="bounce 2s infinite",setTimeout(function(){t.style.display="none"},1500)},700)})}heroAnimation(){const e=document.querySelector(".hero"),s=window.innerWidth>680;!e||!s||e.addEventListener("mousemove",i=>{const n=i.clientX-window.innerWidth/2,o=i.clientY-window.innerHeight/2,r=n/window.innerWidth*10,a=o/window.innerHeight*10;e.style.backgroundPosition=`${50+r}% ${60+a}%`})}checkScrollPosition(){let t=!1,e=0,s=0;$(".handle").on("mousedown",i=>{t=!0,e=i.clientY,s=parseInt($(".handle").css("top"))||0,$(".handle").css("cursor","grabbing")}),$(document).on("mousemove",i=>{var n,o;if(t){i.preventDefault();const r=i.clientY-e,a=s+r,c=window.innerHeight,u=c/6/2,l=c,m=Math.min(l,Math.max(u,a));$(".handle").css("top",m);const d=((o=(n=$("#our-work-section"))==null?void 0:n.offset())==null?void 0:o.top)||0,p=$("#our-work-section").outerHeight()||1,f=(m-u)/(l-u)*p+d;window.scrollTo(0,f)}}),$(document).on("mouseup",()=>{t=!1,$(".handle").css("cursor","grab")}),document.addEventListener("scroll",()=>{var m,d;const i=$(window).scrollTop()||0,n=(d=(m=$("#our-work-section"))==null?void 0:m.offset())==null?void 0:d.top,o=$("#our-work-section").outerHeight();if(!i||!n||!o)return;const r=n+o-o/6;i>=n&&i<=r?$(".section-progress").addClass("is-visible"):$(".section-progress").removeClass("is-visible");const a=window.innerHeight,c=a/6/2,u=a,l=(i-n)/o*(u-c)+c;$(".handle").css("top",l)})}initIndustryScroller(){const t=document.querySelector(".motion-scroller"),e=document.querySelector(".motion-scroller > .viewport");!t||!e||t.addEventListener("mousemove",s=>{const i=s.clientX,n=e.offsetWidth,o=e.scrollWidth,r=i/n*o-n/2;e.scrollLeft=r})}initIndustryExpander(){if(window.innerWidth<=640){const t=document.querySelectorAll(".item");t.forEach(e=>{const s=e.querySelector(".title");s&&s.addEventListener("click",i=>{i.preventDefault(),t.forEach(n=>{n==e?n.classList.toggle("open"):n.classList.remove("open")})})})}}updateDates(){const t=new g;t.current(),t.yearsSince()}initBioViewer(){$(document).on("click",".js-bio-more",s=>{const n=$(s.target).closest(".a-member");n.hasClass("is-expanded")?n.removeClass("is-expanded"):n.addClass("is-expanded"),n.children().each(function(){var o=n.children(".expanded-bio"),r=n.children(".read-more"),a=n.children(".read-less"),c=n.children(".readMe");n.hasClass("is-expanded")?(o.removeClass("x-none"),o.addClass("y-display"),a.css("display","block"),r.css("display","none"),c.addClass("x-none")):(o.addClass("x-none"),o.removeClass("y-display"),a.css("display","none"),r.css("display","block"),c.removeClass("x-none"))})});var t=window.matchMedia("(max-width: 912px)");function e(s){s.matches||["y-display","x-none","is-expanded"].forEach(i=>{const n=document.querySelector(`.${i}`);n&&n.classList.remove(i)})}t.addEventListener("change",e),e(t)}}const M=new b;M.init();