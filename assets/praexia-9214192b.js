import{C as r}from"./current-dates-3e8b53d5.js";import{H as a}from"./hover-e283d302.js";import{M as s}from"./mobile-burger-menu-fc3612c9.js";class o{static init(){this.initMaterialInput(),new a(".responsibility",3,3),new s().initMobileMenu(),new r().current()}static initMaterialInput(){document.querySelectorAll(".form-control label").forEach(t=>{t.innerHTML=t.innerText.split("").map((i,n)=>`<span style="
                        transition-delay: ${n*50}ms
                    ">${i}</span>`).join("")})}}o.init();
