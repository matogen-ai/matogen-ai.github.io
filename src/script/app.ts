import { Carousel } from "./carousel";
import { CurrentDates } from "./current-dates";
import { HoverEffect } from "./hover";
import { MobileBurgerMenu } from "./mobile-burger-menu";
import { SvgMap } from "./svg-map";

export class App {
  init() {
    this.preloader();
    this.heroAnimation();
    // this.initSlick();
    this.checkScrollPosition();
    this.initIndustryScroller();
    this.initIndustryExpander();
    this.initBioViewer();
    this.updateDates();

    new MobileBurgerMenu().initMobileMenu();
    new HoverEffect(".card");
    new Carousel(5000);
    new SvgMap();
  }

  private preloader() {
    document.addEventListener("DOMContentLoaded", function () {
      const loadingScreen = document.getElementById("preloader");

      if (!loadingScreen) return;
      setTimeout(function () {
        loadingScreen.style.animation = "bounce 2s infinite";
        setTimeout(function () {
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

  // private initSlick() {
  //   ($(".logo-slider") as any).slick({
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 3000,
  //     arrows: false,
  //     autoplaySpeed: 0,
  //     variableWidth: true,

  //     responsive: [
  //       {
  //         breakpoint: 1100,
  //         settings: {
  //           slidesToShow: 4,
  //         },
  //       },
  //       {
  //         breakpoint: 680,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 580,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });
  // }

  private checkScrollPosition() {
    let isDragging = false;
    let startY = 0;
    let startTop = 0;

    $(".handle").on("mousedown", (e) => {
      isDragging = true;
      startY = e.clientY;
      startTop = parseInt($(".handle").css("top")) || 0;
      $(".handle").css("cursor", "grabbing");
    });

    $(document).on("mousemove", (e) => {
      if (isDragging) {
        e.preventDefault();
        const offsetY = e.clientY - startY;
        const newTop = startTop + offsetY;

        const vh = window.innerHeight;
        const minTop = vh / 6 / 2;
        const maxTop = vh;
        const clampedTop = Math.min(maxTop, Math.max(minTop, newTop));

        $(".handle").css("top", clampedTop);

        const divisionSections = $("#our-work-section")?.offset()?.top || 0;
        const divisionSectionsHeight =
          $("#our-work-section").outerHeight() || 1;
        const scrollPosition =
          ((clampedTop - minTop) / (maxTop - minTop)) * divisionSectionsHeight +
          divisionSections;

        window.scrollTo(0, scrollPosition);
      }
    });

    $(document).on("mouseup", () => {
      isDragging = false;
      $(".handle").css("cursor", "grab");
    });

    document.addEventListener("scroll", () => {
      const scroll = $(window).scrollTop() || 0;
      const divisionSections = $("#our-work-section")?.offset()?.top;
      const divisionSectionsHeight = $("#our-work-section").outerHeight();

      if (!scroll || !divisionSections || !divisionSectionsHeight) {
        return;
      }

      const divisionSectionsBottom =
        divisionSections + divisionSectionsHeight - divisionSectionsHeight / 6;
      if (scroll >= divisionSections && scroll <= divisionSectionsBottom) {
        $(".section-progress").addClass("is-visible");
      } else {
        $(".section-progress").removeClass("is-visible");
      }

      const vh = window.innerHeight;
      const firstPosition = vh / 6 / 2;
      const lastPosition = vh;

      const currentPosition =
        ((scroll - divisionSections) / divisionSectionsHeight) *
          (lastPosition - firstPosition) +
        firstPosition;

      $(".handle").css("top", currentPosition);
    });
  }

  /**
   * Initialize industry scroller
   */
  private initIndustryScroller() {
    const motionScroller = document.querySelector(
      ".motion-scroller"
    ) as HTMLDivElement;
    const motionScrollerViewport = document.querySelector(
      ".motion-scroller > .viewport"
    ) as HTMLDivElement;
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
    if (window.innerWidth <= 640) {
      // mobile breakpoint
      const itemElements = document.querySelectorAll(".item");
      itemElements.forEach((item) => {
        const title = item.querySelector(".title");

        if (title) {
          title.addEventListener("click", (e) => {
            e.preventDefault();

            itemElements.forEach((itemInner) => {
              if (itemInner == item) {
                itemInner.classList.toggle("open");
              } else {
                itemInner.classList.remove("open");
              }
            });
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
      //blah - sit terug
      // const parent = currentEl.closest(".member");
      const parent = currentEl.closest(".a-member");

      if (parent.hasClass("is-expanded")) {
        parent.removeClass("is-expanded");
        //return;
      } else {
        parent.addClass("is-expanded");
      }

      parent.children().each(function () {
        var expandedBioCard = parent.children(".expanded-bio");
        var readMoreButton = parent.children(".read-more");
        var readLessButton = parent.children(".read-less");
        var readMeSection = parent.children(".readMe");

        if (parent.hasClass("is-expanded")) {
          //word groter. Readme moet hide en bio moet wys

          //expandedBioCard.css("display", "block");
          expandedBioCard.removeClass("x-none");
          expandedBioCard.addClass("y-display");

          readLessButton.css("display", "block");
          readMoreButton.css("display", "none");

          // hide readMe deel ook hier
          //readme section moet hide as readme button geclick word
          //readMeSection.css("display", "none");
          readMeSection.addClass("x-none");
          //readMeSection.removeClass("y-display");
        } else {
          //hy word kleiner. Read me moet terug kom en bio moet hide!!!!!!!

          //expandedBioCard.css("display", "none");
          expandedBioCard.addClass("x-none");
          expandedBioCard.removeClass("y-display");
          readLessButton.css("display", "none");
          readMoreButton.css("display", "block");
          //readMeSection.css("display", "block");
          readMeSection.removeClass("x-none");
          //expandedBioCard.addClass("x-display")

          //readMeSection.removeClass("y-display");
          //readMeSection.addClass("y-display");
        }
      });
    });

    // Define the media query
    var mediaQuery = window.matchMedia("(max-width: 912px)");

    // Define a function that applies styles based on the media query
    function applyStyles(e: any) {
      if (e.matches) {
        // If the media query is true, apply the styles
        document.body.style.backgroundColor = "black";
      } else {
        debugger;
        const bio = e.closest(".expanded-bio");
        // If the media query is false, apply different styles or remove the styles
        document.body.style.backgroundColor = "brown";
      }
    }

    // Attach the function as a listener to be called whenever the media query's result changes
    mediaQuery.addEventListener("change", applyStyles);
    // Call the function at run time
    applyStyles(mediaQuery);
  }
}
