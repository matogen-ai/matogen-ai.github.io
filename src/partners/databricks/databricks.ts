import { CurrentDates } from "../../script/current-dates";
import { HoverEffect } from "../../script/hover";
import { MobileBurgerMenu } from "../../script/mobile-burger-menu";
import "../../style.scss";

export class Databricks {
  static init() {
    this.initMaterialInput();
    new HoverEffect(".responsibility", 3, 3);
    new MobileBurgerMenu().initMobileMenu();
    const dates = new CurrentDates();
    dates.current();
  }
  static initMaterialInput() {
    // const inputs = document.querySelectorAll('.form-control input');
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

Databricks.init();
