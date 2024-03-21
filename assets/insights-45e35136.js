import{C as s}from"./current-dates-3e8b53d5.js";import{H as r}from"./hover-e283d302.js";import{M as a}from"./mobile-burger-menu-fc3612c9.js";class o{static init(){this.initMaterialInput(),new r(".responsibility",3,3),new a().initMobileMenu(),new s().current()}static initMaterialInput(){document.querySelectorAll(".form-control label").forEach(t=>{t.innerHTML=t.innerText.split("").map((e,n)=>`<span style="
                        transition-delay: ${n*50}ms
                    ">${e}</span>`).join("")})}}o.init();
