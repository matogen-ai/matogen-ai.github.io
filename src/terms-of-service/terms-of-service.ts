import "../style.scss";
import { CurrentDates } from "../script/current-dates";
import { MobileBurgerMenu } from "../script/mobile-burger-menu";

export class GeoSpatial {
  init() {
    const dates = new CurrentDates();
    dates.current();
    new MobileBurgerMenu().initMobileMenu();
  }
}

new GeoSpatial().init();
