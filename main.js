var userSearch = document.getElementById("user-search");
/* Trigger search function when Enter key pressed. */
window.addEventListener("keyup", function(search) {
  search.preventDefault();
  if (search.keyCode == "13") {
    document.getElementById("search").click();
  }
});
function search() {
  var pattren =
    "https://www.google.com/search?q=" + encodeURIComponent(userSearch.value);
  var url = pattren.replace(/%20/g,'+');
  window.open(url, "_blank");
}
