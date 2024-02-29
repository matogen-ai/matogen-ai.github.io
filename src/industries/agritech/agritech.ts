import { CurrentDates } from "../../script/current-dates";
import { HoverEffect } from "../../script/hover";
import { MobileBurgerMenu } from "../../script/mobile-burger-menu";
import "../../style.scss";

export class Agritech {
  static init() {
    this.initMaterialInput();
    new HoverEffect(".responsibility", 3, 3);
    new MobileBurgerMenu().initMobileMenu();
    const dates = new CurrentDates();
    dates.current();
  }
  static initMaterialInput() {
    const labels = document.querySelectorAll(".form-control label");

    labels.forEach((label) => {
      label.innerHTML = (label as HTMLLabelElement).innerText
        .split("")
        .map(
          (letter, idx) => `<span style="
                        transition-delay: ${idx * 50}ms
                    ">${letter}</span>`
        )
        .join("");
    });
  }
}

Agritech.init();
