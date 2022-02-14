
window.jQuery = $;
window.$ = $;

const hideHeaderLinks = () => {
  const dropdownHeader = $(".scylla-dropdown--header");
  const urlVersion = window.location.pathname.includes("0.2.x");
  if (urlVersion) {
    dropdownHeader.hide();
  }
};


$(document).ready(function () {
    hideHeaderLinks();
});
