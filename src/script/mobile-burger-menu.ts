export class MobileBurgerMenu {
  initMobileMenu() {
    $(document).on("click", ".js-mobile-menu-toggle", (el) => {
      const nav = $(el.target).closest(".navigation");
      if (nav.hasClass("is-open")) {
        nav.removeClass("is-open");
        $("body").removeClass("no-scroll");
        return;
      }
      nav.addClass("is-open");
      $("body").addClass("no-scroll");
    });

    $(document).on("click", ".js-nav-item", (el) => {
      const nav = $(el.target).closest(".navigation");
      nav.removeClass("is-open");
      $("body").removeClass("no-scroll");
    });
  }
}
