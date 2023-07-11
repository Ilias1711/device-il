let tab = function () {
  let tabNav = document.querySelectorAll('.tab_item'),
      tabContent = document.querySelectorAll('.tabs_block'),
      tabName;
  tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
  });
  function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('active');
      });
      this.classList.add('active');
      tabName = this.getAttribute('data-tab-name');
      console.log(tabName)
      selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
      tabContent.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
      })
  }
};
tab();
