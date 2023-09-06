import { CurrentDates } from "../script/current-dates";
import { HoverEffect } from "../script/hover";
import { MobileBurgerMenu } from "../script/mobile-burger-menu";
import "../style.scss";

export class SocialResponsibility {
  static init() {
    new HoverEffect(".responsibility", 3, 3);
    new MobileBurgerMenu().initMobileMenu();
    const dates = new CurrentDates();
    dates.current();
  }
}

SocialResponsibility.init();
