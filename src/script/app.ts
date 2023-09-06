import { HoverEffect } from "./hover";
import { CurrentDates } from "./current-dates";
import { MobileBurgerMenu } from "./mobile-burger-menu";

export class App {
  init() {
    this.preloader()
    this.heroAnimation();
    this.initSlick();
    this.checkScrollPosition();
    this.initIndustryScroller()
    this.initIndustryExpander();
    this.initBioViewer();    
    this.updateDates();
    
    new MobileBurgerMenu().initMobileMenu();
    new HoverEffect(".card");
  }

  private preloader() {
    document.addEventListener("DOMContentLoaded", function() {
      const loadingScreen = document.getElementById("preloader");

      if(!loadingScreen ) return;
      setTimeout(function() {
        loadingScreen.style.animation = "bounce 2s infinite";
        setTimeout(function() {
          loadingScreen.style.display = "none";
        }, 1500); // Adjust the timing here to match the animation duration
      }, 700);

      
    });
    
  }

  private heroAnimation() {
    const maxDisplacement = 10;
    const hero = document.querySelector(".hero") as HTMLDivElement;

    const isDesktop = window.innerWidth > 680;
    if (!hero || !isDesktop) return;


    hero.addEventListener("mousemove", (evt) => {
      const x1 = evt.clientX - window.innerWidth / 2;
      const y1 = evt.clientY - window.innerHeight / 2;

      const x = (x1 / window.innerWidth) * maxDisplacement;
      const y = (y1 / window.innerHeight) * maxDisplacement;
      hero.style.backgroundPosition = `${50 + x}% ${60 + y}%`;
    });
  }

  private initSlick() {
    ($(".logo-slider") as any).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      arrows: false,
      autoplaySpeed: 0,
      variableWidth: true,

      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  private checkScrollPosition() {
    
    let isDragging = false;
    let startY = 0;
    let startTop = 0;

    
    $(".handle").on("mousedown", (e) => {
      isDragging = true;
      startY = e.clientY;
      startTop = parseInt($(".handle").css("top")) || 0;
      $('.handle').css('cursor', 'grabbing')
    });

   
    $(document).on("mousemove", (e) => {
      if (isDragging) {
        e.preventDefault();
        const offsetY = e.clientY - startY;
        const newTop = startTop + offsetY;

        const vh = window.innerHeight
        const minTop = (vh/6)/2;
        const maxTop = vh;
        const clampedTop = Math.min(maxTop, Math.max(minTop, newTop));

       
        $(".handle").css("top", clampedTop);

        
        const divisionSections = $("#division-sections")?.offset()?.top || 0;
        const divisionSectionsHeight = $("#division-sections").outerHeight() || 1;
        const scrollPosition = ((clampedTop - minTop) / (maxTop - minTop)) * divisionSectionsHeight + divisionSections;
        
        window.scrollTo(0, scrollPosition);
      }
    });

   
    $(document).on("mouseup", () => {
      isDragging = false;
      $('.handle').css('cursor', 'grab')

    });

    
    document.addEventListener("scroll", () => {
      const scroll = $(window).scrollTop() || 0;
      const divisionSections = $("#division-sections")?.offset()?.top;
      const divisionSectionsHeight = $("#division-sections").outerHeight();

      if (!scroll || !divisionSections || !divisionSectionsHeight) {
        return;
      }

      const divisionSectionsBottom = divisionSections + divisionSectionsHeight - divisionSectionsHeight / 6;
      if (scroll >= divisionSections && scroll <= divisionSectionsBottom) {
        $(".section-progress").addClass("is-visible");
      } else {
        $(".section-progress").removeClass("is-visible");
      }

      const vh = window.innerHeight
      const firstPosition = (vh/6)/2;
      const lastPosition = vh;

      const currentPosition = ((scroll - divisionSections) / divisionSectionsHeight) * (lastPosition - firstPosition) + firstPosition;

      $(".handle").css("top", currentPosition);
    });
  }

  /**
   * Initialize industry scroller
   */
  private initIndustryScroller() {
    const motionScroller = document.querySelector(".motion-scroller") as HTMLDivElement;
    const motionScrollerViewport = document.querySelector(".motion-scroller > .viewport") as HTMLDivElement;
    if (!motionScroller || !motionScrollerViewport) return;

    motionScroller.addEventListener("mousemove", (evt) => {
      const x = evt.clientX;
      const viewportWidth = motionScrollerViewport.offsetWidth;
      const scrollWidth = motionScrollerViewport.scrollWidth;
      const scrollLeft = (x / viewportWidth) * scrollWidth - viewportWidth / 2;
      motionScrollerViewport.scrollLeft = scrollLeft;
    });
  }

  

  private initIndustryExpander() {
    if (window.innerWidth <= 640) { // mobile breakpoint
      const itemElements = document.querySelectorAll(".item");
      itemElements.forEach((item) => {
        const title = item.querySelector(".title");
  
        if (title) {

          title.addEventListener("click", (e) => {
            e.preventDefault();
            
            itemElements.forEach((itemInner)=>{
              if(itemInner == item){
                itemInner.classList.toggle("open")
              }else
              {
                itemInner.classList.remove('open')
              }
            })
          });
        }
      });
    }
  }
  

  

  // /**
  //  * Update dates
  //  */
  private updateDates() {
    const dates = new CurrentDates();
    dates.current();
    dates.yearsSince();
  }

  /**
   * Initialize bio viewer
   * @returns
   */
  initBioViewer() {
    $(document).on("click", ".js-bio-more", (el) => {
      const currentEl = $(el.target);
      const parent = currentEl.closest(".member");

      if (parent.hasClass("is-expanded")) {
        parent.removeClass("is-expanded");
        return;
      }
      parent.addClass("is-expanded");
    });
  }


}
