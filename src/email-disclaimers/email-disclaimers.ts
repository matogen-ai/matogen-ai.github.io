import "../style.scss";
import { CurrentDates } from "../script/current-dates";

export class GeoSpatial {
  init() {
    const dates = new CurrentDates();
    dates.current();
  }
}

new GeoSpatial().init();
