export class Tabs {
  init() {
    const tabs = document.querySelectorAll(".js-tab-header");

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        // remove is-active class from all tabs
        tabs.forEach((tab) => {
          tab.classList.remove("is-active");
        });
        // remove is-active class from all tab-contents
        const tabContents = document.querySelectorAll(".js-tab-content");
        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("is-active");
        });

        // add is-active class to tab
        tab.classList.add("is-active");
        // get tab href value
        const tabID = tab.getAttribute("href");
        if (!tabID) return;
        // add is-active class to tab-content
        const tabContent = document.querySelector(tabID);
        if (!tabContent) return;
        tabContent.classList.add("is-active");
      });
    });
  }
}
