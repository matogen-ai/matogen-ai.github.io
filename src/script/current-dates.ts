export class CurrentDates {
  currentYear = new Date().getFullYear();

  current() {
    // update copyright current year
    const currentYearEl = document.querySelector("[data-current-year]");
    if (!currentYearEl) return;
    currentYearEl.innerHTML = this.currentYear.toString();
  }

  yearsSince() {
    // update years experience
    const els = document.querySelectorAll("[data-years-since]");
    if (!els) return;
    els.forEach((el) => {
      const years = this.currentYear - parseInt((el as HTMLSpanElement).dataset.yearsSince || "0");
      (el as HTMLSpanElement).innerHTML = years.toString();
    });
  }
}
