let tab = function () {
  const tabNav = document.querySelectorAll(".tab_item");
  const tabContent = document.querySelectorAll(".tabs_block");
  const parentTabContent = tabContent[0].parentNode;
  const activeClassName = "active";
  const removeTabClass = (elem) =>
    elem.forEach((item) => item.classList.remove(activeClassName));

  tabNav.forEach((item) => item.addEventListener("click", selectTabNav));

  function selectTabNav() {
    removeTabClass(tabNav);
    this.classList.add(activeClassName);
    selectTabContent(this.dataset.tabName);
  }

  const selectTabContent = (tabName) => {
    removeTabClass(tabContent);
    parentTabContent
      .querySelector(`[data-tab-content=${tabName}]`)
      .classList.add(activeClassName);
  };
};
tab();



document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove("modalContainerClose");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.add("modalContainerClose");
});

window.addEventListener("keydown", (elem) => {
  if (elem.key === "Escape") {
    document.getElementById("my-modal").classList.add("modalContainerClose");
  }
});
